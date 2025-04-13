import { NextResponse } from 'next/server';
import { createPool } from '@vercel/postgres';
import { sendConfirmationEmail } from '@/lib/email';

export async function POST(request: Request) {
  const pool = createPool();
  
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await pool.query(
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
    await pool.query(
      `INSERT INTO newsletter_subscribers (email, subscribed_at)
       VALUES ($1, NOW())`,
      [email]
    );

    // Send confirmation email
    try {
      await sendConfirmationEmail(email, 'newsletter');
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
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
  }
}