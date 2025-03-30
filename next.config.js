/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  experimental: {
    esmExternals: 'loose',
    // This helps Next.js resolve module imports more flexibly
    transpilePackages: [],
  },
};

module.exports = nextConfig;