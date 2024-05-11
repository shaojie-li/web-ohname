/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "placebear.com",
                port: "",
            },
            {
                protocol: "http",
                hostname: "placekitten.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
