import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            {/* HEADER */}
            <Header />


            {children}


            {/* FOOTER */}
            <Footer />
        </>
    )
}

export default Layout;