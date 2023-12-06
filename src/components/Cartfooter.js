import { Grid } from "@mui/material";
import React from "react";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Cartfooter = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: "center", backgroundColor: "#f5f5f5" }} >
                <Grid lg={11.3} md={11.3} sm={11.3} display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block' }}>


                    <Grid container columns={{ xs: 0, sm: 12, md: 12, lg: 12 }} marginTop={5} marginBottom={5} >


                        <Grid lg={5} md={8} sm={8} columns={{ xs: 0, sm: 12, md: 12, lg: 12 }}>
                            <Typography fontSize={{ xs: '12px', lg: "16px", sm: "12px", md: "14px" }} color={'#121212'} fontFamily={'Manrope,sans-serif'}>We accept</Typography>
                            <Grid container marginTop={1}>
                                <Grid lg={1.4} md={1} sm={1.2}>
                                    <Link><img src='https://ii1.pepperfry.com/assets/w23-pf-visa.jpg' width='83%' height='35.35px' alt='' /></Link>
                                </Grid>
                                <Grid lg={1.4} md={1.5} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-master-card.jpg' width='83%' height='35.35px' alt='' />
                                </Grid>
                                <Grid lg={1.5} md={1.5} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg' width='83%' height='35.35px' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-american-express.jpg' width='83%' height='35.35px' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-rupay.jpg' width='83%' height='35.35px' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-dinners-club.jpg' width='83%' height='35.35px' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-wallet.jpg' width='83%' height='35.35px' alt='' />
                                </Grid>
                                <Grid lg={1.4} md={1.4} sm={1.4}>
                                    <img src='https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg' width='83%' height='35.35px' alt='' />
                                </Grid>



                            </Grid>
                        </Grid>

                        <Grid lg={5.5} md={2} sm={2}>

                        </Grid>

                        <Grid lg={1.5} md={2} sm={2}>
                            {/* <img src="./assets/images/MicrosoftTeams-image (2).png" width={'100%'} height={'100%'} alt=""/> */}
                            <Typography fontSize={{ xs: '12px', lg: "16px", sm: "12px", md: "14px" }} color={'#121212'} fontFamily={'Manrope,sans-serif'}>100% Safe & Secure</Typography>
                            <Grid container marginTop={1}>
                                <Grid lg={6} md={6} sm={6}>
                                    <Link><img src='https://ii1.pepperfry.com//images/icon-ck-footer-verisign-21-2x.png' width='100%' height='100%' alt='' /></Link>
                                </Grid>
                                <Grid lg={6} md={6} sm={6}>
                                    <img src='https://ii1.pepperfry.com//images/icon-ck-footer-pci-21-2x.png' width='100%' height='100%' alt='' />
                                </Grid>




                            </Grid>
                        </Grid>





                    </Grid>






                </Grid>

            </Grid>


        </>
    )
}

export default Cartfooter;
