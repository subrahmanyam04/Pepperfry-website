import React from "react";
import Header from "./Header";
import Header1 from "./Header1";
import Header2 from "./Header2";
import { Outlet, useParams } from "react-router-dom";
import { Params } from "react-router-dom";
import Layout from "./Layout";
import { Typography } from "@mui/material";
import Tabscontentslider from "./tabscontentslider";
import Tabscontentcard1 from "./Tabscontentcard1";
import Tabscontentcard2 from "./Tabscontentcard2";
import Tabsdynamiccard3 from "./Tabsdynamiccard3";
import Tabssubbanner from "./Tabssubbanner";
import Tabsstaticpagination from "./Tabsstaticpagination";
import Tabscontentinformation from "./TabscontentInformation";
import Tabscontentlinks from "./Tabscontentlinks";

const Tabscontent = () => {


    return(  
        <>
        <Layout>
            <div>

                
                <Tabscontentslider/>     {/*2 component in the tabspage large:tabscontentslider.js ,medium:tabscontentformobile.js ,mobile:tabscontentsliderhor.js  */}
                <Tabscontentcard1/>      {/*3 component in the  tabspage  large:tabscontentcard1 mobile:tabscard1mobile*/}
                <Tabscontentcard2/>      {/*4 component in the  tabspage  static component*/}
                <Tabssubbanner/>         {/*5 component in the  tabspage  small banner*/}   
                <Tabsdynamiccard3/>      {/*6 component in the  tabspage  redux component*/}
                <Tabsstaticpagination/>  {/* 7 componenet in the tabs page static pagination */}
                <Tabscontentinformation/>{/* 8 componenet in the tabs page some static information */}
                <Tabscontentlinks/>      {/* 9 componenet in the tabs page some static information links */}

            </div>
        </Layout>
        

      
        </>
    )
}

export default Tabscontent;