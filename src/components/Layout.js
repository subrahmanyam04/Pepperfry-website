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
            <Header />            {/* Main navbar in all the pages*/}
            <Header1 />           {/* sub navbar in all the pages*/}
            <Header2 />           {/* Tabsbar in all the pages*/}
            <div>{children}</div> {/* components in all the pages*/}
            <Footer />            {/*Footer in all the pages*/}
            <Mobilefooter />      {/* Footer for mobile view in all the pages*/}
            <Mobilefooter1 />     {/* Footer  navigation bar for mobile in all the pages*/}
        </>
    );
};

export default Layout;