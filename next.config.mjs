/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "careernet-streaming-bucket.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
