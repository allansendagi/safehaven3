import { NextResponse } from 'next/server';
import { createClient } from '@vercel/postgres';
import { sendConfirmationEmail, sendNotificationEmail } from '@/lib/email';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  let client = null;
  
  try {
    // First try to create the book_preorders table if it doesn't exist
    // This uses the sql client which might work better in some environments
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS book_preorders (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          organization VARCHAR(255),
          submitted_at TIMESTAMP WITH TIME ZONE NOT NULL
        )
      `;
      console.log('Book preorders table check completed');
    } catch (tableError) {
      console.error('Error checking/creating book_preorders table with sql client:', tableError);
      // We'll try again with the direct client below
    }
  
    // Create a client with non-pooled connection for better stability
    // Try multiple connection strings to improve reliability
    const connectionString = 
      process.env.POSTGRES_URL_NON_POOLING || 
      process.env.DATABASE_URL_UNPOOLED || 
      process.env.POSTGRES_URL_DIRECT || 
      process.env.DATABASE_URL;
      
    if (!connectionString) {
      throw new Error('Database connection string not found in environment variables');
    }
    
    client = createClient({
      connectionString,
      ssl: { rejectUnauthorized: true },
      connect_timeout: 10 // shorter timeout to fail faster
    });
    
    // Connect to the database
    await client.connect();
    console.log('Connected to database');
    
    const { firstName, lastName, email, organization } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if the book_preorders table exists, create it if not using the direct client
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS book_preorders (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          organization VARCHAR(255),
          submitted_at TIMESTAMP WITH TIME ZONE NOT NULL
        )
      `);
      console.log('Book preorders table verified/created');
    } catch (tableError) {
      console.error('Error creating book_preorders table with direct client:', tableError);
      throw new Error(`Table creation failed: ${tableError instanceof Error ? tableError.message : String(tableError)}`);
    }

    // Insert book preorder
    console.log('Attempting to insert book preorder');
    const insertResult = await client.query(`
      INSERT INTO book_preorders (
        first_name, 
        last_name, 
        email, 
        organization,
        submitted_at
      )
      VALUES (
        $1, $2, $3, $4, NOW()
      )
      RETURNING id
    `, [firstName, lastName, email, organization || null]);
    
    console.log('Book preorder inserted with ID:', insertResult.rows[0]?.id);

    // Send confirmation email to user
    try {
      await sendConfirmationEmail(email, 'contact', { firstName });
      console.log('Confirmation email sent to user');
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Continue with the submission process even if email fails
    }

    // Send notification email to admin
    try {
      await sendNotificationEmail({
        type: 'contact',
        data: { 
          firstName, 
          lastName, 
          email, 
          organization,
          subject: 'Book Pre-order',
          message: `New book pre-order interest from ${firstName} ${lastName} (${email})${organization ? ` at ${organization}` : ''}.`
        }
      });
      console.log('Notification email sent to admin');
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Continue with the submission process even if email fails
    }

    return NextResponse.json(
      { message: 'Thank you for your interest in pre-ordering the book! We will notify you when it becomes available.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Book pre-order submission error:', error);
    
    // Enhanced error handling with specific messages
    let errorMessage = 'An error occurred while processing your request';
    let statusCode = 500;
    
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      
      if (error.message.includes('relation "book_preorders" does not exist')) {
        errorMessage = 'Database setup issue. Please try again later or contact support.';
      } else if (error.message.includes('timeout') || error.message.includes('Connection terminated')) {
        errorMessage = 'Database connection timeout. Please try again later.';
      } else if (error.message.includes('connection string')) {
        errorMessage = 'Database configuration issue. Please contact support.';
        statusCode = 503; // Service Unavailable
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  } finally {
    // Always close the client connection if it was created
    if (client) {
      try {
        await client.end();
        console.log('Database connection closed');
      } catch (closeError) {
        console.error('Error closing database connection:', closeError);
      }
    }
  }
}