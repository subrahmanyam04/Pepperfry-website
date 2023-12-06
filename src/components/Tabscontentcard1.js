
import { Divider, Grid } from "@mui/material";
import React from "react";
import IconButton from '@mui/joy/IconButton';
import { FavoriteBorder } from '@mui/icons-material';
// import IconButton from '@mui/joy/IconButton';
import { Icon } from '@iconify/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import { Typography } from "@mui/material";
import Tabscard1mobile from "./Tabscard1mobile";

import { Getcard1Data } from "../Redux/Api/Getcard1data";
import { setCard1data } from "../Redux/Actions/Card1action";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Params, useParams } from "react-router-dom";


const Tabscontentcard1 = ({
    card1data,
    setCard1data
}) => {


    useEffect(() => {
        getData();

    }, []);

    const getData = async () => {
        try {
            const students = await Getcard1Data();
            console.log('data has been received', students)
            setCard1data(students);
            console.log('iam student data', students)
        } catch (error) {
            console.error('An error occurred:', error);

        }
    };

    const cardimg = [
        {
            imgurl: "https://ii1.pepperfry.com/assets/219b6802-e067-4a7e-81c2-0fb6159428e6.jpg",
            status:"furniture-3-seater-sofas"
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/30cf513b-8e14-45e5-ab17-7fe6b5bde461.jpg",
            status: "furniture-1-seater-recliners",
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/0cd9f71c-cd5d-4813-b069-562c669f83fd.jpg",
            status: "sofas&seatings-lhs-sectionals",
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/ce08e95b-cbe3-48ef-9e22-a02f2a366cd4.jpg",
            status: "sofas&seatings-wing-chairs",
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/f3f3023c-3ea5-4566-8aa2-dad5886095b8.png",
            status: "mattressers-foam",
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/a9d5354c-ee0c-4400-9cc3-d835b305d2f3.jpg",
            status: "mattressers-sleeping-pillows",
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/8e55dbbe-e922-4176-9a9d-ee5eba400bc8.jpg",
            status: "furnishings-single-bed-sheets",
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/da3210be-9367-4f62-b04f-8c1c86eba643.jpg",
            status: "furnishings-3ft-x-5ft",
        },
        {
            imgurl: "",
            status: "",
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/da3210be-9367-4f62-b04f-8c1c86eba643.jpg",
            status: "",
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/da3210be-9367-4f62-b04f-8c1c86eba643.jpg",
            status: "",
        },
        {
            imgurl: "https://ii1.pepperfry.com/assets/da3210be-9367-4f62-b04f-8c1c86eba643.jpg",
            status: "",
        },
    ]

    const card1 = card1data;
    console.log('i am card1',card1)
    const params = useParams();
    console.log('i am routing', params.catagoery)

    let jaggu = card1.filter(i => i.status == params.catagoery)
    console.log('i am jaggu', jaggu)

    let card1banner = cardimg.filter(i => i.status == params.catagoery)


    return (
        <>
            <Grid container marginTop={3} sx={{ backgroundColor: "#f5f5f5" }}>
                <Grid display={{xs:'none',sm:"block"}}>
                    <Grid container sx={{ justifyContent: "center" }}  marginBottom={{lg:"10px",md:"50px",sm:"40px"}} marginTop={2}>
                        <Grid lg={10.5} md={10.5} sm={11}  >
                            <Grid container lg={12} gap={1}>


                            {card1banner.map((images) => (
                                   
                                   <Grid lg={4.09} md={3.57} sm={3.57} >
                                   <img src={images.imgurl} alt="" width={'100%'} height={'100%'} />
                               </Grid>
                                   
                                ))}

                                


                                {jaggu.map((images) => (
                                    <>
                                   
                                    
                                    <Grid lg={1.9} md={2} sm={1.97} >
                                        <Grid container>
                                            <Grid lg={12}>
                                                <div style={{ position: 'relative' }}>
                                                    <img src={images.imgurl1} alt="" width={'100%'} height={'100%'} />
                                                    <IconButton
                                                        aria-label="Like minimal photography"
                                                        size="small"
                                                        color="neutral"
                                                        sx={{
                                                            backgroundColor: "white",
                                                            opacity: "0.8",
                                                            position: 'absolute',
                                                            zIndex: 2,
                                                            borderRadius: '100%',
                                                            right: '5px',
                                                            bottom: '4px', // Adjusted bottom value
                                                        }}
                                                    >
                                                        <Icon icon="ph:heart-thin" width="18" height="18" />
                                                    </IconButton>
                                                </div>

                                            </Grid>
                                            <Grid lg={12} md={12} sm={12}>
                                                <ThemeProvider theme={theme}>
                                                    <Typography fontSize={{ lg: '12px', md: '12px', sm: "10px" }} color={'#121212'} >Neos Premium Natural Brown Teak Wood Cutlery Holder</Typography>
                                                    <Typography fontSize={{ lg: '14px', md: '14px', sm: "12px" }} color={'#121212'}>₹12,999 <strike style={{ color: '#848484' }}>₹ 17,000</strike><span style={{ color: '#67AD5B' }}> <b>32%</b></span></Typography>
                                                </ThemeProvider>
                                            </Grid>

                                        </Grid>
                                    </Grid>

                                    </>
                                ))}




                            </Grid>



                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
            <Divider />

            <Tabscard1mobile/>  {/* for mobile view */}
        </>
    )
}

const mapStateToProps = (state) => ({

    // sliderdata: state.Sliderreducer.sliderdata,
    card1data: state.Card1reducer.card1data,
    // selectedAboutCard: state.Reducer1.selectedAboutCard
    
});

const mapDispatchToProps = {
    setCard1data
    // setSelectedAboutCard,

};

export default connect(mapStateToProps, mapDispatchToProps)(Tabscontentcard1);