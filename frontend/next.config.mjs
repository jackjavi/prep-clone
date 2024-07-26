/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        //destination: "http://localhost:5555/api/:path*",
        destination: "https://prep-clone-r4qq.onrender.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
