import * as React from 'react';
import { Divider, Typography } from "@mui/material";

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '@mui/material/Grid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { Icon } from '@iconify/react';

import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import { FavoriteBorder } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import ProductMobileslider2 from './ProductMobileslider2';
const ProductsSlider2 = () => {



    const card = [
        {
            img: "https://ii2.pepperfry.com/media/catalog/product/h/o/236x260/hosley-black-iron---glass-round-decorative-wall-mirrors---set-of-2-hosley-black-iron---glass-round-d-0hi15e.jpg",
            cityname: "Bengaluru",
            studios: "20 Studios"
        },
        {
            img: "https://ii3.pepperfry.com/media/catalog/product/k/a/236x260/kaylee-velvet-3-seater-sofa-in-blush-pink-colour-kaylee-velvet-3-seater-sofa-in-blush-pink-colour-lqkany.jpg",
            cityname: " Mumbai ",
            studios: "13 Studios"
        },
        {
            img: "https://ii1.pepperfry.com/media/catalog/product/1/-/236x260/1-seater-manual-recliner-in-brown-colour-by-bantia-furniture-1-seater-manual-recliner-in-brown-colou-3hwtnq.jpg",
            cityname: " Hyderabad ",
            studios: "10 Studios"
        },
        {
            img: "https://ii2.pepperfry.com/media/catalog/product/c/o/236x260/corals-anti-skid-door-mat-in-brown-colour-by-hosta-homes-corals-anti-skid-door-mat-in-brown-colour-b-g57syq.jpg",
            cityname: " Delhi NCR ",
            studios: "12 Studios"
        },
        {
            img: "https://ii1.pepperfry.com/media/catalog/product/v/a/236x260/vareesha-ceramic-handle-steel-spoons--blue-yellow--set-of-6-vareesha-ceramic-handle-steel-spoons--bl-ijfvgu.jpg",
            cityname: "  Pune  ",
            studios: "7 Studios"
        },
        {
            img: "https://ii2.pepperfry.com/media/catalog/product/n/e/236x260/neos-premium-teak-wood-cutlery-and-tissue-holder-by-wooden-twist-neos-premium-teak-wood-cutlery-and--2rj65k.jpg",
            cityname: "  Chennai  ",
            studios: "6 Studios"
        },
        {
            img: "https://ii3.pepperfry.com/media/catalog/product/k/a/236x260/kaylee-velvet-3-seater-sofa-in-blush-pink-colour-kaylee-velvet-3-seater-sofa-in-blush-pink-colour-lqkany.jpg",
            cityname: "  Gurgaon  ",
            studios: "3 Studios"
        },
        ,
        {
            img: "https://ii3.pepperfry.com/media/catalog/product/k/a/236x260/kaylee-velvet-3-seater-sofa-in-blush-pink-colour-kaylee-velvet-3-seater-sofa-in-blush-pink-colour-lqkany.jpg",
            cityname: "  Gurgaon  ",
            studios: "3 Studios"
        },
        ,
        {
            img: "https://ii3.pepperfry.com/media/catalog/product/k/a/236x260/kaylee-velvet-3-seater-sofa-in-blush-pink-colour-kaylee-velvet-3-seater-sofa-in-blush-pink-colour-lqkany.jpg",
            cityname: "  Gurgaon  ",
            studios: "3 Studios"
        },
        ,
        {
            img: "https://ii3.pepperfry.com/media/catalog/product/k/a/236x260/kaylee-velvet-3-seater-sofa-in-blush-pink-colour-kaylee-velvet-3-seater-sofa-in-blush-pink-colour-lqkany.jpg",
            cityname: "  Gurgaon  ",
            studios: "3 Studios"
        },




    ]








    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
            <Grid container sx={{ justifyContent: "center", marginBottom: "8px" }}  >

                {/* <Grid item lg={9} md={11} sm={11} xs={11}> */}




                {/* slider grid */}

                <Grid lg={10.5} md={11} sm={11.5} xs={11.6} display={{ xs: 'none', sm: 'block' }} marginTop={3}>
                    <Typography color={'#9D673A'} fontSize={'20px'} textAlign={{ xs: 'start', sm: 'center' }} fontFamily={' Poppins,sans-serif'} marginBottom={0} marginTop={5}><b>See What Other Customers Viewed</b></Typography>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        // centeredSlides={true}

                        // autoplay={{ delay: 2000, disableOnInteraction: false }}
                        navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        style={{
                            '--swiper-navigation-size': '15px', // Set the size you desire
                        }}
                        breakpoints={{
                            // Large devices (lg)
                            1440: {
                                slidesPerView: 6,
                                //   autoplay: false, 
                            },
                            1024: {
                                slidesPerView: 6,
                                //   autoplay: false, 
                            },
                            // Medium devices (md)
                            768: {
                                slidesPerView: 6,
                                //   autoplay: false, 
                            },
                            // Small devices (sm)
                            576: {
                                slidesPerView: 6,
                                //   autoplay: true, 


                            },
                            // Extra small devices (xs)
                            0: {
                                slidesPerView: 6,
                                //   autoplay: true, 


                            },
                        }}


                    >

                        {
                            card.map((item) => (

                                <SwiperSlide>

                                    <div style={{ position: 'relative' }}>
                                        <Grid container lg={12} md={12} sm={12} xs={12} gap={1}>
                                            <Grid lg={12} md={12} sm={12} xs={12} >
                                                <IconButton
                                                    aria-label="Like minimal photography"
                                                    // size="xs"
                                                    variant="soft"
                                                    color="neutral"
                                                    sx={{
                                                        backgroundColor: "white",
                                                        opacity: "0.4",
                                                        position: 'absolute',
                                                        zIndex: 2,
                                                        borderRadius: '100%',
                                                        right: '10px',
                                                        bottom: 0,
                                                        transform: 'translate(20%, 40%)',
                                                        marginBottom: '50px'
                                                    }}
                                                >
                                                    <Icon icon="ph:heart-thin" width="18" height="18" />
                                                </IconButton>
                                                <img
                                                    src={item.img}
                                                    alt=""
                                                    width="100%"
                                                    height="100%"

                                                />


                                            </Grid>
                                            <Grid lg={12} md={12} sm={12} xs={12} >
                                                <ThemeProvider theme={theme}>
                                                    <Typography fontSize={'12px'} color={'#5B5B5B'} noWrap>Neos Premium Natural Brown Teak Wood Cutlery Holder</Typography>
                                                    <Typography fontSize={'14px'} color={'#323232'}>₹422 <strike style={{ color: '#848484' }}>₹625</strike><span style={{ color: '#67AD5B' }}> <b>32%</b></span></Typography>
                                                </ThemeProvider>
                                            </Grid>



                                        </Grid>

                                    </div>

                                </SwiperSlide>


                            ))
                        }


                    </Swiper>





                </Grid>
            </Grid>
            {/* </ThemeProvider> */}
            {/* small infoemation */}
<ProductMobileslider2/>

            <Grid conatiner sx={{ backgroundColor: '#f5f5f5' }} lg={12} xs={12} marginBottom={2}>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid lg={5} xs={8} marginTop={2} marginBottom={2} display={{xs:'none',sm:"block"}}>
                        <Typography textAlign={"center"} fontFamily={'Manrope,sans-serif'} fontSize={{ lg: '16px', sm: '14px', xs: '14px' }} color={'#121212'}> <b>Didn't Find What You Were Looking For? </b>  Share your Feedback with Us <Icon icon="ph:arrow-right-thin" width="18" height="18" /></Typography>

                    </Grid>

                </Grid>

            </Grid>

            <Grid conatiner sx={{ backgroundColor: '#f5f5f5' }} lg={12} xs={12} marginBottom={2}>
                <Grid container >
                    <Grid lg={5} xs={8} marginTop={2} marginBottom={2} display={{xs:'block',sm:"none"}}>
                        <Typography  fontFamily={'Manrope,sans-serif'} fontSize={{ lg: '16px', sm: '14px', xs: '14px' }} color={'#121212'}> <b>Didn't Find What You Were Looking For? </b>  Share your Feedback with Us <Icon icon="ph:arrow-right-thin" width="18" height="18" /></Typography>

                    </Grid>

                </Grid>

            </Grid>




        </>



    )
}

export default ProductsSlider2;