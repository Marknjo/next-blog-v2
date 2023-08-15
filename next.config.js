/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/Marknjo/next-blog-v2-test-posts/main/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
