import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/joy/Typography';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Homebanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >

      <Typography textAlign={'center'} textColor={'#9d6a37'} fontSize={'1.25rem'} sx={{ marginTop: "50px" }}>
        <b>Deal Maange More</b>

      </Typography>
      <Grid container sx={{ justifyContent: "center" }}>


        <Grid item xs={11}  >

          <img src='https://ii1.pepperfry.com/assets/14c8b11e-42cf-4024-bca0-541c56284604.jpg' alt='...' style={{ width: '100%', height: '100%', marginTop: "15px" }} />
        </Grid>

      </Grid>
    </Box>
  )
}

export default Homebanner;