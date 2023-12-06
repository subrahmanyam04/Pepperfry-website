import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Homeinfordata = () => {
    return (
        <Box sx={{ flexGrow: 1 }} marginTop={'30px'} marginBottom={'20px'}>
            <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ xs: 12, sm: 12, md: 10, lg: 12 }} justifyContent={'center'}  >

                {/* grid one */}

                <Grid item xs={4} sm={4} md={3} lg={3}  >
                    <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} justifyContent={{ xs: "center" }} >

                        <Grid item lg={1} md={2.3} sm={2} >
                            <img src='https://ii1.pepperfry.com/assets/w22-delivery-usp-icon.svg' alt='' />
                        </Grid>
                        <Grid item lg={7.5} md={7} sm={9.5}>
                            <Typography marginTop={{ xs: 0, lg: 2, sm: 2, md: 2 }} color={'#5B5B5B'} fontSize={{ xs: '12px', lg: "14px", sm: "14px", md: "14px" }} fontFamily={'Manrope,sans-serif'} textAlign={{ xs: "center" }}>10 Million Happy Deliveries</Typography>
                        </Grid>


                    </Grid>
                </Grid>

                {/* grid 2 */}

                <Grid item xs={4} sm={4} md={3} lg={3}  >
                    <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} justifyContent={{ xs: "center" }}>

                        <Grid item lg={1} md={2.3} sm={2} >
                            <img src="https://ii1.pepperfry.com/assets/w22-studio-usp-icon.svg" alt='' />
                        </Grid>
                        <Grid item lg={8.7} md={7} sm={9.5}>
                            <Typography marginTop={{ xs: 0, lg: 2.5, sm: 2, md: 2 }} color={'#5B5B5B'} fontSize={{ xs: '12px', lg: "14px", sm: "14px", md: "14px" }} fontFamily={'Manrope,sans-serif'} textAlign={{ xs: "center" }}>200+ Studios Across 100+ Cities</Typography>
                        </Grid>


                    </Grid>
                </Grid>

                {/* grid 3 */}


                <Grid item xs={4} sm={4} md={3} lg={3} >
                    <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} justifyContent={{ xs: "center" }}>

                        <Grid item lg={1} md={2.3} sm={2} >
                            <img src='https://ii1.pepperfry.com/assets/w22-return-usp-icon.svg ' alt='' />
                        </Grid>
                        <Grid item lg={7.5} md={7} sm={9.5}>
                            <Typography marginTop={{ xs: 0, lg: 2.5, sm: 2, md: 2 }} color={'#5B5B5B'} fontSize={{ xs: '12px', lg: "14px", sm: "14px", md: "14px" }} fontFamily={'Manrope,sans-serif'} textAlign={{ xs: "center" }}>7 Day Easy Return Policy</Typography>
                        </Grid>


                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
}

export default Homeinfordata;
