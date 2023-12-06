import React from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { Grid } from "@mui/material";
import { Icon } from '@iconify/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";

import { Getcard2Data } from "../Redux/Api/Getcard2data";
import { setCard2data } from "../Redux/Actions/Card2action";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Params, useParams } from "react-router-dom";

const Tabscontentcard2 = ({
    card2data,
    setCard2data
}) => {


    // const LargeText = styled(Typography)(({ theme }) => ({
    //     fontSize: "64px",
    //     color: "#000",
        
    //     fontWeight: "700",
        
    //     [theme.breakpoints.down("md")]: {
    //         fontSize: "32px",
    //     },
    // }));

    useEffect(() => {
        getData();

    }, []);


    const getData = async () => {
        try {
            const students = await Getcard2Data();
            console.log('data has been received', students)
            setCard2data(students);
            console.log('iam student data', students)
        } catch (error) {
            console.error('An error occurred:', error);

        }
    };


    const carddata = [
        {
            cardimg: "https://ii1.pepperfry.com/media/catalog/product/f/i/494x544/fidel-velvet-3-seater-sofa-in-royal-blue-colour-fidel-velvet-3-seater-sofa-in-royal-blue-colour-ojk1jx.jpg",
            title: " Yosemite National Park"
        },
        {
            cardimg: "https://ii1.pepperfry.com/media/catalog/product/s/t/494x544/stuttgart-fabric-3-seater-sofa-in-charcoal-grey-colour-stuttgart-fabric-3-seater-sofa-in-charcoal-gr-r6nweb.jpg",
            title: " Yosemite National Park"
        },
        {
            cardimg: "https://ii1.pepperfry.com/media/catalog/product/m/i/494x544/miranda-fabric-3-seater-sofa-in-beige-colour-miranda-fabric-3-seater-sofa-in-beige-colour-d5y8a6.jpg",
            title: " Yosemite National Park"
        },
        {
            cardimg: "https://ii1.pepperfry.com/media/catalog/product/i/n/494x544/indus-sheesham-wood-3-seater-sofa-in-provincial-teak-finish-indus-sheesham-wood-3-seater-sofa-in-pro-tkfacf.jpg",
            title: " Yosemite National Park"
        }
    ]


    const card2 = card2data;
    console.log('i am card2',card2)
    const params = useParams();
    console.log('i am routing', params.catagoery)

    let jaggu = card2.filter(i => i.status == params.catagoery)
    console.log('i am jaggu', jaggu)










    return (
        <>


            <Grid conatiner sx={{ backgroundColor: "#f5f5f5" }} lg={12} md={12} sm={12} xs={12}>

                <Grid container sx={{ justifyContent: "center" }}  >
                    <Grid lg={10.5} md={11} sm={11} xs={12} marginTop={2} >
                        <Grid container lg={12} md={12} sm={12} xs={12} gap={{lg:1.09,md:1.09,sm:1.09,xs:1}} >

                            {jaggu.map((datas) => (

                                <Grid lg={2.93} md={2.91} sm={2.88} xs={5.85}>
                                    <Card variant="outlined" >
                                        <CardOverflow>
                                            <AspectRatio ratio="1">
                                                <img
                                                    src={datas.imgurl}
                                                    // srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                                    loading="lazy"
                                                    alt=""
                                                    height={'100%'}
                                                    width={'100%'}
                                                />
                                            </AspectRatio>
                                            <IconButton
                                                aria-label="Like minimal photography"
                                                size="small"
                                                color="neutral"
                                                // color="danger"
                                                sx={{
                                                    backgroundColor: "white",
                                                    opacity: "0.8",
                                                    position: 'absolute',
                                                    zIndex: 2,
                                                    borderRadius: '100%',
                                                    right: '1rem',
                                                    bottom: 0,
                                                    transform: 'translate(30%,20%)',
                                                }}
                                            >
                                                <Icon icon="ph:heart-thin" width="24" height="24" />
                                            </IconButton>
                                        </CardOverflow>
                                        <CardContent sx={{marginBottom:"20px"}}>
                                            {/* <ThemeProvider theme={theme}> */}

                                            {/* text details for the card */}


                                            <Typography  fontSize={{lg:'14px',md:"14px",sm:'12px',xs:'12px'}} fontFamily={'Manrope,sans-serif'} textColor="#5B5B5B">

                                                Miceli Leather 3 Seater Sofa In Brown Finish

                                            </Typography>
                                            <Typography fontSize={{lg:'12px',md:'12px',sm:'10px',xs:'10px'}} fontFamily={'Manrope,sans-serif'} textColor="#848484">
                                                Amberville from Pepperfry
                                            </Typography>
                                            <Grid conatiner >
                                                
                                                    <Grid lg={12} >
                                                        <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                                        <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                                        <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                                        <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                                        <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                                        <span style={{fontSize:"12px",color:"121212",fontFamily:"Manrope,sans-serif"}} > (80 Sold)</span>
                                                    </Grid>
    
                                                
                                            </Grid>
                                            <Typography fontSize={{lg:'12px',md:'12px',sm:'10px',xs:'10px'}} fontFamily={'Manrope,sans-serif'} color="#67AD5B">
                                            Today's Deal 
                                            </Typography>
                                            <Typography fontSize={{ lg: '20px', md: '16px', sm: "14px",xs:'14px' }} color={'#121212'} fontFamily={'Manrope,sans-serif'}><b>₹12,999</b> <strike style={{ color: '#848484' }}><Typography fontSize={{ lg: '16px', md: '16px', sm: "14px" }} fontFamily={'Manrope,sans-serif'}>₹ 17,000</Typography></strike></Typography>
                                            <Typography fontSize={{lg:'12px',md:'12px',sm:'12px',xs:'12px'}} fontFamily={'Manrope,sans-serif'} textColor="#848484">
                                            <b>You Save ₹16,000</b><span style={{color:"#67AD5B"}}> <b>(29%off)</b></span>
                                            </Typography>
                                            
                                            <Typography fontSize={{lg:'12px',md:"12px",sm:'10px',xs:'10px'}} fontFamily={'Manrope,sans-serif'} textColor="#1979B5">
                                            Earn 19,750 Extra Pepperfry Credits <span > (Worth</span><b> ₹19,750</b><span>)</span>
                                            </Typography>
                                            <Typography fontSize={{lg:'12px',md:"12px",sm:'10px',xs:'10px'}} fontFamily={'Manrope,sans-serif'} textColor="#848484">
                                            Made To Order, Ships in  <span> <b>15 days</b> </span>
                                            </Typography>
                                            {/* </ThemeProvider> */}
                                        </CardContent>

                                    </Card>
                                </Grid>








                            ))}





                        </Grid>

                    </Grid>



                </Grid>



            </Grid>










        </>
    )
}

const mapStateToProps = (state) => ({

    // sliderdata: state.Sliderreducer.sliderdata,
    card2data: state.Card2reducer.card2data,
    // selectedAboutCard: state.Reducer1.selectedAboutCard
    
});

const mapDispatchToProps = {
    setCard2data
    // setSelectedAboutCard,

};

export default connect(mapStateToProps, mapDispatchToProps)(Tabscontentcard2);