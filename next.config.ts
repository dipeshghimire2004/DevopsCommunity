import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enable static export
  trailingSlash: true, //# URLs end with /
  images: {
    unoptimized: true, //# Required for static export
  },
  // Optional: Custom export path
  // distDir: 'build',        # Changes .next to build
  // assetPrefix: '/my-app/', # If deploying to subdirectory
};

export default nextConfig;
