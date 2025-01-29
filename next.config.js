/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
});

