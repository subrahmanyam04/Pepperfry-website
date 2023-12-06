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

const Findbanner2 = () => {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} >



        <Grid container sx={{ justifyContent: "center" }} marginTop={{ lg: '30px', md: "20px" }}>

          <Grid item lg={9.5} md={11} sm={11} xs={12} >
            <img src='https://cdn4.singleinterface.com/files/banner_images/165131/7289_1677561810_Modulardesktop.jpg' alt='...' style={{ width: '100%', height: '100%' }} />
          </Grid>

        </Grid>


      </Box>
    </ThemeProvider>
  )
}

export default Findbanner2;