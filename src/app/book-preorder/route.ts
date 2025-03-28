import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { sendConfirmationEmail, sendNotificationEmail } from '../lib/email';

export async function POST(request: Request) {
  try {
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

    // Check if the book_preorders table exists, create it if not
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
    } catch (tableError) {
      console.error('Error creating book_preorders table:', tableError);
    }

    // Insert book preorder
    await sql`
      INSERT INTO book_preorders (
        first_name, 
        last_name, 
        email, 
        organization,
        submitted_at
      )
      VALUES (
        ${firstName}, 
        ${lastName}, 
        ${email}, 
        ${organization || null},
        NOW()
      )
    `;

    // Send confirmation email to user
    try {
      await sendConfirmationEmail(email, 'contact', { firstName });
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
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
