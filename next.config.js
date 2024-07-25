/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
      {
          protocol : 'https',
          hostname : 'next.fosscell.org', 
      }
    ],
  },
}

module.exports = nextConfig
