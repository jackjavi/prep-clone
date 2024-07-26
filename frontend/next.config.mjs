/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "http://localhost:5555/api/:path*",
        destination: "https://odd2tips.onrender.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
