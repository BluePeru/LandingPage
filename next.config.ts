import type { NextConfig } from "next";

const WEB_MAP_URL = (process.env.WEB_MAP_URL || "https://web-map-nu.vercel.app").replace(/\/$/, "");

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/mapa",
        destination: `${WEB_MAP_URL}/mapa`,
      },
      {
        source: "/mapa/:path*",
        destination: `${WEB_MAP_URL}/mapa/:path*`,
      },
    ];
  },
};

export default nextConfig;
