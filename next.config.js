/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "www.freetogame.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.freetogame.com",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
