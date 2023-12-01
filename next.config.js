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
    ],
  },
};

module.exports = nextConfig;
