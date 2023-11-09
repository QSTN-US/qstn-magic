/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // https://nftstorage.link/ipfs/bafybeief4js454epthlxwkckgoxto2rkl25clqz4x6i4r34rdz4sl7jssi/24.png
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nftstorage.link',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
}

module.exports = nextConfig
