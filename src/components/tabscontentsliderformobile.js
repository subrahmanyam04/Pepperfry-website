import React from "react";
import { Params, useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Icon } from '@iconify/react';

import IconButton from '@mui/joy/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import { Typography } from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Tabscontentsliderformobile = () => {

    const tabdata = [
        {
            status: "furniture-3-seater-sofas",
            name: "subbu",
            roll: "123"
        },
        {
            status: "furniture-2-seater-sofas",
            name: "dhoni",
            roll: "07"
        },
    ]

    const card = [
        {

            img: "https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png",
            border: "0.5px solid lightgrey",
            cityname: "",
            studios: ""
        },
        {
            img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Modern_3_Seater_Sofas.jpg",
            cityname: "Bengaluru",
            studios: "20 Studios"
        },
        {
            img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Mid_Century_Modern_3_Seater_Sofas.jpg",
            cityname: " Mumbai ",
            studios: "13 Studios"
        },
        {
            img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Contemporary_3_Seater_Sofas.jpg",
            cityname: " Hyderabad ",
            studios: "10 Studios"
        },
        {
            img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Lawson_3_Seater_Sofas.jpg",
            cityname: " Delhi NCR ",
            studios: "12 Studios"
        },
        {
            img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Rolled_Arms_3_Seater_Sofas.jpg",
            cityname: "  Pune  ",
            studios: "7 Studios"
        },
        {
            img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Bucket_3_Seater_Sofas.jpg",
            cityname: "  Chennai  ",
            studios: "6 Studios"
        },
        {
            img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Chesterfield_3_Seater_Sofas.jpg",
            cityname: "  Gurgaon  ",
            studios: "3 Studios"
        },
        {
            img: "https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Traditional_3_Seater_Sofas.jpg",
            cityname: "  Gurgaon  ",
            studios: "3 Studios"
        }







    ]


    const params = useParams();
    console.log('i am routing', params.catagoery)

    let jaggu = tabdata.filter(i => i.status == params.catagoery)
    console.log('i am jaggu', jaggu)
    return (

        <>
            {/* from medium screens */}


            <Grid display={{ lg: 'none', md: 'block', sm: 'block', xs: 'none' }} marginTop={2.5}>
                {/* {jaggu.map((user) => (
                    <>
                        <Typography>{user.name}</Typography>
                        <Typography>{user.roll}</Typography>
                    </>
                ))} */}

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                    spaceBetween={0}
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
                            slidesPerView: 11,

                            //   autoplay: false, 
                        },
                        // Medium devices (md)
                        1024: {
                            slidesPerView: 8,

                            //   autoplay: false, 
                        },
                        768: {
                            slidesPerView: 6.5,
                            //   autoplay: false, 
                        },
                        // Small devices (sm)
                        576: {
                            slidesPerView: 2.5,
                            //   autoplay: true, 


                        },
                        // Extra small devices (xs)
                        0: {
                            slidesPerView: 2.5,
                            //   autoplay: true, 


                        },
                    }}


                >
                    <Grid container sx={{ marginBottom: "40px", margin: 0, padding: 0 }} >

                        <Grid item lg={3} md={11} sm={11} xs={11} sx={{ justifyContent: "center" }}  >


                            {/* slider grid */}



                            {
                                card.map((item) => (

                                    <SwiperSlide>
                                        <div
                                            style={{
                                                position: 'relative',

                                                transition: 'border 0.3s ease-in-out',
                                                cursor: "pointer"
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.border = '1px solid red'}
                                            onMouseLeave={(e) => e.currentTarget.style.border = '1px solid transparent'}
                                        >


                                            <Grid container lg={12} md={12} sm={12} sx={{ marginBottom: "40px", margin: 0, padding: 0, justifyContent: "center" }} border={item.border}>

                                                <Grid lg={11} md={11} sm={11} xs={12} sx={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>

                                                    <img
                                                        src={item.img}
                                                        alt=" ..."
                                                        width="60px"
                                                        height="66px"

                                                    />


                                                </Grid>
                                                <Grid lg={11} md={11} sm={11} xs={12} textAlign={'center'}>
                                                    <ThemeProvider theme={theme}>
                                                        <Typography fontSize={'12px'} color={'#121212'} >Modern 3 Seater Sofas</Typography>
                                                        <Typography fontSize={'12px'} color={'#848484'}>296 options</Typography>
                                                    </ThemeProvider>
                                                </Grid>



                                            </Grid>


                                        </div>
                                    </SwiperSlide>


                                ))
                            }





                        </Grid>

                    </Grid>
                </Swiper>


            </Grid>





        </>

    )
}

export default Tabscontentsliderformobile;