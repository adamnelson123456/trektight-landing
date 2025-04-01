/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'player.cloudinary.com'],
  },
}

module.exports = nextConfig 