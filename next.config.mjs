import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @returns {import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Keep production builds from overwriting a running development server.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  // Enable “export” mode: build HTML for every route
  output: "export",
  trailingSlash: true,

  // (Optional) if you want `/about` → `/about/index.html` instead of `/about.html`
  // trailingSlash: true,

  // For images in static export without Cloud Functions
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
