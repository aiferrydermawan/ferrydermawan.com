/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
                pathname: "/n1hqrcegw/**",
            },
        ],
    },
};

module.exports = nextConfig;
