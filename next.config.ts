import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Enables styled-components support
  },
};

export default nextConfig;
