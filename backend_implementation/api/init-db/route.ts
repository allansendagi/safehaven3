import { NextResponse } from 'next/server';
import { initializeDatabase, testConnection } from '@/lib/db';

// This API route initializes the database schema
// It should be called during deployment or setup
export async function GET(request: Request) {
  try {
    // First test the connection
    const connectionTest = await testConnection();
    
    if (!connectionTest.success) {
      return NextResponse.json(
        { error: 'Database connection failed', details: connectionTest.error },
        { status: 500 }
      );
    }
    
    // Initialize database schema
    const result = await initializeDatabase();
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to initialize database', details: result.error },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        message: 'Database initialized successfully',
        connection: connectionTest
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
