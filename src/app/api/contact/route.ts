import { NextResponse } from 'next/server';
import { createClient } from '@vercel/postgres'; // Change from importing sql
import { sendConfirmationEmail, sendNotificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  // Create a client for direct connection instead of using sql
  const client = createClient();
  
  try {
    // Connect to the database
    await client.connect();
    
    const { firstName, lastName, email, organization, subject, message, newsletter } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
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

    // Insert contact submission
    await client.query(`
      INSERT INTO contact_submissions (
        first_name, 
        last_name, 
        email, 
        organization, 
        subject, 
        message, 
        newsletter_opt_in,
        submitted_at
      )
      VALUES (
        $1, $2, $3, $4, $5, $6, $7, NOW()
      )
    `, [firstName, lastName, email, organization || null, subject, message, newsletter || false]);

    // If user opted in for newsletter, add to newsletter subscribers
    if (newsletter) {
      const existingSubscriber = await client.query(
        `SELECT * FROM newsletter_subscribers WHERE email = $1`,
        [email]
      );

      if (existingSubscriber.rowCount === 0) {
        await client.query(
          `INSERT INTO newsletter_subscribers (email, subscribed_at) VALUES ($1, NOW())`,
          [email]
        );
      }
    }

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
        data: { firstName, lastName, email, organization, subject, message }
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Continue with the submission process even if email fails
    }

    return NextResponse.json(
      { message: 'Your message has been submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  } finally {
    // Always close the client connection
    await client.end();
  }
}