import { Resend } from 'resend';

// Initialize Resend with API key (to be set in environment variables)
const resend = new Resend(process.env.RESEND_API_KEY as string);

// Admin email address to receive notifications
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@safehaven.world';
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@safehaven.world';

/**
 * Send confirmation email to users after form submission or book purchase.
 * @param email - Recipient email address.
 * @param type - Email type: 'newsletter', 'contact', or 'purchase'.
 * @param data - Optional additional data for personalization and order details.
 */
export async function sendConfirmationEmail(
  email: string, 
  type: 'newsletter' | 'contact' | 'purchase',
  data?: { 
    firstName?: string;
    lastName?: string;
    bookId?: string;
    format?: string;
    quantity?: number;
  }
) {
  let subject = '';
  let html = '';

  if (type === 'newsletter') {
    subject = 'Welcome to The Readiness Institute Newsletter';
    html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">Thank you for subscribing!</h2>
        <p>You've successfully subscribed to The Readiness Institute newsletter.</p>
        <p>You'll now receive updates on AI readiness, governance frameworks, and global initiatives.</p>
        <p>If you didn't request this subscription, please ignore this email or contact us at ${ADMIN_EMAIL}.</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
          <p>SafeHaven - The Readiness Institute</p>
          <p>You can unsubscribe at any time by clicking the unsubscribe link in our emails.</p>
        </div>
      </div>
    `;
  } else if (type === 'contact') {
    const firstName = data?.firstName || 'there';
    subject = "We've received your message - SafeHaven";
    html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">Thank you for contacting us!</h2>
        <p>Hi ${firstName},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>If you have any urgent inquiries, please contact us directly at ${ADMIN_EMAIL}.</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
          <p>SafeHaven - The Readiness Institute</p>
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `;
  } else if (type === 'purchase') {
    const firstName = data?.firstName || '';
    subject = 'Your Book Purchase Confirmation';
    html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">Thank you for your purchase${firstName ? `, ${firstName}` : ''}!</h2>
        <p>Here are your order details:</p>
        <ul>
          <li><strong>Book ID:</strong> ${data?.bookId}</li>
          <li><strong>Format:</strong> ${data?.format}</li>
          <li><strong>Quantity:</strong> ${data?.quantity}</li>
        </ul>
        <p>If you have any questions, please contact us at ${ADMIN_EMAIL}.</p>
      </div>
    `;
  } else {
    throw new Error('Invalid email type');
  }

  const result = await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject,
    html,
  });

  if ((result as any).error) {
    throw new Error(`Failed to send email: ${(result as any).error.message}`);
  }

  return result;
}

/**
 * Send notification email to administrators.
 * @param params - An object containing the type of email and the data to include.
 */
export async function sendNotificationEmail({
  type,
  data,
}: {
  type: 'newsletter' | 'contact' | 'purchase';
  data: any;
}) {
  let subject = '';
  let html = '';

  if (type === 'newsletter') {
    subject = 'New Newsletter Subscription';
    html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">New Newsletter Subscription</h2>
        <p>A new user has subscribed to The Readiness Institute newsletter.</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      </div>
    `;
  } else if (type === 'contact') {
    subject = 'New Contact Form Submission';
    html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Organization:</strong> ${data.organization || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <p><strong>Newsletter Opt-in:</strong> ${data.newsletter ? 'Yes' : 'No'}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      </div>
    `;
  } else if (type === 'purchase') {
    const firstName = data.firstName || '';
    subject = `New Book Purchase by ${firstName || 'a customer'}`;
    html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">New Book Purchase</h2>
        <p><strong>Name:</strong> ${firstName} ${data.lastName || ''}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Book ID:</strong> ${data.bookId}</p>
        <p><strong>Format:</strong> ${data.format}</p>
        <p><strong>Quantity:</strong> ${data.quantity}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      </div>
    `;
  } else {
    throw new Error('Invalid notification type');
  }

  const result = await resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject,
    html,
  });

  if ((result as any).error) {
    throw new Error(`Failed to send notification: ${(result as any).error.message}`);
  }

  return result;
}
