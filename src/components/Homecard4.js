import * as React from 'react';

import Card from '@mui/joy/Card';

import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/joy/Typography';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Homecard4 = () => {


    const data = [
        {
            img: "https://ii1.pepperfry.com/assets/60a3553f-dc64-4040-b02e-5e218c6e9001.jpg",
            title: " The Aakrit Collection "
        },
        {
            img: "https://ii1.pepperfry.com/assets/695fd4f7-b166-4180-8e33-1c941993211f.jpg",
            title: " Ornate Carpets "
        },
        {
            img: "https://ii1.pepperfry.com/assets/d6c0aa46-c674-48d6-9652-16e6d76046bf.jpg",
            title: " Trendsetters by Orange Tree "
        },
        {
            img: "https://ii1.pepperfry.com/assets/11a3d1ce-35c9-410c-9fc6-150db5523a4f.jpg",
            title: " Style Setting Dinnerware "
        },


    ]


    return (


        <>
            <Typography textAlign={'center'} textColor={'#9d6a37'} fontSize={'1.25rem'} sx={{ marginTop: "45px", marginBottom: "20px" }}>
                <b>Discover Our Newest Arrivals</b>

            </Typography>
            <Grid container sx={{ justifyContent: "center" }} >

                <Grid item xs={11}  >

                    <Grid container spacing={{ xs: 0.5, md: 0.5, lg: 0.5 }} columns={{ xs: 2, sm: 2, md: 2, lg: "4" }} >

                        {data.map((cardimg) => (

                            <Grid item xs={1} sm={1} md={1} lg={1} >
                                <Card invertedColors={false} orientation="vertical" size="sm" variant="plain" >
                                    <CardOverflow>
                                        <img src={cardimg.img} alt="" width='100%' height={'100%'} />
                                    </CardOverflow>
                                    <CardContent orientation="horizontal" variant="soft" >
                                        <Grid >
                                            <Grid xs >
                                                <Typography level="body-xs" fontWeight="md" textColor="#5B5B5B" fontSize={{ xs: "14px", sm: "14px", md: "14px", lg: "16px" }} fontFamily={'Manrope,sans-serif'}>
                                                    <b>{cardimg.title}</b>
                                                </Typography>
                                            </Grid>
                                            <Grid xs>
                                                <Typography level="body-xs" fontWeight="md" textColor="#848484" fontSize={{ xs: "10px", sm: "11px", md: "12px", lg: "12px" }} fontFamily={'Manrope,sans-serif'}>
                                                    100+ Products in Bean Bags & Stools
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>

                                </Card>
                            </Grid>
                        )


                        )}

                    </Grid>


                </Grid>

            </Grid>
        </>
    );
}

export default Homecard4;
