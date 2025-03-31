import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { eventType, eventData } = await request.json();

    // Validate required fields
    if (!eventType) {
      return NextResponse.json(
        { error: 'Event type is required' },
        { status: 400 }
      );
    }

    // Get user ID from auth token if available
    let userId = null;
    const authCookie = cookies().get('auth_token');
    if (authCookie?.value) {
      try {
        // Simple JWT parsing to get user ID - you might want to use verify() from jsonwebtoken
        const payload = JSON.parse(
          Buffer.from(authCookie.value.split('.')[1], 'base64').toString()
        );
        userId = payload.userId;
      } catch (e) {
        console.error('Error parsing auth token:', e);
      }
    }

    // Get IP and user agent
    const headers = new Headers(request.headers);
    const ip = headers.get('x-forwarded-for') || 'unknown';
    const userAgent = headers.get('user-agent') || 'unknown';

    // Insert analytics event
    await sql`
      INSERT INTO analytics_events (
        event_type,
        event_data,
        user_id,
        ip_address,
        user_agent,
        created_at
      )
      VALUES (
        ${eventType},
        ${eventData ? JSON.stringify(eventData) : null},
        ${userId},
        ${ip},
        ${userAgent},
        NOW()
      )
    `;

    return NextResponse.json(
      { message: 'Event recorded successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Analytics event error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}