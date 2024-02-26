/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drop.com",
      },
      {
        protocol: "https",
        hostname: "massdrop-s3.imgix.net",
      },
    ],
  },
};

module.exports = nextConfig;
