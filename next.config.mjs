/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Corrected to match all paths recursively
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**', // Corrected to match all paths recursively
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
        pathname: '/**', // Corrected to match all paths recursively
      },
    ],
  },
};

export default nextConfig;

