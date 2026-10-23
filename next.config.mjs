/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/static-site-conversion',
        destination: '/php2shell-updating#static-conversion',
        permanent: true,
      },
      {
        source: '/static-site-conversion/thanks',
        destination: '/php2shell-updating/thanks',
        permanent: true,
      },
      {
        source: '/php2shell',
        destination: '/php2shell-updating',
        permanent: true,
      },
      {
        source: '/php2shell/thanks',
        destination: '/php2shell-updating/thanks',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
