import React from "react";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Banner from "../components/Banner";
import Homecard1 from "../components/Homecard1";
import Homecard2 from '../components/Homecard2'
import Homebanner from "../components/Homebanner";
import Homecard3 from "../components/Homecard3";
import Homecardslider from "../components/Homecardslider";
import Homecard4 from "../components/Homecard4";
import Homecard5 from "../components/Homecard5";
import Homecard6 from "../components/Homecard6";
import Homeinfordata from "../components/Homeinfordata";
import Homeinformation from "../components/Homeinformation";
import Footer from "../components/Footer";
import Mobilefooter from "../components/Mobilefooter";
import Mobilefooter1 from "../components/Mobilefooter1";
import Timer from "../components/Timer";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";


const Home = () => {

  return (
    <>
    <Timer />  
    <Layout>
      <div>
            
        <Banner />              {/*banner compnent in the home page */}
        <Homecard1 />           {/*small card compnent in the home page */}
        <Homecard2 />           {/*shop what the fry deal compnent in the home page */}
        <Homebanner />          {/*Deal Maange More compnent in the home page */}
        <Homecard3 />           {/*Brand Bazaar compnent in the home page*/}
        <Homecardslider />      {/*slider compnent in the home page */}
        <Homecard4 />           {/*tDiscover Our Newest Arrivals compnent in the home page*/}
        <Homecard5 />           {/*Follow Home Interior Trends compnent in the home page*/}
        <Homecard6 />           {/*Check Out These Collections compnent in the home page*/}
        <Homeinfordata />       {/*TextInformation compnent in the home page */}
        <Homeinformation />     {/*TextInformation compnent in the home page */}
   

      </div>
    </Layout>
    </>
  )
}

export default Home;