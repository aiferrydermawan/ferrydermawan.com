import React from 'react';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeScript from "@/components/ThemeScript";

type LayoutProps = {
    children: React.ReactNode;
};

function Layout({ children}: LayoutProps) {
    return (
        <ThemeProvider>
            <ThemeScript />
            <div className="w-full max-w-screen-sm mx-auto py-16 px-4 md:px-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
                <Head>
                    <script defer src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL} data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}></script>
                </Head>
                <Navbar />
                <div className="py-16">
                    {children}
                </div>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default Layout;