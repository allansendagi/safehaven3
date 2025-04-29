// src/app/api/book-purchase/route.ts
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
    const { 
      firstName, 
      lastName, 
      email, 
      address,
      city,
      state,
      postalCode,
      country,
      bookId,
      quantity,
      format,
      paypalOrderId,
      paypalCaptureId,
      totalAmount
    } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !bookId || !paypalOrderId || !paypalCaptureId) {
      return NextResponse.json(
        { error: 'Please fill in all required fields and complete payment' },
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
        CREATE TABLE IF NOT EXISTS book_purchases (
          id SERIAL PRIMARY KEY,
          book_id VARCHAR(50) NOT NULL,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          address TEXT,
          city VARCHAR(100),
          state VARCHAR(100),
          postal_code VARCHAR(20),
          country VARCHAR(100),
          quantity INTEGER NOT NULL DEFAULT 1,
          format VARCHAR(50) NOT NULL,
          paypal_order_id VARCHAR(255) NOT NULL,
          paypal_capture_id VARCHAR(255) NOT NULL,
          total_amount DECIMAL(10,2) NOT NULL,
          payment_status VARCHAR(50) DEFAULT 'completed',
          purchased_at TIMESTAMP WITH TIME ZONE NOT NULL,
          fulfilled BOOLEAN DEFAULT FALSE,
          fulfillment_date TIMESTAMP WITH TIME ZONE
        )
      `);
      
      // Insert book purchase
      await poolConnection.query(`
        INSERT INTO book_purchases (
          book_id, first_name, last_name, email, address, city, state, postal_code, country,
          quantity, format, paypal_order_id, paypal_capture_id, total_amount, purchased_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW())
      `, [
        bookId, firstName, lastName, email, address || null, city || null, 
        state || null, postalCode || null, country || null,
        quantity || 1, format, paypalOrderId, paypalCaptureId, totalAmount
      ]);
      
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
        CREATE TABLE IF NOT EXISTS book_purchases (
          id SERIAL PRIMARY KEY,
          book_id VARCHAR(50) NOT NULL,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          address TEXT,
          city VARCHAR(100),
          state VARCHAR(100),
          postal_code VARCHAR(20),
          country VARCHAR(100),
          quantity INTEGER NOT NULL DEFAULT 1,
          format VARCHAR(50) NOT NULL,
          paypal_order_id VARCHAR(255) NOT NULL,
          paypal_capture_id VARCHAR(255) NOT NULL,
          total_amount DECIMAL(10,2) NOT NULL,
          payment_status VARCHAR(50) DEFAULT 'completed',
          purchased_at TIMESTAMP WITH TIME ZONE NOT NULL,
          fulfilled BOOLEAN DEFAULT FALSE,
          fulfillment_date TIMESTAMP WITH TIME ZONE
        )
      `);
      
      // Insert book purchase
      await clientConnection.query(`
        INSERT INTO book_purchases (
          book_id, first_name, last_name, email, address, city, state, postal_code, country,
          quantity, format, paypal_order_id, paypal_capture_id, total_amount, purchased_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW())
      `, [
        bookId, firstName, lastName, email, address || null, city || null, 
        state || null, postalCode || null, country || null,
        quantity || 1, format, paypalOrderId, paypalCaptureId, totalAmount
      ]);
    }

    // Send confirmation email to user
    try {
      await sendConfirmationEmail(email, 'purchase', { 
        firstName,
        bookId,
        format,
        quantity,
        orderId: paypalOrderId
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
    }

    // Send notification email to admin
    try {
      await sendNotificationEmail({
        type: 'purchase',
        data: { 
          firstName, 
          lastName, 
          email,
          address,
          city,
          state,
          postalCode,
          country,
          bookId,
          format,
          quantity,
          totalAmount,
          paypalOrderId,
          subject: 'New Book Purchase',
          message: `New book purchase from ${firstName} ${lastName} (${email}) for book ID: ${bookId}, format: ${format}, quantity: ${quantity || 1}`
        }
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
    }

    return NextResponse.json(
      { 
        message: 'Thank you for your purchase! We\'ll send you a confirmation email with details.',
        orderId: paypalOrderId
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Book purchase error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your purchase' },
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