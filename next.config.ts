import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },

  // Prevent Next.js from trying to bundle Three.js on the server
  webpack(config, { isServer }) {
    if (isServer) {
      // Treat these packages as external on the server so they're never bundled
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : []),
        "three",
        "@react-three/fiber",
        "@react-three/drei",
      ];
    }
    return config;
  },
};

export default nextConfig;

