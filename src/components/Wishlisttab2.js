import { Grid, Paper, Typography } from "@mui/material";

import React from "react";

import Card from '@mui/joy/Card';

import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import { FavoriteBorder } from '@mui/icons-material';

const Wishlisttab2 = () => {


    const img = [
        {
            imgurl: "https://ii2.pepperfry.com/media/catalog/product/1/-/494x544/1-seater-manual-recliner-in-brown-colour-by-bantia-furniture-1-seater-manual-recliner-in-brown-colou-3hwtnq.jpg"
        },
        {
            imgurl: "https://ii3.pepperfry.com/media/catalog/product/k/a/494x544/kaylee-velvet-3-seater-sofa-in-blush-pink-colour-kaylee-velvet-3-seater-sofa-in-blush-pink-colour-lqkany.jpg"
        },
        {
            imgurl: "https://ii3.pepperfry.com/media/catalog/product/c/o/494x544/corals-anti-skid-door-mat-in-brown-colour-by-hosta-homes-corals-anti-skid-door-mat-in-brown-colour-b-g57syq.jpg"
        },
        {
            imgurl: "https://ii3.pepperfry.com/media/catalog/product/v/a/494x544/vareesha-ceramic-handle-steel-spoons--blue-yellow--set-of-6-vareesha-ceramic-handle-steel-spoons--bl-ijfvgu.jpg"
        },
    ]

    return (
        <>
     
            <Grid container sx={{ justifyContent: "center" }} >
            
                <Grid lg={12} md={12} sm={12} xs={12} marginTop={1}>
                    <img src='https://ii2.pepperfry.com/assets/0a675eb1-edd3-42d0-b04b-45e48a3a1b13.jpg' width={'100%'} alt="" />
                </Grid>

                <Grid lg={12} md={12} sm={12} xs={12} container>
                    <Grid container gap={1.9} marginTop={3}>

                        {img.map((images) => (

                            <Grid lg={3.8} md={3.7} sm={3.6} xs={5.65} >
                                <Card invertedColors={false} orientation="vertical" size="xs" variant="plain" >
                                    <CardOverflow>
                                        <img src={images.imgurl} alt="" width='100%' height={'100%'} />
                                        <IconButton
                                            aria-label="Like minimal photography"
                                            size="xs"
                                            variant="soft"
                                            color="neutral"
                                            sx={{
                                                backgroundColor: "white",
                                                opacity: "0.5",
                                                position: 'absolute',
                                                zIndex: 2,
                                                borderRadius: '100%',
                                                right: '1rem',
                                                bottom: 0,
                                                transform: 'translate(30%, 35%)',
                                                // transform: 'translateX(30%)',
                                            }}
                                        >
                                            <FavoriteBorder />
                                        </IconButton>
                                    </CardOverflow>

                                    <CardOverflow  >
                                        <CardContent orientation="horizontal" variant="soft" >
                                            <Grid container marginTop={1}>
                                                <Typography color={'#5B5B5B'} fontSize={{ xs: '10px', sm: "12px", md: '12px', lg: "14px" }} fontFamily={'Manrope,sans-serif'} noWrap>
                                                    Casey Fabric 1 Seater Manual Recliner In Brown Colour

                                                </Typography>
                                                <Grid lg={12} md={12} sm={12}>
                                                    <Typography color={'#848484'} lineHeight={1.9} fontSize={{ xs: '10px', sm: "10px", md: '12px', lg: "12px" }} fontFamily={'Manrope,sans-serif'} noWrap>
                                                        By Bantia Furniture

                                                    </Typography>
                                                </Grid>
                                                <Grid lg={12} md={12} sm={12}>
                                                    <Typography color={'#67ad5b'} lineHeight={1.9} fontSize={{ xs: '10px', sm: "12px", md: '12px', lg: "12px" }} fontFamily={'Manrope,sans-serif'} noWrap>
                                                        <b> Today's Deal</b>

                                                    </Typography>
                                                </Grid>
                                                <Grid lg={12} md={12} sm={12}>
                                                    <Typography color={'#121212'} lineHeight={1.9} fontSize={{ xs: '10px', sm: "10px", md: '12px', lg: "14px" }} fontFamily={'Manrope,sans-serif'} noWrap>
                                                        <b> ₹23,199</b> <strike style={{ color: "#848484" }}> ₹ 56,000</strike>

                                                    </Typography>
                                                </Grid>
                                                <Grid lg={12} md={12} sm={12}>
                                                    <Typography level="body-xs" lineHeight={1.9} fontWeight="md" color={'#848484'} fontSize={{ xs: '10px', sm: "10px", md: '12px', lg: "12px" }} fontFamily={'Manrope,sans-serif'}>
                                                        <span><b>you save ₹ 32,801 </b></span><span style={{ color: "#67ad5b" }}> <b>(59% off)</b></span>
                                                    </Typography>
                                                </Grid>
                                                <Grid lg={12} md={12} sm={12}>
                                                    <Typography color={'#1979B5'} lineHeight={1.9} fontSize={{ xs: '10px', sm: "10px", md: '12px', lg: "12px" }} fontFamily={'Manrope,sans-serif'} >
                                                        Extra cashback worth <b>₹ 464</b>

                                                    </Typography>
                                                </Grid>
                                                <Grid lg={12} md={12} sm={12}>
                                                    <Typography color={'#848484'} lineHeight={1.9} fontSize={{ xs: '10px', sm: "10px", md: '12px', lg: "12px" }} fontFamily={'Manrope,sans-serif'} >
                                                        Express shipping in 1 day

                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </CardOverflow>
                                </Card>

                            </Grid>




                        ))}
                        
                      

                    </Grid>
                    <Grid lg={12} sm={12} md={12} xs={12} padding={0.5} marginTop={2} backgroundColor={'#f5f5f5'}>
                           <Typography></Typography>
                        </Grid>


                        <Grid lg={12} sm={12} md={12} xs={12} marginTop={3} marginBottom={5}>
                           <Typography color={'#121212'}  fontSize={{ xs: '20px', sm: "20px", md: '20px', lg: "24px" }} fontFamily={'Manrope,sans-serif'}><b>Recent searches</b></Typography>
                        </Grid>
                </Grid>





               
            </Grid>
           




        </>
    )
}

export default Wishlisttab2;