/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "referrer-policy",
            value: "no-rederrer",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
