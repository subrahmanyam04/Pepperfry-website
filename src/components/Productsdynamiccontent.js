import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactImageMagnify from 'react-image-magnify';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Icon } from '@iconify/react';

import IconButton from '@mui/joy/IconButton';

// import './Imageslider/Imageslider.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ImageMagnifier from './Imagemaginifier';
import { Button, Grid } from '@mui/material';
import { style } from '@mui/system';
import "../components/Imageslider/Imageslider.css"

const Productsdynamiccontent = () => {
    const imagesData = [
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/k/i/494x544/kiki-fabric-3-seater-sofa-in-sapling-green-colour-kiki-fabric-3-seater-sofa-in-sapling-green-colour-rp1qhc.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/k/i/494x544/kiki-fabric-3-seater-sofa-in-earth-brown-colour-kiki-fabric-3-seater-sofa-in-earth-brown-colour-tnyaek.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/k/i/494x544/kiki-fabric-3-seater-sofa-in-graphite-grey-colour-kiki-fabric-3-seater-sofa-in-graphite-grey-colour-d5qtdr.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/k/i/494x544/kiki-fabric-3-seater-sofa-in-lava-orange-colour-kiki-fabric-3-seater-sofa-in-lava-orange-colour-z71lzx.jpg' },

        // ... other images
    ];
    return (
        <>
            <Swiper
                // onSwiper={setThumbsSwiper}
                // loop={true}
                spaceBetween={5}
                // slidesPerView={4}
                breakpoints={{
                  1440: {
                    slidesPerView: 4,
                  //   autoplay: false, 
                  },
                    // Large devices (lg)
                    1024: {
                      slidesPerView: 5,
                    //   autoplay: false, 
                    },
                    // Medium devices (md)
                    768: {
                      slidesPerView: 3.2,
                    //   autoplay: false, 
                    },
                    // Small devices (sm)
                    576: {
                      slidesPerView: 4.2,
                    //   autoplay: true, 
    
    
                    },
                    // Extra small devices (xs)
                    0: {
                      slidesPerView: 4.2,
                    //   autoplay: true, 
     
                      
                    },
                  }}
               
                freeMode={true}
                navigation={true}
                // watchSlidesProgress={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper3"
                style={{
                    '--swiper-navigation-size': '10px', // Set the size you desire
                   
                    
                }}
                
            >
                {imagesData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <img src={data.imgurl} alt='' width={'100%'} height={"100%"} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    )
}

export default Productsdynamiccontent;