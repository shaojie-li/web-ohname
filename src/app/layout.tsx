import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";
import SideBar from "@/components/sideBar";
import Script from "next/script";

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
            <Script
                async
                src="https://telegram.org/js/telegram-widget.js?22"
                data-telegram-login="testsosovalueBot"
                data-size="large"
                data-onauth="onTelegramAuth(user)"
                data-request-access="write"
            />
            <Script
                id="c"
                dangerouslySetInnerHTML={{
                    __html: 'function onTelegramAuth(user) {console.log("Logged in as ", user)',
                }}
            />
            <body>
                <div className="flex flex-col">
                    <div className="flex min-h-screen">
                        <SideBar header={<Header />} />
                        <div className="flex-1 p-6">
                            <div className="p-6 bg-[#232627] rounded-3xl h-full">{children}</div>
                        </div>
                    </div>
                </div>

                {interception}
            </body>
        </html>
    );
}
