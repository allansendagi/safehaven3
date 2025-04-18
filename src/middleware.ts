// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Only apply to admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
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
    
    // Use environment variables and add some debugging
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';
    
    console.log('Auth attempt:', { 
      provided: { username, password: '********' },
      expected: { username: ADMIN_USERNAME, password: '********' }
    });
    
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