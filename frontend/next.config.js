// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables `next export`
  images: {
    unoptimized: true, // GitHub Pages can't optimize images on the fly
  },
};

export default nextConfig;
