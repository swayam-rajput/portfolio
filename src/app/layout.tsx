
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
/* @ts-ignore */
import "./globals.css";

import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { ReactLenis } from "@/lib/lenis";
export const metadata: Metadata = {
    title: "Swayam Rajput | Porfolio",
    description: "AI Engineer | SWE | Freelancer",
    openGraph:{
        images: [
            {
                url: '/og-image.png', // refers to /public/og.png
                width: 1200,
                height: 630,

            }
        ]
    }
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) 
{
    
    return (
        <html lang="en" style={{"colorScheme":"dark"}} className=" dark">

        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"/>

        </head>
        
            <body
            // classNameName={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased mx-auto flex min-h-screen max-w-3xl flex-col px-6 font-spacegrotesk `}
            className={` antialiased mx-auto flex min-h-screen max-w-3xl flex-col justify-items-center dark:text-white text-black font-spacegrotesk px-4 pb-8 sm:px-6 `}>
            {/* <Providers> */}
                <Navbar  />
                    <ReactLenis root>
                        {children}   

                    </ReactLenis>
                    <Analytics/>
                <Footer/>
                <div className="fixed sm:flex hidden bottom-0 left-0 right-0 z-[101] h-20 w-full pointer-events-none opacity-100">
                    <div className="relative w-full h-full">
                        
                        <div
                        className="absolute inset-0 opacity-100
                                [mask-image:linear-gradient(transparent_0%,black_25%,black_50%,transparent_60%)]
                                backdrop-blur-[0.25rem]">
                        </div>

                        <div
                        className="absolute inset-0 opacity-100
                                [mask-image:linear-gradient(transparent_20%,black_50%,black_75%,transparent_80%)]
                                backdrop-blur-[0.375rem]">
                        </div>

                        <div
                        className="absolute inset-0 opacity-100
                                [mask-image:linear-gradient(transparent_40%,black_75%,black_100%,transparent_100%)]
                                backdrop-blur-[0.5rem]">
                        </div>

                        <div
                        className="absolute inset-0 opacity-100
                                [mask-image:linear-gradient(transparent_60%,black_100%,black_100%)]
                                backdrop-blur-[0.625rem]">
                        </div>


                    </div>
                </div>

            </body>
        </html>

    );
}
