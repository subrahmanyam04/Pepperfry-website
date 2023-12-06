import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import theme from "./Theme";
import {  ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';



// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Findbanner = () => {
  
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }} >

      <Grid container justifyContent={{ lg: 'center', md: 'center', sm: 'center' }} marginTop={'10px'}>
        <Grid xs={4} display={{ xs: 'block', sm: "none" }}></Grid>

        <Grid item lg={1} md={1.3} sm={1.8} xs={3}>
         <a href='/'>
          <img src='./assets/images/pepperfry-logo-1024x369-1024x369.png' alt='...' width={'135%'} height={'100%'} ></img>
          </a>
        </Grid>

      </Grid>

      <Grid container sx={{ justifyContent: "center" }}>

        <Grid item lg={9.5} md={11} sm={11} xs={12}>
          <img src='https://cdn4.singleinterface.com/files/banner_images/165131/2869_1684477269_locatorbannerdesktop.jpg' alt='...' style={{ width: '100%', height: '88%', marginTop: "25px" }} />
        </Grid>

      </Grid>

      <Grid container  marginTop={'25px'}>

        <Grid item lg={12} md={11} sm={11} xs={12} >
         <Typography textAlign={'center'} color={'#9D6A37'} fontSize={{lg:'24px',md:"24px",sm:'24px',xs:"18px"}} fontFamily={'Poppins'}> <b>Pepperfry Studio In Mumbai, Maharashtra</b> </Typography>
         {/* <h2 style={{color:"#9D6A37", fontFamily:"Poppins",textAlign:"center"}}> Pepperfry Studio In Mumbai, Maharashtra </h2> */}
         <Typography textAlign={'center'} color={'#9D6A37'} fontSize={{lg:'24px',md:"24px",sm:'24px',xs:"18px"}} fontFamily={'Poppins'}><b>Walk-In To A Studio</b></Typography>
         <Typography textAlign={'center'} color={'#848484'} fontSize={{lg:'14px',md:"14px",sm:'14px',xs:"14px"}} fontFamily={'Manrope-Regular'} fontWeight={500}> All 7 Days a Week - 11 AM to 9 PM </Typography>
         <Grid container sx={{ justifyContent: "center",marginTop:"8px" }}  >
         <Grid lg={2} md={3}  sx={{backgroundColor:"#eedece"}}  display={{xs:'none',sm:"none",md:"block",lg:"block"}}>
         <Typography  textAlign={'center'} padding={0.3} color={'#9D6A37'} fontSize={{lg:'18px',md:"18px"}} fontFamily={'Manrope-Regular'}><b>200+ Studios in 100+ Cities </b></Typography>
         </Grid>
         </Grid>
        </Grid>

      </Grid>
    </Box>
    </ThemeProvider>
  )
}

export default Findbanner;