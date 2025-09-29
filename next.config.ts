import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
};

export default withContentlayer(nextConfig);
