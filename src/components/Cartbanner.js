import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import { Link } from 'react-router-dom';

const Cartbanner = () => {

    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000",
        fontWeight: "700",
        [theme.breakpoints.down("md")]: {
            fontSize: "32px",
        },
    }));

    return (
        <>
            <Grid container display={{ xs: 'none', sm: 'block' }}>
                <Paper style={{ padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >

                    <a href='/'>
                        <img src='./assets/images/pepperfry-logo-1024x369-1024x369.png' alt='...' width={'179px'} height={'38px'} ></img>
                    </a>

                </Paper>
            </Grid>
            <Grid lg={12} sm={12} md={12} xs={12} display={{ xs: 'none', sm: 'block' }} padding={0.1} backgroundColor={'#dde7f0'} style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }} >
                <Typography></Typography>
            </Grid>
            <ThemeProvider theme={theme}>
                <Grid container sx={{ justifyContent: 'center' }} marginTop={{ xs: 8, sm: 5 }}>
                    <Grid lg={10} md={10} sm={10} >

                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Grid container sx={{ justifyContent: 'center' }}>
                                <Grid lg={2} md={2.5} sm={2.5} xs={5.5} >

                                    <Typography color={'#323232'} textAlign={'center'} fontFamily={'Manrope,sans-serif'} fontSize={{ lg: '20px', md: '16px', sm: '14px', xs: '16px' }}><b>Your Cart is Empty</b></Typography>
                                </Grid>
                            </Grid>

                            <Grid lg={7} md={9} sm={12} xs={11.2} marginTop={3}>

                                <img src="https://ii2.pepperfry.com/assets/w23-empty-cart-060223.jpg" width={'100%'} height={'100%'} alt="" />
                            </Grid>
                        </Grid>

                        <Grid container sx={{ justifyContent: 'center' }} marginTop={2}>
                            <Grid lg={5.5} md={8} sm={8.5} xs={11.2} >

                                <Typography color={'#323232'} textAlign={{ xs: 'center' }} fontSize={{ xs: '14px',lg:"16px",md:'16px' }}><strong>What would you like to Buy ? Pick from our Best Selling Categories</strong></Typography>
                            </Grid>
                        </Grid>

                        <Grid container sx={{ justifyContent: 'center' }} marginTop={1} >

                            <Grid lg={5.5} md={9} sm={10} xs={10} container gap={1}>

                                <Grid container gap={{lg:2.9,md:2.9,sm:1.1,xs:1.5}} justifyContent={'center'} alignItems={'center'}>
                                    <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '14px', lg: "14px", sm: "14px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Furniture <span>|</span></Typography></Link>
                                    <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '14px', lg: "14px", sm: "14px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Home Décor <span>|</span></Typography></Link>
                                    <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '14px', lg: "14px", sm: "14px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Lamps & Lighting <span>|</span></Typography></Link>
                                    <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '14px', lg: "14px", sm: "14px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Mattresses <span>|</span></Typography></Link>
                                    <Link style={{ textDecoration: "none" }}><Typography fontSize={{ xs: '14px', lg: "14px", sm: "14px", md: "14px" }} color={'#848484'} fontFamily={'Manrope,sans-serif'}>Furnishings</Typography></Link>

                                </Grid>

                            </Grid>
                        </Grid>


                        <Grid container marginTop={2}>
                            <Grid lg={3.7} md={3.7} sm={3} xs={0.2}></Grid>
                            <Grid lg={4.6} md={4.4} sm={6} xs={11.6}>

                                <Button variant="contained" type="button" color="primary" fullWidth sx={{ marginTop: "15px" }} style={{ cursor: "pointer" }} ><Typography padding={0.8} fontSize={{ lg: '16px', md: '14px', sm: '14px', xs: '14px' }}>EXPLORE MORE CATEGORIES</Typography></Button>
                            </Grid>
                            <Grid lg={4} md={4} sm={4} xs={0.2}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default Cartbanner;