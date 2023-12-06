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

const Homecard3 = () => {


    const data = [
        {
            img: "https://ii1.pepperfry.com/assets/c113e98e-600c-4e7c-98fc-12d82d1df57a.jpg"
        },
        {
            img: "https://ii1.pepperfry.com/assets/dcf1df8c-2a62-49c6-a54c-00cc8a9be382.jpg"
        },
        {
            img: "https://ii1.pepperfry.com/assets/ee34797b-bedc-4cc2-a016-cae67e08ae0f.jpg"
        },
        {
            img: "https://ii1.pepperfry.com/assets/3206ba94-8290-4c87-b1da-a3ebad770214.jpg"
        },
        {
            img: "https://ii1.pepperfry.com/assets/4c3298d5-3115-4c9f-92df-967f0214e0b9.jpg"
        },
        {
            img: "https://ii1.pepperfry.com/assets/e7488fda-6dce-41b2-98a1-3d5318d58c01.jpg"
        }

    ]


    return (


        <>
            <Typography textAlign={'center'} textColor={'#9d6a37'} fontSize={'1.25rem'} sx={{ marginTop: "75px", marginBottom: "20px" }}>
                <b>Brand Bazaar</b>

            </Typography>
            <Grid container sx={{ justifyContent: "center" }} >

                <Grid item xs={11}  >

                    <Grid container spacing={{ xs: 1, md: 1, lg: 1 }} columns={{ xs: 2, sm: 2, md: 2, lg: "3" }} >

                        {data.map((cardimg) => (

                            <Grid item xs={1} sm={1} md={1} lg={1} >
                                <Card invertedColors={false} orientation="vertical" size="sm" variant="plain" >
                                    <CardOverflow>
                                        <img src={cardimg.img} alt="" width='100%' height={'100%'} />
                                    </CardOverflow>
                                    <CardContent orientation="horizontal" variant="soft" >
                                        <Grid >
                                            <Grid xs >
                                                <Typography level="body-xs" fontWeight="md" textColor="#5B5B5B" fontSize={{ xs: "10px", sm: "14px", md: "16px", lg: "16px" }} fontFamily={'Manrope,sans-serif'} >
                                                    <b>Use Coupon: EXTRA5</b>
                                                </Typography>
                                            </Grid>
                                            <Grid xs>
                                                <Typography level="body-xs" fontWeight="md" textColor="#848484" fontSize={{ xs: "7px", sm: "12px", md: "12px", lg: "12px" }} fontFamily={'Manrope,sans-serif'}>
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

export default Homecard3;
