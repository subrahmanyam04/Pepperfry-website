import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import {  useParams } from "react-router-dom";
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Grid } from '@mui/material';

const Productsslidermobile = () => {

    const params = useParams();
console.log("i am params in products page",params.id)
 
 
 

 
 
const shyam = JSON.parse(localStorage.getItem('shyam'));
    return (
        <>
            <Grid container >
                <Grid lg={12} md={12} sm={12} xs={12} display={{ lg: 'none', md: "none", sm: "none", xs: 'block' }}>
                    <Grid>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            modules={[Keyboard, Pagination, Navigation]}
                        //    className='myswiper3'
                        >
                            <SwiperSlide> <img src={shyam[0].img1} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                            <SwiperSlide> <img src={shyam[0].img2} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                            <SwiperSlide> <img src={shyam[0].img3} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                            <SwiperSlide> <img src={shyam[0].img4} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                            <SwiperSlide><img src={shyam[0].img5} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                            <SwiperSlide><img src={shyam[0].img6} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                            <SwiperSlide><img src={shyam[0].img7} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                            <SwiperSlide><img src={shyam[0].img8} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                            <SwiperSlide><img src={shyam[0].img9} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                            <SwiperSlide><img src={shyam[0].img10} alt=''  width={'100%'} height={'100%'} className='img'/></SwiperSlide>
                        </Swiper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Productsslidermobile;
