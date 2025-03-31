# SafeHaven Backend Implementation Guide

This guide provides instructions for setting up and deploying the backend for your SafeHaven website.

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```
# Database
POSTGRES_URL="your_vercel_postgres_connection_string"

# Email (Resend)
RESEND_API_KEY="your_resend_api_key"
FROM_EMAIL="no-reply@safehaven.org"
ADMIN_EMAIL="admin@safehaven.org"

# Authentication
JWT_SECRET="your_secure_random_string"
```

## Package Dependencies

Add the following dependencies to your project:

```bash
npm install @vercel/postgres bcrypt jsonwebtoken resend
npm install --save-dev @types/bcrypt @types/jsonwebtoken
```

## Database Initialization

After deploying to Vercel, initialize the database by making a GET request to:

```
https://your-domain.com/api/init-db
```

This will create all the necessary tables for:
- Newsletter subscribers
- Contact form submissions
- User authentication
- Resource library
- Analytics tracking

## Authentication Setup

To create an admin user, you can use the registration API and then update the user role in the database:

```sql
UPDATE users SET role = 'admin' WHERE email = 'your-admin-email@example.com';
```

## Email Configuration

1. Sign up for a [Resend](https://resend.com) account
2. Create an API key
3. Add the API key to your environment variables
4. Verify your domain for better deliverability

## Favicon Implementation

The favicon has been configured in the layout.tsx file. Place your favicon.ico file in the public directory.

## Social Media Preview

Social media preview metadata has been added to the layout.tsx file. Make sure to:
1. Update the image paths to point to your actual logo/preview image
2. Customize the descriptions to match your brand messaging

## Deployment Instructions

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Vercel
3. Add the required environment variables in the Vercel dashboard
4. Deploy your application
5. Initialize the database using the API endpoint mentioned above

## Security Considerations

1. Always use HTTPS in production
2. Keep your JWT_SECRET secure and complex
3. Implement rate limiting for authentication endpoints
4. Regularly update dependencies
5. Consider adding CSRF protection

## Maintenance

1. Regularly backup your database
2. Monitor error logs in the Vercel dashboard
3. Set up alerts for failed form submissions
4. Periodically review and clean up old contact submissions

## Additional Resources

- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)
- [Resend Documentation](https://resend.com/docs)
