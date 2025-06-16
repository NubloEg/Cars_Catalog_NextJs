import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://testing-api.ru-rating.ru/:path*", // Проксируем запросы
      },
    ];
  },
};

export default nextConfig;
