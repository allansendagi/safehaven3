import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

export async function GET(request: Request) {
  try {
    // Get resources with pagination
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const category = url.searchParams.get('category');
    
    const offset = (page - 1) * limit;
    
    let query = `
      SELECT id, title, description, file_url, category, created_at, updated_at
      FROM resources
    `;
    
    const params = [];
    
    if (category) {
      query += ` WHERE category = $1`;
      params.push(category);
    }
    
    query += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);
    
    const result = await sql.query(query, params);
    
    // Get total count for pagination
    let countQuery = `SELECT COUNT(*) FROM resources`;
    if (category) {
      countQuery += ` WHERE category = $1`;
    }
    
    const countResult = await sql.query(countQuery, category ? [category] : []);
    const totalCount = parseInt(countResult.rows[0].count);
    
    return NextResponse.json({
      resources: result.rows,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching resources:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching resources' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Verify authentication
    const authToken = cookies().get('auth_token')?.value;
    
    if (!authToken) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    let decodedToken;
    try {
      decodedToken = verify(
        authToken,
        process.env.JWT_SECRET || 'fallback_secret_change_in_production'
      );
    } catch (err) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
    
    // Check if user has admin role
    if (decodedToken.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized. Admin access required' },
        { status: 403 }
      );
    }
    
    // Parse request body
    const { title, description, fileUrl, category } = await request.json();
    
    // Validate input
    if (!title || !fileUrl) {
      return NextResponse.json(
        { error: 'Title and file URL are required' },
        { status: 400 }
      );
    }
    
    // Insert new resource
    const result = await sql`
      INSERT INTO resources (title, description, file_url, category, created_at, updated_at)
      VALUES (${title}, ${description || null}, ${fileUrl}, ${category || null}, NOW(), NOW())
      RETURNING id, title, description, file_url, category, created_at, updated_at
    `;
    
    return NextResponse.json(
      { message: 'Resource created successfully', resource: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating resource:', error);
    return NextResponse.json(
      { error: 'An error occurred while creating the resource' },
      { status: 500 }
    );
  }
}
