/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['localhost'],
    remotePatterns:[
      {
        protocol: process.env.NEXT_IMAGES_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_WP_BACKEND_API,
        pathname: '/wp-content/uploads/**', // Optional: restrict to specific paths
      },
    ],
  },
};

export default nextConfig;
