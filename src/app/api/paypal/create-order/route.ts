// src/app/api/paypal/create-order/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { items, amount } = await request.json();

    // Validate request
    if (!items || !amount) {
      return NextResponse.json(
        { error: 'Invalid request: missing required fields' },
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

    // Create PayPal order
    const orderResponse = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: amount.toString(),
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: amount.toString(),
                },
              },
            },
            items: items,
          },
        ],
        application_context: {
          brand_name: 'Allan Sendagi Books',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/books/payment-success`,
          cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/books/payment-cancel`,
        },
      }),
    });

    const orderData = await orderResponse.json();

    if (orderData.error) {
      console.error('PayPal create order error:', orderData);
      return NextResponse.json(
        { error: 'Failed to create PayPal order' },
        { status: 500 }
      );
    }

    return NextResponse.json(orderData);
  } catch (error) {
    console.error('PayPal create order error:', error);
    return NextResponse.json(
      { error: 'An error occurred while creating the PayPal order' },
      { status: 500 }
    );
  }
}