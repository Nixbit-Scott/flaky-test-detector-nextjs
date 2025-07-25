/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "flaky-test-detector-shared"],
  output: 'standalone',
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
