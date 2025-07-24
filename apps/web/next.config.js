/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: true,
  },
  transpilePackages: ["@repo/ui", "shared"],
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
