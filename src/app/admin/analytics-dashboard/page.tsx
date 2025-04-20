// src/app/admin/analytics-dashboard/page.tsx

import React from 'react';
import { sql } from '@vercel/postgres';
import { Chart } from '@/components/Chart';
import { formatDistance } from 'date-fns';
import DebugEnvVars from './debug';
import { testConnection } from '@/lib/db';

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
  let events: AnalyticsEvent[] = [];
  let eventCounts: EventCount[] = [];
  let dailyCounts: DailyEventCount[] = [];
  let downloadEvents: AnalyticsEvent[] = [];
  let error = null;
  let connectionStatus = null;

  try {
    // Test DB connection first
    connectionStatus = await testConnection();
    
    if (!connectionStatus.success) {
      throw new Error(`Database connection failed: ${connectionStatus.error}`);
    }
    
    // Fetch events from the database using sql tag template
    const eventsResult = await sql`
      SELECT * FROM analytics_events
      ORDER BY created_at DESC
      LIMIT 100
    `;
    
    events = eventsResult.rows.map(row => ({
      id: row.id,
      event_type: row.event_type,
      event_data: row.event_data,
      user_id: row.user_id,
      ip_address: row.ip_address,
      user_agent: row.user_agent,
      created_at: row.created_at
    }));
    
    // Get event counts by type
    const eventCountsResult = await sql`
      SELECT event_type, COUNT(*) as count
      FROM analytics_events
      GROUP BY event_type
      ORDER BY count DESC
    `;
    
    eventCounts = eventCountsResult.rows.map(row => ({
      event_type: row.event_type,
      count: Number(row.count)
    }));
    
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
    
    dailyCounts = dailyCountsResult.rows.map(row => ({
      date: row.date,
      count: Number(row.count)
    }));
    
    // Download events specifically
    const downloadEventsResult = await sql`
      SELECT * FROM analytics_events
      WHERE event_type = 'download' OR event_data::text LIKE '%download%'
      ORDER BY created_at DESC
    `;
    
    downloadEvents = downloadEventsResult.rows.map(row => ({
      id: row.id,
      event_type: row.event_type,
      event_data: row.event_data,
      user_id: row.user_id,
      ip_address: row.ip_address,
      user_agent: row.user_agent,
      created_at: row.created_at
    }));
  } catch (err) {
    console.error('Database query error:', err);
    error = err instanceof Error ? err.message : String(err);
  }
  
  // Format the data for charts
  const chartData = dailyCounts.map(item => ({
    name: item.date,
    value: Number(item.count)
  }));
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-wide">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[var(--primary)] mb-6">
            Analytics Dashboard
          </h1>
          
          {/* Add the debug component */}
          <DebugEnvVars />

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
              <p className="font-bold">Error</p>
              <p>{error}</p>
              
              {connectionStatus && !connectionStatus.success && (
                <div className="mt-2">
                  <p className="font-semibold">Connection Status:</p>
                  <pre className="whitespace-pre-wrap overflow-auto bg-gray-50 p-2 mt-1 rounded text-sm">
                    {JSON.stringify(connectionStatus, null, 2)}
                  </pre>
                </div>
              )}
              
              <p className="mt-2">
                Please check your database connection settings and ensure the tables are properly initialized.
                You can try running the <code>/api/init-db</code> endpoint to initialize the database.
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Total Events</h2>
              <p className="text-4xl font-bold">{events.length}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Unique Event Types</h2>
              <p className="text-4xl font-bold">{eventCounts.length}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Downloads</h2>
              <p className="text-4xl font-bold">{downloadEvents.length}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-semibold mb-4">Events Over Time</h2>
            <div className="h-64">
              {chartData.length > 0 ? (
                <Chart 
                  data={chartData} 
                  xKey="name" 
                  yKey="value"
                  title="Daily Event Count" 
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No data available
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Event Types</h2>
              {eventCounts.length > 0 ? (
                <div className="overflow-auto max-h-96">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="text-left py-2">Event Type</th>
                        <th className="text-right py-2">Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eventCounts.map((eventCount, index) => (
                        <tr key={index} className="border-t">
                          <td className="py-2">{eventCount.event_type}</td>
                          <td className="text-right py-2">{eventCount.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">No event data available</p>
              )}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
              {events.length > 0 ? (
                <div className="overflow-auto max-h-96">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="text-left py-2">Event</th>
                        <th className="text-left py-2">User</th>
                        <th className="text-right py-2">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event) => (
                        <tr key={event.id} className="border-t">
                          <td className="py-2">{event.event_type}</td>
                          <td className="py-2 text-sm text-gray-600">
                            {event.user_id || event.ip_address}
                          </td>
                          <td className="text-right py-2 text-sm text-gray-600">
                            {formatDistance(new Date(event.created_at), new Date(), { addSuffix: true })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">No event data available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}