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

const Tabscard1mobile = () => {



  const card = [
    {
      img: "https://ii1.pepperfry.com/assets/219b6802-e067-4a7e-81c2-0fb6159428e6.jpg",
      cityname: "Bengaluru",
      studios: "20 Studios"
    },
    {
      img: "https://ii1.pepperfry.com/media/catalog/product/j/a/494x544/jack-velvet-3-seater-sofa-in-green-colour-jack-velvet-3-seater-sofa-in-green-colour-ed6rcs.jpg",
      cityname: " Mumbai ",
      studios: "13 Studios"
    },
    {
      img: "https://ii1.pepperfry.com/media/catalog/product/m/i/494x544/milan-fabric-3-seater-sofa-in-sky-blue-colour-milan-fabric-3-seater-sofa-in-sky-blue-colour-kxcoqm.jpg  ",
      cityname: " Hyderabad ",
      studios: "10 Studios"
    },
    {
      img: "https://ii1.pepperfry.com/media/catalog/product/k/i/494x544/kiki-fabric-3-seater-sofa-in-sapling-green-colour-kiki-fabric-3-seater-sofa-in-sapling-green-colour-rp1qhc.jpg",
      cityname: " Delhi NCR ",
      studios: "12 Studios"
    },
    {
      img: "https://ii1.pepperfry.com/media/catalog/product/n/e/494x544/nebula-fabric-3-seater-sofa-in-charcoal-grey-colour-nebula-fabric-3-seater-sofa-in-charcoal-grey-col-mk8y9x.jpg",
      cityname: "  Pune  ",
      studios: "7 Studios"
    }



  ]








  return (
    <>

      <Grid container sx={{ justifyContent: "center",  backgroundColor:"#f5f5f5" }}  >



        <Grid xs={11.6} display={{ xs: 'block', sm: 'none' }}  marginTop={1} marginBottom={1}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{
              '--swiper-navigation-size': '15px', // Set the size you desire
            }}
            breakpoints={{
              // Large devices (lg)
              1024: {
                slidesPerView: 5,
                //   autoplay: false, 
              },
              // Medium devices (md)
              768: {
                slidesPerView: 5,
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

            {
              card.map((item) => (

                <SwiperSlide>

                  <div style={{ position: 'relative' }}>
                    <Grid container xs={12} gap={1}>
                      <Grid xs={11} >
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
                            right: '20px',
                            bottom: 0,
                            transform: 'translate(1%, 40%)',
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
                      <Grid xs={11} >
                        <ThemeProvider theme={theme}>
                          <Typography fontSize={'10px'} color={'#5B5B5B'} noWrap>Neos Premium Natural Brown Teak Wood Cutlery Holder</Typography>
                          <Typography fontSize={'12px'} color={'#323232'}>₹422 <strike style={{ color: '#848484' }}>₹625</strike><span style={{ color: '#67AD5B' }}> <b>32%</b></span></Typography>
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
{/* <Divider/> */}



    </>



  )
}

export default Tabscard1mobile;