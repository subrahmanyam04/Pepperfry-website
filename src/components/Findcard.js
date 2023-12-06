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

const Findcard = () => {


    const data = [
        {
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/3718_1677562452_30191677395693Image1.jpg",
            title: " Touch & Feel The Products before You Buy Them"
        },
        {
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/9800_1677562568_27611677395694Image2.jpg",
            title: " Free Consultation From Interior Design Experts"
        },
        {
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/6511_1677562605_11251677395694Image3.jpg",
            title: " Free Home Visits Based On Your Needs "
        },
        {
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/1236_1677562649_20391677395695Image4.jpg",
            title: " One Stop Shop For Your Dream Home "
        },


    ]


    return (


        <>
            <Typography textAlign={'center'} textColor={'#9d6a37'} fontSize={{xs:"19px",sm:"24px",md:"24px",lg:"24px"}} fontFamily={'Poppins'} sx={{ marginTop: "0px" }}>
                <b>Why Visit Us?</b>

            </Typography>
            <Typography textAlign={'center'} textColor={'#848484'} fontSize={'16px'} fontFamily={'Manrope-Regular'}  marginBottom={2}> 
                Come Say Hi, No Pressure To Buy

            </Typography>
            <Grid container sx={{ justifyContent: "center" }} >

                <Grid item lg={9.8} sm={11.3} md={11.3} >

                    <Grid container spacing={{ xs: 0.5, md: 0.5, lg: 0.5 }} columns={{ xs: 2, sm: 2, md: 4, lg: "4" }} >

                        {data.map((cardimg) => (

                            <Grid item xs={1} sm={1} md={1} lg={1} >
                                <Card invertedColors={false} orientation="vertical" size="sm" variant="plain" >
                                    <CardOverflow>
                                        <img src={cardimg.img} alt="" width='100%' height={'100%'} />
                                    </CardOverflow>
                                    <CardContent orientation="horizontal" variant="soft" >
                                        <Grid >
                                            <Grid xs >
                                                <Typography   textColor="#5B5B5B" fontSize={{ xs: "13.8px", sm: "13.8px", md: "13.8px", lg: "13.8px" }} fontFamily={'Poppins'}>
                                                    <b>{cardimg.title}</b>
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

export default Findcard;
