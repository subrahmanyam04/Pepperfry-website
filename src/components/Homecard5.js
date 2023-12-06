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

const Homecard5 = () => {


    const data = [
        {
            img: "https://ii1.pepperfry.com/assets/8ebdc2dd-eeb0-4e66-bf36-fcea0912af7a.jpg",
            title: " Low Motion Transfer Mattresses "
        },
        {
            img: "https://ii1.pepperfry.com/assets/7aa095a7-9199-4e7d-bbf0-ce02a95be86d.jpg",
            title: " Celebration Ready Wall Decor "
        },
        {
            img: "https://ii1.pepperfry.com/assets/b3f3e0f6-fe29-4819-82b4-d05ebd741f32.jpg",
            title: " Comfortcore Recliners "
        },
        {
            img: "https://ii1.pepperfry.com/assets/1ee8c37a-f488-4083-9650-a325f3061f8e.jpg",
            title: " Dome Hanging Lights "
        },
        {
            img: "https://ii1.pepperfry.com/assets/8c91a73b-527f-4533-99e8-d002bf6b9351.jpg",
            title: " The Louis Collection "
        },
        {
            img: "https://ii1.pepperfry.com/assets/a5a1d593-57a7-4dec-806b-db646bc1b31b.jpg",
            title: " Festive Flair Bedding Sets "
        }

    ]


    return (


        <>
            <Typography textAlign={'center'} textColor={'#9d6a37'} fontSize={'1.25rem'} sx={{ marginTop: "45px", marginBottom: "20px" }}>
                <b>Follow Home Interior Trends</b>

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
                                                <Typography level="body-xs" fontWeight="md" textColor="#5B5B5B" fontSize={{ xs: "14px", sm: "14px", md: "14px", lg: "16px" }} fontFamily={'Manrope,sans-serif'}>
                                                    {cardimg.title}
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

export default Homecard5;
