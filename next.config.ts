import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during production builds (optional)
    ignoreBuildErrors: false,
  },
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
};

export default withContentlayer(nextConfig);
