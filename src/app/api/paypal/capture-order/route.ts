// src/app/api/paypal/capture-order/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json();

    // Validate request
    if (!orderId) {
      return NextResponse.json(
        { error: 'Invalid request: missing order ID' },
        { status: 400 }
      );
    }

    // PayPal API credentials
    const clientId = process.env.PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
    const baseUrl = process.env.NODE_ENV === 'production'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com';

    if (!clientId || !clientSecret) {
      console.error('PayPal credentials are not configured');
      return NextResponse.json(
        { error: 'PayPal configuration error' },
        { status: 500 }
      );
    }

    // Get access token
    const tokenResponse = await fetch(`${baseUrl}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    });

    const { access_token } = await tokenResponse.json();

    if (!access_token) {
      return NextResponse.json(
        { error: 'Failed to get PayPal access token' },
        { status: 500 }
      );
    }

    // Capture PayPal order
    const captureResponse = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
        'PayPal-Request-Id': `capture-${orderId}-${Date.now()}`,
      },
    });

    const captureData = await captureResponse.json();

    if (captureData.error) {
      console.error('PayPal capture order error:', captureData);
      return NextResponse.json(
        { error: 'Failed to capture PayPal order' },
        { status: 500 }
      );
    }

    return NextResponse.json(captureData);
  } catch (error) {
    console.error('PayPal capture order error:', error);
    return NextResponse.json(
      { error: 'An error occurred while capturing the PayPal order' },
      { status: 500 }
    );
  }
}