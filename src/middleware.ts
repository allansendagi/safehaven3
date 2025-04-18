// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Only apply to admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip auth in development mode if BYPASS_ADMIN_AUTH is set
    if (process.env.NODE_ENV === 'development' && process.env.BYPASS_ADMIN_AUTH === 'true') {
      console.log('Bypassing admin authentication in development mode');
      return NextResponse.next();
    }
    
    // Check for basic auth headers
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !isValidAuthHeader(authHeader)) {
      // Return 401 response with WWW-Authenticate header to prompt for credentials
      return new NextResponse(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"',
        },
      });
    }
  }
  
  return NextResponse.next();
}

function isValidAuthHeader(authHeader: string): boolean {
  // Check if header starts with "Basic "
  if (!authHeader.startsWith('Basic ')) {
    return false;
  }
  
  // Extract and decode the credentials
  try {
    const encodedCredentials = authHeader.substring(6); // Remove "Basic " prefix
    const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString();
    const [username, password] = decodedCredentials.split(':');
    
    // Use environment variables with fallbacks
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';
    
    // Avoid logging sensitive information in production
    if (process.env.NODE_ENV !== 'production') {
      console.log('Auth attempt with username:', username);
    }
    
    return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
  } catch (error) {
    console.error('Error validating auth header:', error);
    return false;
  }
}

// Configure the middleware to run only on admin routes
export const config = {
  matcher: '/admin/:path*',
};