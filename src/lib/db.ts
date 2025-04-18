import { sql } from '@vercel/postgres';

/**
 * Initialize database schema
 * This function creates the necessary tables if they don't exist
 */
export async function initializeDatabase() {
  try {
    // Create newsletter_subscribers table
    await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        subscribed_at TIMESTAMP NOT NULL,
        unsubscribed_at TIMESTAMP,
        status VARCHAR(50) DEFAULT 'active',
        CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
      );
    `;
    // Create contact_submissions table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        organization VARCHAR(255),
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        newsletter_opt_in BOOLEAN DEFAULT FALSE,
        submitted_at TIMESTAMP NOT NULL,
        status VARCHAR(50) DEFAULT 'new'
      );
    `;
    // Create resources table for resource library
    await sql`
      CREATE TABLE IF NOT EXISTS resources (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        file_url VARCHAR(255),
        category VARCHAR(100),
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL
      );
    `;
    // Create users table for authentication
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255),
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP NOT NULL,
        last_login TIMESTAMP
      );
    `;
    // Create analytics_events table for tracking
    await sql`
      CREATE TABLE IF NOT EXISTS analytics_events (
        id SERIAL PRIMARY KEY,
        event_type VARCHAR(100) NOT NULL,
        event_data JSONB,
        user_id INTEGER,
        ip_address VARCHAR(50),
        user_agent TEXT,
        created_at TIMESTAMP NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
      );
    `;
    
    // Insert a test event (from the first file)
    await sql`
      INSERT INTO analytics_events (
        event_type, 
        event_data, 
        ip_address, 
        user_agent, 
        created_at
      )
      VALUES (
        'test_event', 
        '{"message": "This is a test event"}'::jsonb, 
        '127.0.0.1', 
        'Analytics Initialization', 
        NOW()
      )
    `;
    
    // Get count of events (from the first file)
    const countResult = await sql`SELECT COUNT(*) FROM analytics_events`;
    
    console.log('Database initialized successfully');
    return { 
      success: true,
      eventCount: countResult.rows[0].count
    };
  } catch (error) {
    console.error('Failed to initialize database:', error);
    return { success: false, error };
  }
}

/**
 * Test database connection
 */
export async function testConnection() {
  try {
    const result = await sql`SELECT NOW();`;
    return { 
      success: true, 
      timestamp: result.rows[0].now,
      message: 'Database connection successful'
    };
  } catch (error) {
    console.error('Database connection failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : String(error),
      env: {
        hasDbUrl: !!process.env.DATABASE_URL,
        hasPostgresUrl: !!process.env.POSTGRES_URL,
        hasPrismaUrl: !!process.env.POSTGRES_PRISMA_URL
      }
    };
  }
}