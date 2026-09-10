import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  turbopack: {
    root: path.join(__dirname),
  },
  agentRules: false,
};

export default nextConfig;
