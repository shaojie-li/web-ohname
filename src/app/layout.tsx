import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

export const metadata: Metadata = {
    title: "oh-name",
    description: "快速获取你想要的命名",
    applicationName: "oh-name",

    openGraph: {
        ...openGraphImage,
        title: "oh-name ot",
        description: "oh-name ot",
        type: "website",
    },
};

export default function RootLayout({
    children,
    interception,
}: Readonly<{
    children: ReactNode;
    interception: ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    {children}
                </div>

                {interception}
            </body>
        </html>
    );
}
