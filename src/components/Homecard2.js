import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/joy/Card';

import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import { FavoriteBorder } from '@mui/icons-material';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Homecard2 = () => {

    const data = [
        {
            img: "https://ii3.pepperfry.com/media/catalog/product/s/u/494x544/suveharts-wall-hangings---door-hanging--decorative-items-for-home---home-decor-items---for-office----6tft4r.jpg"
        },
        {
            img: "https://ii2.pepperfry.com/media/catalog/product/y/e/494x544/yellow-traditional-120-tc-100--cotton-queen-bedsheet-with-2-pillow-covers-yellow-traditional-120-tc--x6mn2l.jpg"
        },
        {
            img: "https://ii2.pepperfry.com/media/catalog/product/e/c/494x544/eco-star--900ml-leak-proof--sipper-eco-star--900ml-leak-proof--sipper-mq7wpk.jpg"
        },
        {
            img: "https://ii1.pepperfry.com/media/catalog/product/s/e/494x544/set-of-5-geometric-pattern-jute-16x16-cushion-covers-by-romee-set-of-5-geometric-pattern-jute-16x16--g0bqsf.jpg"
        },
        {
            img: "https://ii1.pepperfry.com/media/catalog/product/m/u/494x544/multicolour-5-mtrs--50-led--usb-operated-led-string-light-multicolour-5-mtrs--50-led--usb-operated-l-kbgukq.jpg"
        },
        {
            img: "https://ii1.pepperfry.com/media/catalog/product/s/n/494x544/snake-natural-plant-in-white-self-watering-plastic-pot-by-ugaoo-snake-natural-plant-in-white-self-wa-yyl6lf.jpg"
        },


    ]


    return (
        <>
            <Typography textAlign={'center'} textColor={'#9d6a37'} fontSize={'1.25rem'} sx={{ marginTop: "30px" }}>
                <b>Shop What the Fry Deals</b>

            </Typography>
            <Typography textAlign={'center'} textColor={'#D8232A'} fontSize={'12px'}>
                <IconButton
                    aria-label="Like minimal photography"
                    size="sm"
                    variant="soft"
                    color="#d8232a"
                    sx={{
                        backgroundColor: "white",
                        color: "#d8232a"

                    }}
                >
                    <AccessAlarmsIcon />Ending in 6h : 22m : 49s
                </IconButton>

            </Typography>
            <Grid container sx={{ justifyContent: "center", marginTop: "5px" }} >

                <Grid item xs={11}  >

                    <Grid container spacing={{ xs: 1, md: 1, lg: 1 }} columns={{ xs: 2, sm: 12, md: 12, lg: "6" }} >

                        {data.map((cardimg) => (

                            <Grid item xs={1} sm={2} md={2} lg={1} >
                                <Card invertedColors={false} orientation="vertical" size="sm" variant="plain" >
                                    <CardOverflow>
                                        <img src={cardimg.img} alt="" width='100%' height={'100%'} />
                                        <IconButton
                                            aria-label="Like minimal photography"
                                            size="sm"
                                            variant="soft"
                                            color="neutral"
                                            sx={{
                                                backgroundColor: "white",
                                                opacity: "0.8",
                                                position: 'absolute',
                                                zIndex: 2,
                                                borderRadius: '50%',
                                                right: '1rem',
                                                bottom: 0,
                                                transform: 'translateY(40%)',
                                            }}
                                        >
                                            <FavoriteBorder />
                                        </IconButton>
                                    </CardOverflow>

                                    <CardOverflow  >
                                        <CardContent orientation="horizontal" variant="soft" >
                                            <Grid >
                                                <Grid xs >
                                                    <Typography variant="body1" textColor="#121212" fontSize={{ xs: '10px', sm: "12px", md: '12px', lg: "12px" }} fontFamily={'Manrope,sans-serif'} >
                                                        Multicolour Engineered Wood...

                                                    </Typography>
                                                </Grid>
                                                <Grid xs>
                                                    <Typography level="body-xs" fontWeight="md" textColor="#121212" fontSize={'14px'} fontFamily={'Manrope,sans-serif'}>
                                                        <span><b>₹119 </b><strike style={{ color: "#6B6B6B" }}> ₹399</strike></span><span style={{ color: "#67ad5b" }}> <b>70%</b></span>
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
        </>
    );
}

export default Homecard2;
