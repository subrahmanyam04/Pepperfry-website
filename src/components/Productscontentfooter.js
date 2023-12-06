import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";


const Productscontentfooter = () => {
    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "#848484",
        // fontWeight: "700",
        lineHeight: "28px",
        fontFamily: "Manrope,sans-serif"
    }));


    const contdata = [
        {
            tit: "Sofas"
        },
        {
            tit: "Sofa Sets"
        },
        {
            tit: "3 Seater Sofas"
        },
        {
            tit: "Sectional Sofas"
        },
        {
            tit: "Sofa Cum Beds"
        },
        {
            tit: "Recliners "
        },
        {
            tit: "Wing Chairs"
        },
        {
            tit: "Lounge Chairs"
        },
        {
            tit: "Chairs"
        },
    ]

    return (

        <Grid container sx={{ justifyContent: "center" }} lg={12} md={12} sm={12} marginBottom={10}>
            <Grid lg={10.5} md={11} sm={11.5} xs={11.8} >
                <Grid container lg={12} sm={12} md={12} xs={12}>
                    <Grid lg={2.3} sm={4} md={3} xs={12}>
                        <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "16px", md: "16px", sm: "16px", xs: "16px" }} color={'#121212'}><b>Explore More From Furniture</b> </Typography>
                    </Grid>
                    <Grid lg={5.7} md={4.8} sm={4}>

                    </Grid>
                    <Grid lg={2.5} md={2.5} sm={3} display={{ xs: "none", sm: "none", md: "block" }}>
                        <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "16px", md: "16px", sm: "16px", xs: "12px" }} color={'#121212'}><b>From popular brands</b> </Typography>
                    </Grid>

                </Grid>


                <Grid container lg={12} md={12} sm={12} xs={12} marginTop={1}>
                    <Grid lg={2} md={2} sm={3} xs={4} >


                        {contdata.map((data) => (
                            <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>{data.tit} </LargeText>
                        ))}


{/* 
                        <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>Sofa Sets </LargeText>
                        <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>3 Seater Sofas</LargeText>
                        <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>Sectional Sofas </LargeText>
                        <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>Sofa Cum Beds</LargeText>
                        <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>Recliners  </LargeText>
                        <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>Wing Chairs  </LargeText>
                        <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>Lounge Chairs  </LargeText>
                        <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>Chairs  </LargeText> */}


                    </Grid>
                    <Grid lg={2} md={2} sm={3} xs={4} >

                    {contdata.map((data) => (
                            <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>{data.tit} </LargeText>
                        ))}

                    </Grid>
                    <Grid lg={2} md={2} sm={3} xs={4} >
                    {contdata.map((data) => (
                            <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>{data.tit} </LargeText>
                        ))}

                    </Grid>
                    <Grid lg={2} md={1.8} sm={3} xs={4} marginTop={{ xs: "40px", sm: "10px", md: "0px", lg: "0px" }}>
                    {contdata.map((data) => (
                            <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>{data.tit} </LargeText>
                        ))}

                    </Grid>
                    <Grid lg={2.5} md={2.5} sm={4} marginTop={{ xs: "15px", sm: "10px", md: "0px", lg: "0px" }}>
                        <Typography fontFamily={'Manrope,sans-serif'} fontSize={{ lg: "16px", md: "16px", sm: "16px", xs: "16px" }} color={'#121212'} display={{ xs: "block", sm: "block", md: "none" }}><b>From popular brands</b> </Typography>

                        {contdata.map((data) => (
                            <LargeText fontSize={{ xs: '12px', sm: "14px", md: "14px", lg: "14px" }}>{data.tit} </LargeText>
                        ))}

                    </Grid>

                </Grid>

            </Grid>

        </Grid>
    )
}

export default Productscontentfooter;