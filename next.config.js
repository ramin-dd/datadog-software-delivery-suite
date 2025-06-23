/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['dd-trace'],
  },
  env: {
    DD_ENV: process.env.DD_ENV || 'development',
    DD_SERVICE: process.env.DD_SERVICE || 'datadog-suite',
    DD_VERSION: process.env.DD_VERSION || '1.0.0',
  },
  webpack: (config, { isServer }) => {
    // Datadog trace configuration
    if (isServer) {
      config.externals.push('dd-trace');
    }
    return config;
  },
}

module.exports = nextConfig 