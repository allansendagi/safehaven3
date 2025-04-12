import { NextResponse } from 'next/server';
import { createClient } from '@vercel/postgres';
import { sendConfirmationEmail } from '@/lib/email';

export async function POST(request: Request) {
  // Create a client for direct connection instead of using sql
  const client = createClient();
  
  try {
    // Connect to the database
    await client.connect();
    
    const { email } = await request.json();

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await client.query(
      `SELECT * FROM newsletter_subscribers WHERE email = $1`,
      [email]
    );

    if (existingSubscriber.rowCount > 0) {
      return NextResponse.json(
        { message: 'You are already subscribed to our newsletter' },
        { status: 200 }
      );
    }

    // Insert new subscriber
    await client.query(
      `INSERT INTO newsletter_subscribers (email, subscribed_at)
       VALUES ($1, NOW())`,
      [email]
    );

    // Send confirmation email
    try {
      await sendConfirmationEmail(email, 'newsletter');
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Continue with the subscription process even if email fails
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  } finally {
    // Always close the client connection
    await client.end();
  }
}