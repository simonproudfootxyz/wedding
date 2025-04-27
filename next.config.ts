import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
