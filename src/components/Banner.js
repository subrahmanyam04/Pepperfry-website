import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Banner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container sx={{ justifyContent: "center" }}>

        <Grid item xs={11}  >
          <img src='https://ii1.pepperfry.com/assets/cda93190-5a85-4629-8438-ca6f405ff913.jpg' alt='...' style={{ width: '100%', height: '100%', marginTop: "25px" }} />
        </Grid>

      </Grid>
    </Box>
  )
}

export default Banner;