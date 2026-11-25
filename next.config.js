/** @type {import('next').NextConfig} */
// GitHub Pages mirror: the Pages workflow sets GITHUB_PAGES=true to build a
// static export. Vercel builds leave it unset and are unchanged.
const isPagesBuild = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  ...(isPagesBuild
    ? {
        output: 'export',
        trailingSlash: true,
        images: { unoptimized: true },
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      }
    : {}),
};

module.exports = nextConfig;
