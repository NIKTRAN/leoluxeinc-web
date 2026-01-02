/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  turbo: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
