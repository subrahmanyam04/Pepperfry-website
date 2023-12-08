
import React from "react";
import Layout from "./Layout";
import { useParams } from "react-router-dom";


import { Typography } from "@mui/material";
import Productscontent from "./Productscontent";
import ProductsSlider1 from "./ProductsSlider1";
import ProductsSlider2 from "./ProductSlider2";
import ProductMobileslider1 from "./ProductMobilseslider1";
import ProductMobileslider2 from "./ProductMobileslider2";
import Productscontentfooter from "./Productscontentfooter";
import ProductsContentsubnav from "./ProductsContentsubnav";

const Products = () => {

    const params = useParams();
    console.log("i am params in products page", params.id)






    const shyam = JSON.parse(localStorage.getItem('shyam'));
    return (
        <>
            <Layout>
                <>




                    <Productscontent />           {/*components that in the products page*/}
                    <ProductsContentsubnav />
                    <ProductsSlider1 />           {/*slider component in the products page*/}
                    <ProductsSlider2 />           {/*Another slider component in the products page*/}
                    <Productscontentfooter />     {/*footer component in the products page*/}

                </>





            </Layout>
        </>

    )
}





export default Products;