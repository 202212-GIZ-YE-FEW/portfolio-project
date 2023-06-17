import * as React from "react";
import Footer from "@/src/components/Footer/index";
import Navbar from "@/src/components/Navbar/index";
export default function Layout({ children }) {

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
