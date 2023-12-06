
import React from "react";
import Layout from "./Layout";
import {  useParams } from "react-router-dom";


import { Typography } from "@mui/material";
import Productscontent from "./Productscontent";
import ProductsSlider1 from "./ProductsSlider1";
import ProductsSlider2 from "./ProductSlider2";
import ProductMobileslider1 from "./ProductMobilseslider1";
import ProductMobileslider2 from "./ProductMobileslider2";
import Productscontentfooter from "./Productscontentfooter";
import ProductsContentsubnav from "./ProductsContentsubnav";
 
const Products = () =>{
 
const params = useParams();
console.log("i am params in products page",params.id)
 
 
 

 
 
const shyam = JSON.parse(localStorage.getItem('shyam'));
    return(
        <>
        <Layout>
{/* hi
{shyam.map((success) => ( */}
  <>
      {/* <p>{success.name}</p>
      <Typography>{success.notif}</Typography> */}



      <Productscontent/>
      <ProductsContentsubnav/>  
      <ProductsSlider1/>
      <ProductsSlider2/>
      {/* <ProductMobileslider1/>
      <ProductMobileslider2/> */}
      <Productscontentfooter/>
      
      </>

 
 
 
         
        </Layout>
        </>
 
    )
}
 

 

 
export default Products;