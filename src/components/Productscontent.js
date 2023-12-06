import { Button, Divider, Grid, TextField, Tooltip, Typography } from "@mui/material";
import React from "react";
import Productsmagnifier from "./Productsmagnifier";
import ReactImageMagnify from 'react-image-magnify';
import { styled } from "@mui/material";
// import { style } from "@mui/system";
import { Icon } from '@iconify/react';
import IconButton from '@mui/joy/IconButton';

import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Productsdynamiccontent from "./Productsdynamiccontent";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import Productscontentaccordian from "./Productscontentaccordian";
import Productsslider from "./Productsslider";
import Productsslidermobile from "./Productsslidermobile";
import Productscontentmobileaccordian from "./Productscontentmobileaccordian";

const Productscontent = () => {
    const TabContainer = styled('div')({
        position: 'sticky',
        top: 80,
        // zIndex: 1000,
        backgroundColor: 'white',
    });

    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>

            <Grid container sx={{ justifyContent: "center" }} marginTop={2}>
                <Grid lg={10.5} md={11} sm={11.5} xs={12}>
                    <Grid container gap={{ lg: 2.5, md: 2.5, sm: 2.5 }} lg={12} sm={12} md={12} xs={12} >
                        <Grid lg={6.4} md={6.5} sm={6.5} xs={12}  >
                            <TabContainer>
                                <Productsmagnifier />
                                <Productsslider />
                                <Productsslidermobile />
                            </TabContainer>
                            {/* <ReactSlickExample/> */}
                        </Grid>


                        {/* main grid */}

                        <Grid lg={5.4} md={4.89} sm={4.8} xs={12}  >
                            <Grid display={{ xs: 'none', sm: "block", md: 'block', lg: "block" }}>
                                <Grid container     >
                                    <Grid lg={8} md={9} sm={9}  >
                                        <Typography fontFamily={'Poppins,sans-serif'} fontSize={{ lg: "16px", md: "16px", sm: "14px" }} color={'#5B5B5B'} ><strong>Kiki Fabric 3 Seater Sofa in Sapling Green Colour,</strong></Typography>

                                    </Grid>
                                    <Grid lg={2} md={0} sm={0}  >

                                    </Grid>
                                    <Grid lg={2} md={2.9} sm={2.9} container justifyContent={'end'} >

                                        <Icon icon="fluent:share-48-filled" color="#ff7035" width="18" height="18" />
                                        <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "14px", md: "12px", sm: "12px" }} color={'#FF7035'}><b> Share</b></Typography>



                                    </Grid>
                                    <Grid lg={4} md={4} sm={4} marginBottom={0.5}>
                                        <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "16px", md: "16px", sm: "14px" }} color={'#FF7035'} display={{ xs: 'none', sm: "block", md: 'block', lg: "block" }}> By Sleepyhead </Typography>

                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider />

                            {/* star rating */}

                            <Grid lg={12} md={12} sm={12} marginTop={0.5} display={{ xs: 'none', sm: "block", md: 'block', lg: "block" }}>
                                <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                <Icon icon="mdi:star" color="#ffa986" width="15" height="15" />
                                <span style={{ fontSize: "12px", color: "121212", fontFamily: "Manrope,sans-serif" }} > (80 Sold)</span>
                            </Grid>


                            <Grid lg={12} md={12} sm={12} container >
                                <Grid display={{ xs: 'none', sm: "block", md: 'block', lg: "block" }}>
                                    <Icon icon="iconoir:eye" color="#5b5b5b" width="15" height="15" />
                                </Grid>
                                <Grid display={{ xs: 'none', sm: "block", md: 'block', lg: "block" }}>
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: "12px", sm: "10px" }} color={'#5B5B5B'}> <b>90 People </b> are Viewing this Product Right Now</Typography>
                                </Grid>
                            </Grid>

                            {/* dynamic component */}
                            <Grid lg={6} md={12} sm={12} xs={12} marginTop={1} marginBottom={2} display={{ xs: 'block', sm: "none", md: 'none', lg: "none" }}>
                                <Grid lg={12} md={12} sm={12} xs={12} marginBottom={1}><Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "16px", md: "16px", sm: "14px", xs: "14px" }} color={'#121212'}><strong>Select Colour</strong></Typography></Grid>
                                <Productsdynamiccontent />

                            </Grid>

                            {/* Xs display content */}

                            <Grid container lg={12} md={12} sm={12} xs={12} marginTop={2}>
                                <Grid lg={3} md={3} sm={3} xs={3} >
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: '12px', sm: '12px', xs: "12px" }} color={'#848484'}>
                                        MRP
                                    </Typography >
                                </Grid>
                                <Grid lg={9} md={9} sm={9} xs={9} >
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "14px", md: "14px", sm: "12px", xs: "12px" }} color={'#848484'}>
                                        <strike> ₹20,999 </strike>
                                    </Typography>
                                </Grid>

                                <Grid lg={3} md={3} sm={3} xs={3} >
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: '12px', sm: "12px", xs: "12px" }} color={'#848484'}>
                                        Offer price
                                    </Typography >
                                </Grid>
                                <Grid lg={1.25} md={2} sm={2.3} xs={1.85} >
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "16px", md: '16px', sm: "14px", xs: "12px" }} color={'#323232'}>
                                        ₹15,999
                                    </Typography>
                                </Grid>
                                <Grid lg={7.75} md={7} sm={6} xs={6}>
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "14px", md: "14px", sm: "12px", xs: "12px" }} color={'#5B5B5B'}>
                                        [Retail Discount <b>₹5,000</b>]
                                    </Typography>
                                </Grid>


                            </Grid>
                            <Divider
                                sx={{
                                    borderStyle: 'dashed',
                                    borderWidth: '0.5px', // You can adjust the width of the dots
                                    borderColor: "#67AD5B" // Optional: You can add border-radius for rounded dotspx 
                                }}
                            />

                            {/* todays deal */}
                            <Grid container lg={12} md={12} sm={12} xs={12} marginTop={1.5} marginBottom={1}>
                                <Grid lg={3} md={3} sm={3} xs={3} >
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "14px", md: "14px", sm: "12px", xs: "12px" }} color={'#67AD5B'}>
                                        <b>Today’s Deal</b>
                                    </Typography >
                                </Grid>
                                <Grid lg={6} md={9} sm={9} xs={9} >
                                    <Grid container lg={12} md={12}>
                                        <Grid lg={3.6} md={3.6} sm={3.6}>
                                            <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "24px", md: "20px", sm: "20px", xs: "20px" }} color={'#121212'}>
                                                <b>₹15,999</b>
                                            </Typography>
                                        </Grid>
                                        <Grid lg={8} md={9} sm={12} xs={12}>
                                            <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "14px", md: "14px", sm: "12px", xs: "12px" }} color={'#121212'} marginTop={{ lg: 1, md: 0 }}> & [Earn Cashback Worth  <b>₹320</b> ]
                                            </Typography>
                                        </Grid>
                                        <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: "12px", sm: "12px", xs: "12px" }} color={'#848484'}>EMI from <b>₹769/mo</b>  </Typography><Icon icon="iwwa:arrow-right" color="#5b5b5b" width="18" height="18" />
                                        <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: "12px", sm: "12px", xs: "10px" }} color={'#67AD5B'}>Apply Coupon  <b>MANIA</b> to Avail Today’s Deal</Typography>
                                        <Grid lg={12} md={12} sm={12} xs={12} container>
                                            <AccessAlarmsIcon variant="soft"
                                                // color="#d8232a"
                                                sx={{
                                                    backgroundColor: "white",
                                                    color: "#d8232a",
                                                    fontSize: "  14px",
                                                    fontFamily: "Manrope,sans-serif",
                                                    height: "15px"
                                                }} />
                                            <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: '12px', sm: "12px", xs: "12px" }} color={'#d8232a'} marginLeft={0.5}><b>Ending in 6h : 22m : 49s</b></Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* banner */}

                            <Grid lg={12} md={12} sm={12} xs={12}>
                                <img src='https://ii1.pepperfry.com/media/wysiwyg/banners/1440_Large_VIP_2x_HPP_0112.jpg' alt="" height={'100%'} width={'100%'} />
                            </Grid>


                            {/* Your Savings */}

                            <Grid container lg={12} md={12} sm={12} xs={12} marginTop={1.5} marginBottom={2}>
                                <Grid lg={3} md={3} sm={3} xs={3} >
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: "12px", sm: "12px", xs: "12px" }} color={'#323232'}>
                                        Your Savings
                                    </Typography >
                                </Grid>
                                <Grid lg={6} md={9} sm={9} xs={9}>
                                    <Grid container lg={12} md={12} sm={12} xs={12}>
                                        <Grid lg={12} md={12} sm={12} xs={12}>
                                            <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "14px", md: "14px", sm: "12px", xs: "12px" }} color={'#5B5B5B'}>
                                                <b>₹5,000 (24 % off)</b>
                                            </Typography>
                                        </Grid>
                                        <Grid lg={8} md={12} sm={12} xs={12}>
                                            <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: "12px", sm: "10px", xs: "10px" }} color={'#848484'} > [ <b>₹5000</b> Retail Discount ]
                                            </Typography>
                                        </Grid >
                                        <Grid lg={12} md={12} sm={12} xs={12}>
                                            <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: "12px", sm: "10px", xs: "10px" }} color={'#1979B5'}>Earn 320 Extra Pepperfry Credits (Worth <b>₹320</b> ) </Typography><Tooltip title="Your Tooltip Text" arrow placement="top" ><Icon icon="solar:danger-circle-line-duotone" color="#5b5b5b" width="18" height="18" /></Tooltip>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider
                                sx={{
                                    borderStyle: 'dashed',
                                    borderWidth: '0.5px', // You can adjust the width of the dots
                                    borderColor: "#67AD5B" // Optional: You can add border-radius for rounded dotspx 
                                }}
                            />

                            {/* delievery */}
                            <Grid container lg={12} md={12} sm={12} xs={12} marginBottom={1}  >
                                <Grid lg={12} md={12} sm={12} xs={12} marginTop={1}>
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "16px", md: "16px", sm: "14px", xs: "14px" }} color={'#121212'}>
                                        <b>Delivery & Assembly</b>
                                    </Typography>
                                </Grid>
                                <Grid lg={12} md={12} sm={12} xs={12} marginTop={1.5}>
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "12px", md: "12px", sm: "12px", xs: "12px" }} color={'#848484'}>
                                        Delivering to
                                    </Typography>
                                </Grid>
                                <Grid lg={6} md={6} sm={6} xs={6} marginTop={1} >

                                    <TextField fullWidth size="small" placeholder='Enter Pincode' id="fullWidth" />

                                </Grid>

                                <Grid container lg={4} md={4} sm={4} xs={4} marginTop={2} marginLeft={0.5}>
                                    <Icon icon="lucide:locate-fixed" color="#ff7035" width="18" height="18" />
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "14px", md: "14px", sm: "12px", xs: "12px" }} color={'#FF7035'}>Locate</Typography>

                                </Grid>
                                <Grid lg={12} md={12} sm={12} xs={12} marginTop={1}>
                                    <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "14px", md: "14px", sm: "12px", xs: "12px" }} color={'#323232'}>
                                        Add Pincode to Get Delivery and Assembly Details
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Divider
                                sx={{
                                    borderWidth: '1px',
                                    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)', // Light grey shadow
                                }}
                            />

                            {/* dynamic component */}
                            <Grid lg={6} md={12} sm={12} xs={12} marginTop={1} marginBottom={2} display={{ xs: 'none', sm: "block" }}>
                                <Grid lg={12} md={12} sm={12} xs={12} marginBottom={1}><Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "16px", md: "16px", sm: "14px", xs: "14px" }} color={'#121212'}>Select Colour</Typography></Grid>
                                <Productsdynamiccontent />

                            </Grid>

                            <Divider
                                sx={{
                                    borderWidth: '1px',
                                    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)', // Light grey shadow
                                }}
                            />

                            {/* Quntity */}

                            <Grid container lg={12} md={12} sm={12} xs={12} marginTop={2} marginBottom={2}>
                                <Grid lg={2} md={2} sm={2} xs={12}>


                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        <MenuItem value={10} ><Typography fontSize={{ lg: "14px", md: "14px", sm: "14px", xs: "14px" }} fontFamily={'Manrope,sans-serif'} color={'#000000'} padding={'0px 5px 0px 0px'}>QTY 1</Typography></MenuItem>
                                        <MenuItem value={20}><Typography fontSize={{ lg: "14px", md: "14px", sm: "14px", xs: "14px" }} fontFamily={'Manrope,sans-serif'} color={'#000000'} padding={'0px 5px 0px 0px'}>QTY 2</Typography></MenuItem>
                                        <MenuItem value={30}><Typography fontSize={{ lg: "14px", md: "14px", sm: "14px", xs: "14px" }} fontFamily={'Manrope,sans-serif'} color={'#000000'} padding={'0px 5px 0px 0px'}>QTY 3</Typography></MenuItem>
                                    </Select>

                                </Grid>
                                <Grid lg={10} md={10} sm={10} xs={12} container justifyContent={{ xs: 'start', sm: "end" }}>
                                    <Grid>
                                        <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "14px", md: "14px", sm: "12px", xs: "12px" }} color={'#121212'} marginTop={1}>
                                            Total Price
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "20px", md: "16px", sm: "14px", xs: "14px" }} color={'#121212'} marginTop={0.5} marginLeft={1}>
                                            <b> 15,999 </b>
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>


                            {/* buttons */}

                            <Grid lg={12} md={12} sm={12} xs={12} container>
                                <ThemeProvider theme={theme}>
                                    <Grid lg={5.7} md={5.7} sm={5.7} xs={5.7} >

                                        <Button variant="outlined" type="button" color="primary" fullWidth style={{ cursor: "pointer" }} ><Typography padding={0.8} fontSize={{ lg: '16px', md: '14px', sm: '14px', xs: '14px' }}>ADD TO CART</Typography></Button>

                                    </Grid>
                                    <Grid lg={0.6} md={0.6} sm={0.7} xs={0.7}></Grid>
                                    <Grid lg={5.7} md={5.5} sm={5.6} xs={5.6} >
                                        <Button variant="contained" type="button" color="primary" fullWidth style={{ cursor: "pointer" }} ><Typography padding={0.8} fontSize={{ lg: '16px', md: '14px', sm: '14px', xs: '14px' }}>BUY NOW</Typography></Button>
                                    </Grid>
                                </ThemeProvider>
                            </Grid>


                            {/* accordian  */}

                            <Grid container lg={12} md={12} sm={12} xs={12} >
                                <Productscontentaccordian />
                                <Productscontentmobileaccordian/>

                            </Grid>




                        </Grid>
                    </Grid>
                </Grid>










            </Grid>










        </>

    )
}

export default Productscontent;