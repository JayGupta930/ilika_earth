/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable “export” mode: build HTML for every route
  output: "export",
  trailingSlash: true,

  // (Optional) if you want `/about` → `/about/index.html` instead of `/about.html`
  // trailingSlash: true,

  // For images in static export without Cloud Functions
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
