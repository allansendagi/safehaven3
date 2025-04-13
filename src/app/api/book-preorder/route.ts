import { NextResponse } from 'next/server';
import { createPool, createClient } from '@vercel/postgres';
import { sendConfirmationEmail, sendNotificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  let poolConnection = null;
  let clientConnection = null;
  
  try {
    // Determine environment and use appropriate connection method
    const isProduction = process.env.NODE_ENV === 'production';
    
    // Parse request data first to avoid connection issues before validation
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
    
    // Connect to database using the appropriate method
    if (isProduction) {
      // Use pool for production (Vercel)
      poolConnection = createPool();
      
      // Create table if not exists
      await poolConnection.query(`
        CREATE TABLE IF NOT EXISTS book_preorders (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          organization VARCHAR(255),
          submitted_at TIMESTAMP WITH TIME ZONE NOT NULL
        )
      `);
      
      // Insert book preorder
      await poolConnection.query(`
        INSERT INTO book_preorders (
          first_name, last_name, email, organization, submitted_at
        ) VALUES ($1, $2, $3, $4, NOW())
      `, [firstName, lastName, email, organization || null]);
      
    } else {
      // Use direct client for local development
      clientConnection = createClient({
        connectionString: process.env.POSTGRES_URL_NON_POOLING || 
                          process.env.DATABASE_URL_UNPOOLED || 
                          process.env.POSTGRES_URL_DIRECT ||
                          process.env.DATABASE_URL
      });
      
      await clientConnection.connect();
      
      // Create table if not exists
      await clientConnection.query(`
        CREATE TABLE IF NOT EXISTS book_preorders (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          organization VARCHAR(255),
          submitted_at TIMESTAMP WITH TIME ZONE NOT NULL
        )
      `);
      
      // Insert book preorder
      await clientConnection.query(`
        INSERT INTO book_preorders (
          first_name, last_name, email, organization, submitted_at
        ) VALUES ($1, $2, $3, $4, NOW())
      `, [firstName, lastName, email, organization || null]);
    }

    // Send confirmation email to user
    try {
      await sendConfirmationEmail(email, 'contact', { firstName });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
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
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
    }

    return NextResponse.json(
      { message: 'Thank you for your interest in pre-ordering the book! We will notify you when it becomes available.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Book pre-order submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  } finally {
    // Clean up connections
    if (clientConnection) {
      try {
        await clientConnection.end();
      } catch (err) {
        console.error('Error closing client connection:', err);
      }
    }
  }
}