import * as React from 'react';


import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '@mui/material/Grid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Typography from '@mui/joy/Typography';


const Findslider = () => {

  const card = [
    {
      img: "https://cdn4.singleinterface.com/files/banner_images/165131/6349_1677562010_19371677424983Testimonial1.jpg",
      cityname: "Bengaluru",
      studios: "20 Studios"
    },
    {
      img: "https://cdn4.singleinterface.com/files/banner_images/165131/2179_1677562119_2501677424983Testimonial2.jpg",
      cityname: " Mumbai ",
      studios: "13 Studios"
    },
    {
      img: "https://cdn4.singleinterface.com/files/banner_images/165131/6071_1677562281_82591677424984Testimonial3.jpg",
      cityname: " Hyderabad ",
      studios: "10 Studios"
    }
    


  ]








  return (

    <Grid container sx={{ justifyContent: "center", marginTop: "20px", marginBottom: "50px" }}  >

      <Grid item lg={9.5} md={11} sm={11} xs={11}>
     



          {/* slider grid */}

          <Grid  lg={12} md={12} sm={12} xs={12}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={3}
            autoplay={{
                delay: 1000, // Set autoplay delay to 2 seconds
                disableOnInteraction: false,
              }}
              breakpoints={{
                // Large devices (lg)
                1024: {
                  slidesPerView: 3,
                //   autoplay: false, 
                },
                // Medium devices (md)
                768: {
                  slidesPerView: 2,
                //   autoplay: false, 
                },
                // Small devices (sm)
                576: {
                  slidesPerView: 1.5,
                //   autoplay: true, 


                },
                // Extra small devices (xs)
                0: {
                  slidesPerView: 1.5,
                //   autoplay: true, 
 
                  
                },
              }}
          
            //   navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              style={{
                '--swiper-navigation-size': '15px', // Set the size you desire
              }}
            >

              {
                card.map((item) => (

                  <SwiperSlide>

                    <div style={{ position: 'relative' }}>
                      <img
                        src={item.img}
                        alt=""
                        width="100%"
                        height="100%"
                      />

                    </div>

                  </SwiperSlide>


                ))
              }


            </Swiper>


          </Grid>
        </Grid>
      </Grid>


  






  )
}

export default Findslider;