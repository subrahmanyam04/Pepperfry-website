import { Grid } from "@mui/material";
import React from "react";
import Typography from '@mui/joy/Typography';

import Findconsultation from "./Findconsultation";


const Findbrands = () => {

    const logo = [
        {
            logourl1: "https://cdn4.singleinterface.com/files/banner_images/165131/7548_1677560210_86481672814929home.png",

            logourl2: "https://cdn4.singleinterface.com/files/banner_images/165131/1347_1677560259_22421672814929hometown.png",

            logourl3: "https://cdn4.singleinterface.com/files/banner_images/165131/860_1677560315_28321672814925chumbak.png",
        },
        {
            logourl1: "https://cdn4.singleinterface.com/files/banner_images/165131/5727_1677560395_29871672814926durian.png",
            value: "25px",

            logourl2: "https://cdn4.singleinterface.com/files/banner_images/165131/8880_1677560457_88211672814931wakefit.png",
            value: "5px",

            logourl3: "https://cdn4.singleinterface.com/files/banner_images/165131/957_1677560513_32811672817322godrej.png",
            value: "5px",
        },
        {
            logourl1: "https://cdn4.singleinterface.com/files/banner_images/165131/3397_1677560759_23981672817363nilkamal.png",

            logourl2: "https://cdn4.singleinterface.com/files/banner_images/165131/169_1677560783_19431672814929Jaquar.png",

            logourl3: "https://cdn4.singleinterface.com/files/banner_images/165131/4827_1677560791_15011672814931spacewood.png",
        },
    ]





    return (

        <Grid container sx={{ justifyContent: "center" }}>
            <Grid lg={9.7} md={11} sm={11} xs={11.5}>
                <Grid container marginTop={8} columns={{ xs: 12, sm: 12, md: 12, lg: "12" }} marginBottom={5}>

                    <Grid lg={6} sm={6} md={6} xs={12} border={'1px solid black'} display={{ lg: 'none', md: 'none', sm: 'none', xs: 'none' }}>
                        1
                    </Grid>



                    <Grid lg={8} sm={12} md={8} xs={12} display={{ lg: 'block', md: 'block', sm: 'block', xs: 'none' }}>

                        <Grid lg={10.5} md={11} sm={12} xs={12}>
                            <Typography textAlign={'center'} textColor={'#9d6a37'} fontWeight={{ sm: "600px" }} fontSize={{ xs: "18px", sm: "24px", md: "24px", lg: "24px" }} fontFamily={'Poppins'} >
                                <b>All Furniture & Home Category Brands In India Under One Roof</b>

                            </Typography>
                        </Grid>

                        <Grid lg={11} md={11.5}>
                            <Typography textAlign={'center'} textColor={'#848484'} fontSize={{ md: "14px", lg: "16px" }} fontFamily={'Manrope-Regular'} >
                                Choose From 1 Lakh + Options

                            </Typography>
                        </Grid>

                        <Grid container sx={{ justifyContent: 'center' }} >
                            <Grid container lg={9} md={11} sm={10} xs={10} marginTop={{ lg: 5, xs: 2, sm: 4, md: 6 }} columnSpacing={{ lg: 10 }} gap={{ xs: 3, md: 7, lg: 9, sm: 8 }}>

                                {logo.map((blueprint) => (


                                    <>

                                        <Grid lg={3} xs={3} >
                                            <img src={blueprint.logourl1} alt="" width={'100%'} height={'100%'} />
                                        </Grid>
                                        <Grid lg={3} xs={3} >
                                            <img src={blueprint.logourl2} alt="" width={'100%'} height={'100%'} />
                                        </Grid>
                                        <Grid lg={3} xs={3}>
                                            <img src={blueprint.logourl3} alt="" width={'100%'} height={'100%'} />
                                        </Grid>
                                    </>

                                ))}
                            </Grid>
                        </Grid>




                    </Grid>

                    <Grid lg={4} sm={12} md={4} xs={12} marginTop={{ sm: '30px', lg: "0", md: '0' }} display={{ lg: 'block', md: "block", sm: "block", xs: 'block' }}>
                        <Findconsultation />
                    </Grid>


                    <Grid lg={6} sm={6} md={6} xs={12} marginTop={{ lg: "0", sm: "0", md: "0", xs: "30px" }} display={{ lg: 'none', md: "none", sm: "none", xs: 'block' }}>

                        <Grid lg={10.5} md={11} sm={12} xs={12}>
                            <Typography textAlign={'center'} textColor={'#9d6a37'} fontWeight={{ sm: "600px" }} fontSize={{ xs: "18px", sm: "24px", md: "24px", lg: "24px" }} fontFamily={'Poppins'} >
                                <b>All Furniture & Home Category Brands In India Under One Roof</b>

                            </Typography>
                        </Grid>

                        <Grid lg={11} md={11.5}>
                            <Typography textAlign={'center'} textColor={'#848484'} fontSize={{ md: "14px", lg: "16px" }} fontFamily={'Manrope-Regular'} >
                                Choose From 1 Lakh + Options

                            </Typography>
                        </Grid>

                        <Grid container sx={{ justifyContent: 'center' }} >
                            <Grid container lg={9} md={11} sm={10} xs={10} marginTop={{ lg: 5, xs: 4, sm: 4 }} columnSpacing={{ lg: 10, }} gap={{ xs: 3.5, md: 5, lg: 9, sm: 8 }}>

                                {logo.map((blueprint) => (


                                    <>

                                        <Grid lg={3} xs={3} >
                                            <img src={blueprint.logourl1} alt="" width={'100%'} height={'100%'} />
                                        </Grid>
                                        <Grid lg={3} xs={3} >
                                            <img src={blueprint.logourl2} alt="" width={'100%'} height={'100%'} />
                                        </Grid>
                                        <Grid lg={3} xs={3}>
                                            <img src={blueprint.logourl3} alt="" width={'100%'} height={'100%'} />
                                        </Grid>

                                    </>
                                ))}
                            </Grid>
                        </Grid>




                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    )
}

export default Findbrands;