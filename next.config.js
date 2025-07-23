/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production" 

const nextConfig = {
  output: "export",
  basePath: isProd ? "/new-dunkstore" : "",
  assetPrefix: isProd ? '/new-dunkstore/' : '',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
