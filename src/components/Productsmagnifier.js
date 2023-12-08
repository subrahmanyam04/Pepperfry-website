import React, { useRef, useState, useEffect } from 'react';
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
import { useParams } from "react-router-dom";
// import { Navigation, Thumbs } from 'swiper'
export default function App() {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const params = useParams();
    console.log("i am params in products page", params.id)






    const shyam = JSON.parse(localStorage.getItem('shyam'));

    const imagesData = [
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/1250x625/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-ytxpv8.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/1250x625/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-r0yzpe.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/800x400/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-pxcp9l.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/800x400/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-gfhpc7.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/800x400/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-9xp6ri.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/800x400/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-qusjsi.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/800x400/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-7l1wc5.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/800x400/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-7l1wc5.jpg' },
        { imgurl: 'https://ii1.pepperfry.com/media/catalog/product/d/a/800x400/daroo-3-seater-sofa-in-camel-beige-by-febonic-daroo-3-seater-sofa-in-camel-beige-by-febonic-7l1wc5.jpg' },
        // ... other images
    ];

    const [selected, setSelected] = useState(false);

    const handleImageClick = (imageUrl) => {
        setGridImageUrl(imageUrl);
        setSelected(!selected);
    };
    // console.log('i am thumbd swiper', thumbsSwiper)
    const [gridImageUrl, setGridImageUrl] = useState(shyam[0].img1);
    const imgurl = gridImageUrl
    console.log("i am gridImageUrl", imgurl)


    useEffect(() => {
        const enlargedImageContainer = document.querySelector(
            '.ReactImageMagnify__EnlargedImageContainer'
        );
        if (enlargedImageContainer) {
            enlargedImageContainer.style.zIndex = 1000; // Set your desired z-index value
        }
    }, []);
    return (
        <>
            <Grid container >
                <Grid lg={12} display={{ lg: 'block', md: "none", sm: "none", xs: 'none' }}>
                    {/* <img src={gridImageUrl} alt="Selected Image" width={'100%'} height={'100%'} /> */}
                    <Grid>
                        {/* {imgurl.map((url) => ( */}
                        <div style={{ width: "100%", height: '100%' }}>
                            <div style={{ width: '100%', height: "100%" }}>
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: imgurl,

                                        },
                                        largeImage: {
                                            src: imgurl,

                                            width: 1129,
                                            height: 750,

                                        },
                                        // enlargedImagePosition: 'over',
                                        lensStyle: { backgroundColor: 'rgba(0,0,0,0.2)' },

                                        hintTextMouse: "hover to zoom",
                                        enlargedImageContainerDimensions: {
                                            width: '87%',
                                            height: "140%",

                                        },

                                    }}
                                />
                            </div>
                        </div>
                        {/* ))} */}
                        <IconButton
                            aria-label="Like minimal photography"
                            // size="xs"
                            variant="soft"
                            color="neutral"
                            sx={{
                                backgroundColor: "white",
                                opacity: "0.6",
                                position: 'absolute',
                                zIndex: 2,
                                borderRadius: '100%',
                                right: '670px',
                                left: "10px",
                                bottom: 10,
                                transform: 'translate(10%, 10%)',
                                marginBottom: '50px'
                            }}
                        >
                            <Icon icon="ph:heart-thin" width="30" height="30" />
                        </IconButton>


                    </Grid>
                    <Grid marginTop={2.5}>
                        <Swiper
                            // onSwiper={setThumbsSwiper}
                            // loop={true}
                            spaceBetween={10}
                            slidesPerView={8}
                            freeMode={true}
                            navigation={true}
                            // watchSlidesProgress={true}
                            modules={[FreeMode, Navigation]}
                            className="mySwiper2"
                            style={{
                                '--swiper-navigation-size': '10px', // Set the size you desire
                            }}
                        >

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img1)}
                            >
                                <img src={shyam[0].img1} alt='' className='img' />
                            </SwiperSlide>

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img2)}  >
                                <img src={shyam[0].img2} alt='' className='img' />
                            </SwiperSlide>

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img3)} >
                                <img src={shyam[0].img3} alt='' className='img' />
                            </SwiperSlide>

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img4)} >
                                <img src={shyam[0].img4} alt='' className='img' />
                            </SwiperSlide>

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img5)} >
                                <img src={shyam[0].img5} alt='' className='img' />
                            </SwiperSlide>

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img6)}>
                                <img src={shyam[0].img6} alt='' className='img' />
                            </SwiperSlide>

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img7)}>
                                <img src={shyam[0].img7} alt='' className='img' />
                            </SwiperSlide>

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img8)}>
                                <img src={shyam[0].img8} alt='' className='img' />
                            </SwiperSlide>

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img9)}>
                                <img src={shyam[0].img9} alt='' className='img' />
                            </SwiperSlide>

                            <SwiperSlide onClick={() => handleImageClick(shyam[0].img10)}>
                                <img src={shyam[0].img10} alt='' className='img' />
                            </SwiperSlide>



                        </Swiper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
