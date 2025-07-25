/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "flaky-test-detector-shared"],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  typescript: {
    // Temporarily ignore build errors during initial setup
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore lint errors during initial setup  
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
