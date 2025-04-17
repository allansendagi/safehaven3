// src/app/admin/analytics-dashboard/page.tsx

import React from 'react';
import { sql } from '@vercel/postgres';
import { Chart } from '@/components/Chart';
import { formatDistance } from 'date-fns';

// Define types for our data
interface AnalyticsEvent {
  id: number;
  event_type: string;
  event_data: any;
  user_id: string | null;
  ip_address: string;
  user_agent: string;
  created_at: Date;
}

interface EventCount {
  event_type: string;
  count: number;
}

interface DailyEventCount {
  date: string;
  count: number;
}

// This is a server component that fetches data during rendering
export default async function AnalyticsDashboard() {
  // Fetch events from the database
  const eventsResult = await sql`
    SELECT * FROM analytics_events
    ORDER BY created_at DESC
    LIMIT 100
  `;
  
  const events: AnalyticsEvent[] = eventsResult.rows;
  
  // Get event counts by type
  const eventCountsResult = await sql`
    SELECT event_type, COUNT(*) as count
    FROM analytics_events
    GROUP BY event_type
    ORDER BY count DESC
  `;
  
  const eventCounts: EventCount[] = eventCountsResult.rows;
  
  // Get daily event counts for the past 14 days
  const dailyCountsResult = await sql`
    SELECT 
      DATE(created_at) as date,
      COUNT(*) as count
    FROM analytics_events
    WHERE created_at >= NOW() - INTERVAL '14 days'
    GROUP BY DATE(created_at)
    ORDER BY date
  `;
  
  const dailyCounts: DailyEventCount[] = dailyCountsResult.rows;
  
  // Format the data for charts
  const chartData = dailyCounts.map(item => ({
    name: item.date,
    value: Number(item.count)
  }));
  
  // Download events specifically
  const downloadEventsResult = await sql`
    SELECT * FROM analytics_events
    WHERE event_type = 'download' OR event_data::text LIKE '%download%'
    ORDER BY created_at DESC
  `;
  
  const downloadEvents: AnalyticsEvent[] = downloadEventsResult.rows;
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-wide">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[var(--primary)] mb-6">
            Analytics Dashboard
          </h1>
          
          {/* Dashboard content as provided in the previous code */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}