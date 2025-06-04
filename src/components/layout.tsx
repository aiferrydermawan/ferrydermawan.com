import React from 'react';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type LayoutProps = {
    children: React.ReactNode;
};

function Layout({ children}: LayoutProps) {
    return (
        <div className="w-full max-w-screen-sm mx-auto py-16 px-4 md:px-0">
            <Navbar />
            <div className="py-16">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;