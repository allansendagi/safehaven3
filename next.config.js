/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ["@vercel/postgres"]

    // This helps Next.js resolve module imports more flexibly
  
  },
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.POSTGRES_PRISMA_URL,
  },

};

module.exports = nextConfig;
