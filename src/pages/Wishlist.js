import { Timer } from "@mui/icons-material";
import React from "react";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Wishlistsidetab from "../components/Wishlistsidetab";
import Footer from "../components/Footer";
import Mobilefooter from "../components/Mobilefooter";
import Mobilefooter1 from "../components/Mobilefooter1";
import Layout from "../components/Layout";


const Wishlist = () => {
    return (
        <div>
            <Timer />              
            <Layout>           
                <div>          
                    <Wishlistsidetab />  {/* wishlist tabs component*/}   
                </div>
            </Layout>            
     
        </div>
    )
}

export default Wishlist;