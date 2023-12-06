
import * as React from 'react';

import Card from '@mui/joy/Card';

import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/joy/Typography';



const Homecard1 = () => {


    const data = [
        {
            img: "https://ii1.pepperfry.com/assets/7d83b209-5e06-4807-b11f-5cacb8272b4c.jpg"
        },
        {
            img: "https://ii1.pepperfry.com/assets/2cb3c645-90ba-4b02-a0e2-736564ca049a.png"
        },
        {
            img: "https://ii1.pepperfry.com/assets/a6abb7d7-816f-4f77-8929-4c32a20f4d90.jpg"
        }

    ]


    return (

        <Grid container sx={{ justifyContent: "center", marginTop: "40px" }} >

            <Grid item xs={11}  >

                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 3, md: 12 }} >

                    {data.map((cardimg) => (

                        <Grid xs={2} sm={1} md={4} >
                            <Card invertedColors={false} orientation="vertical" size="sm" variant="plain" >

                                <CardOverflow>
                                    <img src={cardimg.img} alt="" width='100%' height='100%' />
                                </CardOverflow>
                            </Card>
                            <Card invertedColors={false} orientation="vertical" size="sm" variant="plain" sx={{ marginTop: "10px" }} >
                                <CardOverflow  >
                                    <CardContent orientation="horizontal" variant="soft" sx={{ bgcolor: '#FFF1EB', justifyContent: "center" }}>
                                        <Grid >
                                            <Grid xs >
                                                <Typography level="body-xs" fontWeight="md" textColor="#121212" textAlign={'center'} fontSize={'14px'} fontFamily={'Manrope,sans-serif'} ><b>
                                                    Additional Discount</b><span style={{ color: '#FF7035' }}><b> Upto Rs. 10,000/-</b></span>

                                                </Typography>
                                            </Grid>
                                            <Grid xs>
                                                <Typography level="body-xs" fontWeight="md" textColor="#121212" textAlign={'center'} fontSize={'14px'} fontFamily={'Manrope,sans-serif'} textOverflow={'ellipsis'}>
                                                    Available at Your Nearest Studio
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardOverflow>
                            </Card>
                        </Grid>
                    )


                    )}

                </Grid>


            </Grid>

        </Grid>

    );
}

export default Homecard1;
