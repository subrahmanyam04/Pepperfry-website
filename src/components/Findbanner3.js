import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import theme from "./Theme";
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Findbanner3 = () => {

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }} >

                <Grid container  marginTop={{ lg: '30px', md: "20px" ,sm:"20px",xs:"30px"}} justifyContent={'center'} >
                    <Grid lg={9.5} md={11} sm={11}>

                        <Grid container columns={{ xs: 6, md: 12, sm: 12, lg: 12 }}  >

                            <Grid item lg={5.9} md={5.9} sm={5.9} marginBottom={{lg:5,md:5,sm:5,xs:0}} >
                                <img src='https://cdn4.singleinterface.com/files/banner_images/165131/6124_1677561097_WEAREHAPPYDESKTOP.jpg' alt='...' style={{ width: '100%', height: '100%' }} />
                            </Grid>
                            <Grid lg={0.2} md={0.2} sm={0.2} ></Grid>
                            <Grid item lg={5.9} md={5.9} sm={5.9} marginTop={{xs:4 ,lg:0 , sm:0 , md:0}}  marginBottom={5}>
                                <img src='https://cdn4.singleinterface.com/files/banner_images/165131/2979_1677561169_APPLYNOWDESKTOP.jpg' alt='...' style={{ width: '100%', height: '100%' }} />
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default Findbanner3;