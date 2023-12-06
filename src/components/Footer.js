import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';



const Footer = () => {

    const Foot = [
        {
            title: "Corporate",
            link1: "About Us",
            link2: "Corporate Governance",
            link3: "Pepperfry in the News",
            link4: "Careers",
            link5: "",
        },
        {
            title: " Useful Links",
            link1: "Explore Gift Cards",
            link2: "Buy in Bulk",
            link3: "Discover Our Brands",
            link4: "Check Out Bonhomie, Our Blog",
            link5: "Find a Studio",
        },
        {
            title: "Partner With Us",
            link1: "Sell on Pepperfry",
            link2: "Become a Franchisee",
            link3: "Become Our Channel Partner",
            link4: "Become Our Pep Homie",
            link5: "Our Marketplace Policies",
            link6: "Merchant Dashboard Login",
        },
        {
            title: "Need Help?",
            link1: "FAQs",
            link2: "Policies",
            link3: "Contact Us",

        },
    ]

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
        <Box sx={{ flexGrow: 1 }} display={{ xs: 'none', sm: 'block', lg: 'block', md: 'block' }}>

            <Grid container sx={{ justifyContent: "center", backgroundColor: "#f5f5f5" }} >

                <Grid item xs={11}  >

                    <Grid container gap={3} columns={{ xs: 0, sm: 12, md: 12, lg: "12", xl: '12' }} marginTop={7} marginBottom={'40px'}>

                        {Foot.map((data) => (
                            <Grid lg={2} md={2} sm={2}  >
                                <Typography fontSize={{ xs: '12px', lg: "16px", sm: "12px", md: "14px" }} color={'#121212'} fontFamily={'Manrope,sans-serif'}><b>{data.title}</b></Typography>
                                <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                    <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>{data.link1}</Link>
                                </Typography>
                                <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                    <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>{data.link2}</Link>
                                </Typography>
                                <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                    <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>{data.link3}</Link>
                                </Typography>
                                <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                    <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>{data.link4}</Link>
                                </Typography >
                                <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                    <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>{data.link5}</Link>
                                </Typography>
                                <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                    <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>{data.link6}</Link>
                                </Typography>
                            </Grid>

                        ))}


                        <Grid lg={3} md={2} sm={2} >
                            <Typography fontSize={{ xs: '12px', lg: "16px", sm: "12px", md: "14px" }} color={'#121212'} fontFamily={'Manrope,sans-serif'}><b>Shop Built Safe Products</b></Typography>
                            <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>Kids & Pet Friendly</Link>
                            </Typography>
                            <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>Certified Non-Toxic</Link>
                            </Typography>
                            <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>Made with Vegetarian Glue</Link>
                            </Typography>
                            <Typography marginTop={0.5} fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }}>
                                <Link to='' style={{ textDecoration: 'none', color: "#848484", fontFamily: "Manrope,sans-serif" }}>Scratch Resistant Finish</Link>
                            </Typography >
                            <Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#121212'} fontFamily={'Manrope,sans-serif'}><b>Download our App</b></Typography>

                            <Grid container gap={1} marginTop={1}>
                                <Grid lg={4.1} md={4.1} sm={5}>
                                    <img src='https://ii1.pepperfry.com/assets/pf23-apple-appstore-logo.png' width='100%' height='85%' alt='' />
                                </Grid>
                                <Grid lg={4.1} md={4.1} sm={5}>
                                    <img src='https://ii1.pepperfry.com/assets/pf23-google-appstore-logo.png' width='100%' height='85%' alt='' />
                                </Grid>
                            </Grid>

                        </Grid>


                        {/* footer information 3 cards componenet /////////////////////////////////////////////////////// */}


                        <Grid container gap={8} columns={{ xs: 0, sm: 12, md: 12, lg: 12 }} marginTop={6} >

                            {foot.map((data1) => (
                                <Grid lg={3.5} sm={3.2} md={3.4}>
                                    <Typography fontSize={{ xs: '12px', lg: "16px", sm: "12px", md: "14px" }} color={'#121212'} px='6px' fontFamily={'Manrope,sans-serif'} ><b>{data1.title}</b></Typography>
                                    <Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'} marginTop={1.5} width={'100%'} px='6px' py='1.5px'>{data1.descrip}</Typography>
                                </Grid>


                            ))}

                        </Grid>












                    </Grid>

                    <hr />


                    {/* socila media components/////////////////////////////////////////////////////////////////////////// */}

                    <Grid container columns={{ xs: 0, sm: 12, md: 12, lg: 12 }} marginTop={5} marginBottom={5} >


                        <Grid lg={5} md={5} sm={6} columns={{ xs: 0, sm: 12, md: 12, lg: 12 }}>
                            <Typography fontSize={{ xs: '12px', lg: "16px", sm: "12px", md: "14px" }} color={'#121212'} fontFamily={'Manrope,sans-serif'}><b>We accept</b></Typography>
                            <Grid container gap={0.5} marginTop={1}>
                                <Grid lg={1.4} md={1} sm={1.2}>
                                    <Link><img src='https://ii1.pepperfry.com/assets/w23-pf-visa.jpg' width='100%' height='90%' alt='' /></Link>
                                </Grid>
                                <Grid lg={1.4} md={1.5} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-master-card.jpg' width='100%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.5} md={1.5} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg' width='100%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-american-express.jpg' width='100%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-rupay.jpg' width='100%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-dinners-club.jpg' width='100%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-wallet.jpg' width='100%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg' width='100%' height='90%' alt='' />
                                </Grid>



                            </Grid>
                        </Grid>

                        <Grid lg={3} md={3} sm={1}>

                        </Grid>

                        <Grid lg={4} md={4} sm={5} columns={{ xs: 0, sm: 12, md: 12, lg: 12 }}>
                            <Typography fontSize={{ xs: '12px', lg: "16px", sm: "12px", md: "14px" }} color={'#121212'} fontFamily={'Manrope,sans-serif'}><b>Like What You See? Follow us Here</b></Typography>

                            <Grid container gap={2} marginTop={1}>
                                <Grid lg={1.4} md={1.4} sm={1.5}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-insta.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.5} md={1.5} sm={1.5}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-fb.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.5} md={1.5} sm={1.5}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-pinterest.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-linkedin.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-youtube.png' width='90%' height='90%' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-social-twitter.png' width='90%' height='90%' alt='' />
                                </Grid>



                            </Grid>
                        </Grid>




                    </Grid>

                    <hr />



                    {/* copy rughts components /////////////////////////////////////////////////////////////// */}



                    <Grid container justifyContent={'center'} columns={{ xs: 0, sm: 12, md: 12, lg: 12 }} marginTop={5} marginBottom={8}>


                        <Grid lg={7} sm={11} md={9} columns={{ xs: 0, sm: 12, md: 12, lg: 12 }} >
                            <Grid container gap={3} >
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Whitehat</Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Sitemap</Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Terms Of Use</Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Privacy Policy</Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Your Data and Security</Typography></Link>
                                <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Grievance Redressal</Typography></Link>
                            </Grid>

                            <Grid lg={10} sm={12} md={12} columns={{ xs: 0, sm: 12, md: 12, lg: 4 }} textAlign={'center'}>
                                <Typography fontSize={{ xs: '12px', lg: "14px", sm: "12px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'} marginTop={1.5} width={'100%'}>© Copyright Pepperfry Limited</Typography>
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>

            </Grid>

        </Box >
    )
}

export default Footer;
