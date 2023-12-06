
import * as React from 'react';

import Card from '@mui/joy/Card';

import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/joy/Typography';



const Homecard6 = () => {


    const data = [
        {
            img: "https://ii1.pepperfry.com/assets/ca53eca6-439a-4027-b03d-940cbc17c519.jpg",
            title: " The Avilys Collection "
        },
        {
            img: "https://ii1.pepperfry.com/assets/d2a7c7c7-75c6-436a-82f9-2e92859bea75.jpg",
            title: " Artisan By Spacewood "
        },
        {
            img: "https://ii1.pepperfry.com/assets/f15a591d-9184-40fa-90e2-e9b96f9d918e.jpg",
            title: " The Gafieira Collection "
        }

    ]


    return (
        <>
            <Typography textAlign={'center'} textColor={'#9d6a37'} fontSize={'1.25rem'} sx={{ marginTop: "40px", marginBottom: "20px" }}>
                <b> Check Out These Collections </b>

            </Typography>

            <Grid container sx={{ justifyContent: "center", marginTop: "40px", marginBottom: "20px" }} >

                <Grid item xs={11}  >

                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 3, md: 12 }} >

                        {data.map((cardimg) => (

                            <Grid xs={2} sm={1} md={4} >
                                <Card invertedColors={false} orientation="vertical" size="sm" variant="plain" >

                                    <CardOverflow>
                                        <img src={cardimg.img} alt="" width='100%' height='100%' />
                                    </CardOverflow>
                                    <CardContent orientation="horizontal" variant="soft" >
                                        <Grid >
                                            <Grid xs >
                                                <Typography level="body-xs" fontWeight="md" textColor="#5B5B5B" fontSize={{ xs: "14px", sm: "14px", md: "14px", lg: "16px" }} fontFamily={'Manrope,sans-serif'}>
                                                    <strong>{cardimg.title}</strong>
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
            <hr />
        </>
    );
}

export default Homecard6;
