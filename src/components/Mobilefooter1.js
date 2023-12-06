import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import Divider from '@mui/material/Divider';



import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Mobilefooter1 = () => {



    // const card = [
    //     {
    //         img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637042_delhi_web-min.jpg",
    //         cityname: "Bengaluru",
    //         studios: "20 Studios"
    //     },
    //     {
    //         img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695635645_mumbai_web-min.jpg",
    //         cityname: " Mumbai ",
    //         studios: "13 Studios"
    //     },
    //     {
    //         img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695635790_hyderabad_web-min.jpg",
    //         cityname: " Hyderabad ",
    //         studios: "10 Studios"
    //     },
    //     {
    //         img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695635790_hyderabad_web-min.jpg",
    //         cityname: " Delhi NCR ",
    //         studios: "12 Studios"
    //     },
    //     {
    //         img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637140_pune_web-min.jpg",
    //         cityname: "  Pune  ",
    //         studios: "7 Studios"
    //     },
    //     {
    //         img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637421_chennai_web-min.jpg",
    //         cityname: "  Chennai  ",
    //         studios: "6 Studios"
    //     },
    //     {
    //         img: "https://pf-v3.s3.ap-southeast-1.amazonaws.com/media/catalog/product/studio-cities/1695637650_gurgaon_web-min.jpg",
    //         cityname: "  Gurgaon  ",
    //         studios: "3 Studios"
    //     },

    //     {
    //         img: "https://ii1.pepperfry.com/assets/view_all_studio-new.png",
    //         cityname: "  Explore More  ",
    //         studios: "1 Studios Near You "
    //     },


    // ]


    const foot = [
        {
            title: "Popular Categories",
            descrip: "Sofas,Sectional Sofas,Sofa Sets,Queen Size Beds,King Size Beds,Coffee Tables,Dining Sets,Recliners,Sofa Cum Beds,Rocking Chairs,Cabinets & Sideboards,Book Shelves,TV & Media Units,Wardrobes,Outdoor Furniture,Bar Cabinets,Wall Shelves,Photo Frames,Bed Sheets,Table Linen,Study Tables,Office Furniture,Dining Tables,Carpets,Wall Art"
        },
        {
            title: "Popular Brands",
            descrip: "Sofas,Sectional Sofas,Sofa Sets,Queen Size Beds,King Size Beds,Coffee Tables,Dining Sets,Recliners,Sofa Cum Beds,Rocking Chairs,Cabinets & Sideboards,Book Shelves,TV & Media Units,Wardrobes,Outdoor Furniture,Bar Cabinets,Wall Shelves,Photo Frames,Bed Sheets,Table Linen,Study Tables,Office Furniture,Dining Tables,Carpets,Wall Art"
        },
        {
            title: "Popular cities",
            descrip: "Sofas,Sectional Sofas,Sofa Sets,Queen Size Beds,King Size Beds,Coffee Tables,Dining Sets,Recliners,Sofa Cum Beds,Rocking Chairs,Cabinets & Sideboards,Book Shelves,TV & Media Units,Wardrobes,Outdoor Furniture,Bar Cabinets,Wall Shelves,Photo Frames,Bed Sheets,Table Linen,Study Tables,Office Furniture,Dining Tables,Carpets,Wall Art"
        },
    ]


    return (
        <Box sx={{ flexGrow: 1 }} display={{ xs: 'block', sm: 'none', lg: 'none', md: 'none' }}>

            <Grid container sx={{ justifyContent: "center", backgroundColor: "#f5f5f5" }} marginTop={10}>

                <Grid item xs={11}  >

                    {/* socila media components/////////////////////////////////////////////////////////////////////////// */}

                    <Grid container columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} marginTop={5} marginBottom={5} >

                        <Grid xs={12} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }}  >
                            <Typography fontSize={{ xs: '14px' }} color={'#121212'} fontFamily={'Manrope,sans-serif'} textAlign={'center'}><b>Like What You See? Follow us Here</b></Typography>

                            <Grid container gap={2} marginTop={1} justifyContent={'center'}>
                                <Grid xs={1}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-insta.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1} >
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-fb.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-pinterest.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-linkedin.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-youtube.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-twitter.png' width='90%' height='90%' alt='' />
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>


                    {/* image component ////////////////////////////////// */}

                    <Grid container columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} marginTop={5} marginBottom={5} >

                        <Grid xs={12} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} >

                            <Grid container gap={2} marginTop={1} >
                                <img src='https://www.analyticssteps.com/backend/media/thumbnail/4318706/9839808_1604696946_PEPPERFRY.jpg' alt='' width={'100%'} height={'100%'} />


                            </Grid>
                        </Grid>
                    </Grid>



                    {/* acordian component */}


                    <Grid xs={12} marginBottom={10} sx={{

                        // [`& .${accordionSummaryClasses.button}`]: {
                        //     bgcolor: 'white',
                        // },

                    }}>
                        <Accordion >
                            <button style={{ borderRadius: "5px", border: "1px solid grey", backgroundColor: "white" }}> <AccordionSummary ><Typography></Typography><Typography style={{ color: '#5b5b5b', justifyContent: 'center', textAlign: 'center', fontSize: "14px", fontFamily: 'Manrope,sans-serif' }}>Show More</Typography></AccordionSummary></button>
                            <Grid >
                                <AccordionDetails variant="soft">
                                    <Grid container justifyContent={'center'} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} marginTop={5} marginBottom={3}>

                                        <Grid xs={12} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} >
                                            <Typography fontSize={{ xs: '14px' }} color={'#121212'} fontFamily={'Manrope,sans-serif'} marginBottom={1}><b>Useful Links</b></Typography>
                                            <Grid container gap={0.5}>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Explore Gift Cards <span>|</span></Typography></Link>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Buy in Bulk <span>|</span></Typography></Link>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Discover Our Brands <span>|</span></Typography></Link>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Check Out Bonhomie, Our Blog <span>|</span></Typography></Link>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Find a Studio <span>|</span></Typography></Link>

                                            </Grid>


                                        </Grid>

                                    </Grid>
                                    <Divider />


                                    {/* link 2 components */}

                                    <Grid container justifyContent={'center'} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} marginBottom={3} marginTop={3}>

                                        <Grid xs={12} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} >

                                            <Grid container gap={0.5}>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Explore Gift Cards <span>|</span></Typography></Link>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Buy in Bulk <span>|</span></Typography></Link>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Discover Our Brands <span>|</span></Typography></Link>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Check Out Bonhomie, Our Blog <span>|</span></Typography></Link>
                                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Find a Studio <span>|</span></Typography></Link>

                                            </Grid>


                                        </Grid>

                                    </Grid>

                                    <Divider />

                                    {/* payment components //////////////// */}
                                    <Grid container columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} marginTop={3} marginBottom={3} >


                                        <Grid xs={12} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }}>
                                            <Typography fontSize={{ xs: '14px' }} color={'#121212'} fontFamily={'Manrope,sans-serif'}><b>We accept</b></Typography>
                                            <Grid container gap={0.5} marginTop={1}>
                                                <Grid xs={1.3}>
                                                    <Link><img src='https://ii1.pepperfry.com/assets/w23-pf-visa.jpg' width='90%' height='90%' alt='' /></Link>
                                                </Grid>
                                                <Grid xs={1.3}>
                                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-master-card.jpg' width='90%' height='90%' alt='' />
                                                </Grid>
                                                <Grid xs={1.3}>
                                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg' width='90%' height='90%' alt='' />
                                                </Grid>
                                                <Grid xs={1.3}>
                                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-american-express.jpg' width='90%' height='90%' alt='' />
                                                </Grid>
                                                <Grid xs={1.4}>
                                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-rupay.jpg' width='100%' height='90%' alt='' />
                                                </Grid>
                                                <Grid xs={1.4}>
                                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-dinners-club.jpg' width='90%' height='90%' alt='' />
                                                </Grid>
                                                <Grid xs={1.4}>
                                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-wallet.jpg' width='90%' height='90%' alt='' />
                                                </Grid>
                                                <Grid xs={1.4}>
                                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg' width='90%' height='90%' alt='' />
                                                </Grid>



                                            </Grid>
                                        </Grid>








                                    </Grid>

                                    <Divider />

                                    {/* slider component/// */}

                                    <Grid container justifyContent={'center'} columns={{ xs: 0, sm: 12, md: 12, lg: 12 }} marginTop={5} marginBottom={4}>


                                        <Grid lg={7} sm={11} md={9} columns={{ xs: 0, sm: 12, md: 12, lg: 12 }} >


                                            <Grid lg={12} sm={12} md={12} columns={{ xs: 0, sm: 12, md: 12, lg: 4 }} textAlign={'center'}>
                                                <Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'} marginTop={1.5} width={'100%'}>© Copyright Pepperfry Limited</Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                </AccordionDetails>
                            </Grid>
                        </Accordion>
                    </Grid>

                    {/* copy rughts components /////////////////////////////////////////////////////////////// */}

                    {/* <Grid container justifyContent={'center'} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} marginTop={5} marginBottom={3}>

                        <Grid xs={12} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} >
                            <Typography fontSize={{ xs: '14px' }} color={'#121212'} fontFamily={'Manrope,sans-serif'} marginBottom={1}><b>Useful Links</b></Typography>
                            <Grid container gap={0.5}>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Explore Gift Cards <span>|</span></Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Buy in Bulk <span>|</span></Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Discover Our Brands <span>|</span></Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Check Out Bonhomie, Our Blog <span>|</span></Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Find a Studio <span>|</span></Typography></Link>

                            </Grid>


                        </Grid>

                    </Grid> */}

                    {/* <hr /> */}

                    {/* link 2 components */}
                    {/* 
                    <Grid container justifyContent={'center'} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} marginBottom={3} marginTop={3}>

                        <Grid xs={12} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} >

                            <Grid container gap={0.5}>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Explore Gift Cards <span>|</span></Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Buy in Bulk <span>|</span></Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Discover Our Brands <span>|</span></Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Check Out Bonhomie, Our Blog <span>|</span></Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Find a Studio <span>|</span></Typography></Link>

                            </Grid>


                        </Grid>

                    </Grid> */}

                    {/* <hr /> */}


                    {/* payment components //////////////// */}
                    {/* <Grid container columns={{ xs: 12, sm: 0, md: 0, lg: 0 }} marginTop={3} marginBottom={10} >


                        <Grid xs={12} columns={{ xs: 12, sm: 0, md: 0, lg: 0 }}>
                            <Typography fontSize={{ xs: '14px' }} color={'#121212'} fontFamily={'Manrope,sans-serif'}><b>We accept</b></Typography>
                            <Grid container gap={0.5} marginTop={1}>
                                <Grid xs={1.3}>
                                    <Link><img src='https://ii1.pepperfry.com/assets/w23-pf-visa.jpg' width='90%' height='90%' alt='' /></Link>
                                </Grid>
                                <Grid xs={1.3}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-master-card.jpg' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1.3}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1.3}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-american-express.jpg' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-rupay.jpg' width='100%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-dinners-club.jpg' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-wallet.jpg' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid xs={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg' width='90%' height='90%' alt='' />
                                </Grid>



                            </Grid>
                        </Grid>








                    </Grid>

                    <hr /> */}


                </Grid>

            </Grid>

        </Box >
    )
}

export default Mobilefooter1;
