import * as React from 'react';


import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '@mui/material/Grid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Typography from '@mui/joy/Typography';


const Homecardslider = () => {

  const card = [
    {
      img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637042_delhi_web-min.jpg",
      cityname: "Bengaluru",
      studios: "20 Studios"
    },
    {
      img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695635645_mumbai_web-min.jpg",
      cityname: " Mumbai ",
      studios: "13 Studios"
    },
    {
      img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695635790_hyderabad_web-min.jpg",
      cityname: " Hyderabad ",
      studios: "10 Studios"
    },
    {
      img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695635790_hyderabad_web-min.jpg",
      cityname: " Delhi NCR ",
      studios: "12 Studios"
    },
    {
      img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637140_pune_web-min.jpg",
      cityname: "  Pune  ",
      studios: "7 Studios"
    },
    {
      img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637421_chennai_web-min.jpg",
      cityname: "  Chennai  ",
      studios: "6 Studios"
    },
    {
      img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637650_gurgaon_web-min.jpg",
      cityname: "  Gurgaon  ",
      studios: "3 Studios"
    },

    {
      img: "https://ii1.pepperfry.com/assets/view_all_studio-new.png",
      cityname: "  Explore More  ",
      studios: "1 Studios Near You "
    },


  ]








  return (

    <Grid container sx={{ justifyContent: "center", marginTop: "20px", marginBottom: "50px" }}  >

      <Grid item xs={11} display={{ xs: 'none', sm: 'block' }} >
        <Grid container spacing={{ xs: 1, md: 1, lg: 0, }} columns={{ xs: 2, sm: 12, md: 12, lg: "12" }} >
          <Grid xs={1} sm={3} lg={3} md={3}  >
            <img src='https://ii1.pepperfry.com/assets/05b113c8-f339-48e8-93d4-18ea7a38cb27.jpg' alt="" width='100%' height='300' />
          </Grid>



          {/* empty grid */}
          <Grid lg={0.2} md={0} sm={0.2}>

          </Grid>



          {/* slider grid */}

          <Grid xs={9} lg={8.5} sm={8.5} md={8.5} >
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
            >

              {
                card.map((item) => (

                  <SwiperSlide>

                    <div style={{ position: 'relative' }}>
                      <img
                        src={item.img}
                        alt=""
                        width="100%"
                        height="300px"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '300px',
                          background: 'rgba(0, 0, 0, 0.5)', // Change the color and opacity as needed
                        }}
                      ></div>
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%', // Adjust the vertical position of the text
                          left: '50%', // Adjust the horizontal position of the text
                          transform: 'translate(-50%, -50%)', // Center the text
                          color: 'white', // Text color
                          fontSize: '24px', // Text size
                        }}
                      >
                        <Typography textColor={'#FFFFFF'} fontSize={{lg:"24px",md:"20px",sm:"16px"}} fontFamily={'Manrope,sans-serif'}><b>{item.cityname}</b> </Typography>
                        <Typography textAlign={'center'} textColor={'#FFFFFF'} fontSize={{lg:"14px",md:"14px",sm:"12px"}} fontFamily={'Manrope,sans-serif'}> <b> {item.studios} </b> </Typography>
                      </div>
                    </div>

                  </SwiperSlide>


                ))
              }


            </Swiper>




            {/* <SwiperSlide>
       
      <div style={{ position: 'relative' }}>
  <img
    src="https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637042_delhi_web-min.jpg"
    alt=""
    width="100%"
    height="300"
  />
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '300px',
      background: 'rgba(0, 0, 0, 0.5)', // Change the color and opacity as needed
    }}
  ></div>
  <div
    style={{
      position: 'absolute',
      top: '50%', // Adjust the vertical position of the text
      left: '50%', // Adjust the horizontal position of the text
      transform: 'translate(-50%, -50%)', // Center the text
      color: 'white', // Text color
      fontSize: '24px', // Text size
    }}
  >
    Your Text Here
  </div>
</div>
        
      </SwiperSlide> */}


            {/* <SwiperSlide><Grid>
        <img src="https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695635645_mumbai_web-min.jpg" alt="" width='100%' height='300' />
        </Grid></SwiperSlide>
      <SwiperSlide>
      <Grid >
        <img src="https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695635790_hyderabad_web-min.jpg" alt="" width='100%' height='300' />
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
      <Grid >
        <img src="https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637042_delhi_web-min.jpg" alt="" width='100%' height='300' />
        </Grid>
      </SwiperSlide> */}

          </Grid>
        </Grid>
      </Grid>


    </Grid>







  )
}

export default Homecardslider;