import type { NextConfig } from "next";

const withSitemap = require('next-sitemap');
module.exports = withSitemap({
  reactStrictMode: true,
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
