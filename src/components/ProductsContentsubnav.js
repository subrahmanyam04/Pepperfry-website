import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import { Icon } from '@iconify/react';
const ProductsContentsubnav = () => {
    return (
        <>
            <Grid container lg={12} md={12} sm={12} sx={{ justifyContent: "center",backgroundColor:"#f5f5f5" }} marginTop={8}>
                <Grid lg={7.8} md={11} sm={11.5}  display={{lg:'block',md:"block",sm:"block",xs:"none"}} marginTop={2} marginBottom={2}> 
                    <Grid container gap={{lg:1,md:1,sm:0.5}} >
                        
                        <Grid lg={2.2} md={2.1} sm={1.9} >
                            <Typography marginTop={1} fontSize={{ lg: '16px', md: '16px', sm: '11px', xs: '14px' }} fontFamily={'Manrope,sans-serif'} color={"#121212"}>
                               <b>Need Expert Advice?</b> 
                            </Typography>
                        </Grid>
                        <Grid lg={3.733} md={3.799} sm={3.888} >
                            <ThemeProvider theme={theme}>


                                <Button variant="outlined" type="button" color="black" fullWidth style={{ cursor: "pointer", }} justifyContent={'start'}><Typography padding={{lg:0.5,md:0.5,sm:0}} fontSize={{ lg: '12px', md: '12px', sm: '9.5px', xs: '14px' }} textAlign={'start'} fontFamily={'Manrope,sans-serif'} style={{ textTransform: 'capitalize' }}>{'Here’s a Guide to Buying the Perfect '.toLowerCase()}</Typography><span style={{ textTransform: 'capitalize',fontSize:"12px" }}><b>{'Sofas'.toLowerCase()}</b>
                                </span><Icon icon="solar:arrow-right-linear" color="#121212" width="12" height="12" /></Button>



                            </ThemeProvider>
                        </Grid>
                        <Grid lg={2.511} md={2.511} sm={2.666} >
                            <ThemeProvider theme={theme}>


                                <Button variant="outlined" type="button" color="black" fullWidth style={{ cursor: "pointer", }} justifyContent={'start'}><Typography padding={{lg:0.5,md:0.5,sm:0}} fontSize={{ lg: '12px', md: '12px', sm: '9.5px', xs: '14px' }} textAlign={'start'} style={{ textTransform: 'capitalize' }}>{'Visit Your  '.toLowerCase()}</Typography>   <span style={{ textTransform: 'capitalize',fontSize:"12px" }}> <b> {' Nearest Store'.toLowerCase()}</b>
                                </span><Icon icon="solar:arrow-right-linear" color="#121212" width="12" height="12" /></Button>



                            </ThemeProvider>

                        </Grid>
                        <Grid lg={3.2} md={3.2} sm={3.333} >
                            <ThemeProvider theme={theme}>


                                <Button variant="outlined" type="button" color="black" fullWidth style={{ cursor: "pointer", }} justifyContent={'start'} ><Typography padding={{lg:0.5,md:0.5,sm:0}} fontSize={{ lg: '12px', md: '12px', sm: '9.5px', xs: '14px' }} textAlign={'start'} style={{ textTransform: 'capitalize' }}>{'Talk to our Expert   '.toLowerCase()}</Typography><span style={{ textTransform: 'capitalize',fontSize:"12px" }}> <b>{'022-6116-7373'.toLowerCase()}</b>
                                </span><Icon icon="solar:arrow-right-linear" color="#121212" width="12" height="12" /></Button>



                            </ThemeProvider>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        </>

    )
}

export default ProductsContentsubnav;