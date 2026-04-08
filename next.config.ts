/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  reactCompiler: false,
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [60, 75, 90],
  },
};

export default nextConfig;