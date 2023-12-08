import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';
import '../components/Imageslider/Imageslider.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Grid } from '@mui/material';

import { useParams } from "react-router-dom";
const Productsslider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const params = useParams();
    console.log("i am params in products page", params.id)






    const shyam = JSON.parse(localStorage.getItem('shyam'));
    console.log('i am shyam in productsslider', shyam)

    return (
        <>
            <Grid container >
                <Grid lg={12} md={12} sm={12} display={{ lg: 'none', md: "block", sm: "block", xs: 'none' }}>
                    <Grid>
                        <Swiper

                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                            style={{
                                '--swiper-navigation-size': '20px', // Set the size you desire
                            }}
                        >
                            <SwiperSlide>
                                <img src={shyam[0].img1} alt='' width={'100%'} height={'100%'} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img2} alt='' width={'100%'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img3} alt='' width={'100%'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img4} alt='' width={'100%'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img5} alt='' width={'100%'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img6} alt='' width={'100%'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img7} alt='' width={'100%'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img8} alt='' width={'100%'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img9} alt='' width={'100%'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img10} alt='' width={'100%'} />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={8}
                            // navigation={true}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper3"
                            style={{
                                '--swiper-navigation-size': '5px', // Set the size you desire
                            }}
                        >
                            <SwiperSlide>
                                <img src={shyam[0].img1} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img2} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img3} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img4} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img5} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img6} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img7} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img8} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img9} className='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={shyam[0].img10} className='img' />
                            </SwiperSlide>
                        </Swiper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}


export default Productsslider;
