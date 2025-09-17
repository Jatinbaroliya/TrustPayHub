const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // or list specific hostnames you use for images
      },
    ],
  },
};

export default nextConfig;
