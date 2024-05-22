/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", // 启用静态导出

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
