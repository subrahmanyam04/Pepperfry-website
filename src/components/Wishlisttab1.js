import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
const Wishlisttab1 = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: "center" }}>
                <Grid lg={12} md={12} sm={12} xs={12}>
                    <img src='https://ii2.pepperfry.com/assets/0a675eb1-edd3-42d0-b04b-45e48a3a1b13.jpg' width={'100%'} alt="" />
                </Grid>



                <Grid container marginTop={4} marginBottom={2}>
                    <Grid lg={12} md={12} sm={12} xs={12}>
                        <Typography textAlign={'center'} color={'#121212'} fontSize={{ lg: "24px", md: '20px' }} fontFamily={'Manrope,sans-serif'}><b>OMG!</b></Typography>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} xs={12}>
                        <Typography textAlign={'center'} color={'#121212'} fontSize={{ lg: "24px", md: "20px" }} fontFamily={'Manrope,sans-serif'}><b>Your wishlist is empty</b></Typography>
                    </Grid>
                </Grid>

                <Grid lg={8} md={8} sm={8} xs={12}>
                    <img src="https://ii3.pepperfry.com/assets/w23-empty-wishlist.png" width={'100%'} alt="" />
                </Grid>

                <Grid lg={9} md={9} sm={10} xs={12} marginTop={3}>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" type="button" color="primary" fullWidth style={{ cursor: "pointer" }}><Typography fontSize={'16px'}  >Search</Typography></Button>
                    </ThemeProvider>
                </Grid>

                <Grid lg={5} marginTop={9} md={7} sm={8} xs={10}>
                    <ThemeProvider theme={theme}>
                        <Button variant="outlined" type="button" color="primary" fullWidth style={{ cursor: "pointer" }}><Typography fontSize={{ lg: "16px", md: "16px", sm: '14px' }}  ><b>EXPLORE MORE PRODUCTS</b></Typography></Button>
                    </ThemeProvider>
                </Grid>


            </Grid>
        </>
    )
}

export default Wishlisttab1;