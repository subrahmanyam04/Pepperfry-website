import React from "react";
import Header from "./Header";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Footer from "./Footer";
import Mobilefooter from "./Mobilefooter";
import Mobilefooter1 from "./Mobilefooter1";

const Layout = ({ children }) => {
    return (
        <>
            <Header />  
            <Header1 />
            <Header2 />
            <div>{children}</div>
            <Footer />
            <Mobilefooter />
            <Mobilefooter1 />
        </>
    );
};

export default Layout;