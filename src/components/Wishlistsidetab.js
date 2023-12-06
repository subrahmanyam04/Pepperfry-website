import React, { useState } from "react";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
// import { Grid } from "@mui/material";
import { Icon } from '@iconify/react';
import { styled, Grid, Typography, Divider } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Wishlisttab1 from "./Wishlisttab1";
import Wishlisttab2 from "./Wishlisttab2";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom'



// Define a styled component with the desired styles
const CustomTab = styled(Tab)(({ theme }) => ({
    backgroundColor: 'white',

    '&.Mui-selected, &:hover': {
        backgroundColor: 'white',
        color: '#FF7035', // Text color when tab is selected or hovered
        '& .MuiTab-indicator': {
            backgroundColor: '#FF7035', // Indicator color when tab is selected or hovered
        },
    },
}));

const TabContainer = styled('div')({
    position: 'sticky',
    top: 110,
    // zIndex: 1000,
    backgroundColor: 'white',
});

const Wishlistsidetab = () => {


    const [selectedTab, setSelectedTab] = React.useState(0);
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        console.log("newValue", newValue)
    };



    const renderIcon = (index) => {
        if (selectedTab === index) {
            return <Icon icon="ph:arrow-left-thin" color="#FF7035" width="40" height="15" hFlip={true} />;
        }
        return null;
    };


    return (
        <>

            <Grid container sx={{ justifyContent: "center", marginTop: "20px" }} marginBottom={15}>

                <Grid lg={9} md={9} sm={9.5} xs={12}  >

                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}

                        aria-label="Vertical tabs"
                        orientation={isXsScreen ? 'horizontal' : 'vertical'}
                    // sx={{ minWidth: 300, height: 160, backgroundColor: 'white' }}


                    >

                        <Grid lg={4} md={4} sm={4} xs={12} >
                            <TabContainer>
                                <TabList underlinePlacement="bottom" >

                                    <CustomTab indicatorPlacement="bottom"  >

                                        <Grid container sx={{ justifyContent: "center" }}>
                                            <Grid lg={1.5} md={1} sm={0.5} xs={0}></Grid>
                                            <Grid lg={1.5} md={2} sm={2.5} xs={12} textAlign={{ xs: "center", sm: "start", md: 'start', lg: 'start' }}   >
                                                <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" color={selectedTab === 0 ? "#FF7035" : "#6b6b6b"} width="30 " height="30" />

                                            </Grid>
                                            <Grid container lg={8} md={9} sm={8.5} xs={12}>
                                                <Grid lg={5} md={7} sm={9} xs={12}>
                                                    <Typography style={{
                                                        fontFamily: "Poppins", // Set your desired font family
                                                        // Set your desired font size
                                                        color: selectedTab === 0 ? "#FF7035" : "#000000", // Set text color based on selection
                                                    }} fontSize={{ lg: '18px', md: '18px', sm: '16px', xs: '16px' }}
                                                        textAlign={{ xs: "center", sm: "start", md: 'start', lg: 'start' }}
                                                    >My Wishlist</Typography></Grid>
                                                <Grid lg={1} md={1} sm={0.5} display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block' }}>{renderIcon(0)}</Grid>
                                                <Grid lg={10} md={8} sm={11} xs={12}>
                                                    <Typography fontSize={{ lg: '14px', md: '14px', sm: '12px', xs: '10px' }} textAlign={{ xs: "center", sm: "start", md: 'start', lg: 'start' }} color={'#848484'} fontFamily={' Manrope,sans-serif'} >Your Favourites All In One Place</Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>

                                    </CustomTab>

                                    <Divider />

                                    <CustomTab indicatorPlacement="bottom" >
                                        <Grid container marginTop={{ xs: '0px', md: '5px', sm: '5px', lg: '20px' }}>
                                            <Grid lg={1.9} md={1} sm={0.5} xs={0}></Grid>
                                            <Grid lg={1.5} md={2} sm={2.5} xs={12} textAlign={{ xs: "center", sm: "start", md: 'start', lg: 'start' }}>
                                                <Icon icon="ph:eye-thin" color={selectedTab === 1 ? "#FF7035" : "#6b6b6b"} width="30" height="30" />
                                            </Grid>
                                            <Grid container lg={8} md={9} sm={8.5} xs={12}>
                                                <Grid lg={7} md={5} sm={7} xs={12}><Typography style={{
                                                    fontFamily: "Poppins", // Set your desired font family
                                                    // Set your desired font size
                                                    color: selectedTab === 1 ? "#FF7035" : "#000000", // Set text color based on selection
                                                }} fontSize={{ lg: '18px', md: '18px', sm: '16px', xs: '16px' }}
                                                    textAlign={{ xs: "center", sm: "start", md: 'start', lg: 'start' }}
                                                >Recently Viewed</Typography></Grid>
                                                <Grid lg={1} md={1} sm={0.5} display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block' }}>{renderIcon(1)}</Grid>
                                                <Grid lg={10} md={9} sm={11} xs={12}>
                                                    <Typography fontSize={{ lg: '14px', md: '14px', sm: '12px', xs: '12px' }} color={'#848484'} fontFamily={' Manrope,sans-serif'} textAlign={{ xs: "center", sm: "start", md: 'start', lg: 'start' }}>View Your Browsing History</Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </CustomTab>

                                </TabList>
                            </TabContainer>

                        </Grid>

                        <Grid lg={0.2} md={0.2} sm={0.2} xs={0}></Grid>

                        <Grid lg={7.8} md={8.5} sm={8.5} xs={12} marginTop={{ xs: "5px", lg: '0px', md: '0px', sm: '0px' }}>
                            <Paper>
                                <TabPanel value={0} index={0} >
                                    <Wishlisttab1 />
                                </TabPanel>
                            </Paper>
                            <Paper  >
                                <TabPanel value={1} index={1}>

                                    <Wishlisttab2 />

                                </TabPanel>
                            </Paper>
                        </Grid>
                    </Tabs>
                </Grid >

            </Grid>

        </>

    )


}

export default Wishlistsidetab