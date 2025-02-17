import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true, // permanent: true для 301 редиректа (постоянное перенаправление)
      },
    ];
  },
};

export default nextConfig;
