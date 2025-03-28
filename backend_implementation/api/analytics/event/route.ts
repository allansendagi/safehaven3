import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { event_type, event_data, user_id, ip_address, user_agent } = await request.json();

    // Validate input
    if (!event_type) {
      return NextResponse.json(
        { error: 'Event type is required' },
        { status: 400 }
      );
    }

    // Insert analytics event
    const result = await sql`
      INSERT INTO analytics_events (
        event_type, 
        event_data, 
        user_id, 
        ip_address, 
        user_agent, 
        created_at
      )
      VALUES (
        ${event_type}, 
        ${event_data ? JSON.stringify(event_data) : null}, 
        ${user_id || null}, 
        ${ip_address || null}, 
        ${user_agent || null}, 
        NOW()
      )
      RETURNING id
    `;

    return NextResponse.json({
      message: 'Analytics event recorded',
      event_id: result.rows[0].id
    });
  } catch (error) {
    console.error('Error recording analytics event:', error);
    return NextResponse.json(
      { error: 'An error occurred while recording the analytics event' },
      { status: 500 }
    );
  }
}
