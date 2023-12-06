import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';

import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Grid, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

function CustomLink({ to, icon, text }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (


        <Link to={to} style={{ textDecoration: 'none', color: isActive ? '#FF7035' : '#121212' }}>
           
                    <IconButton aria-label="open drawer" >
                        {icon}
                    </IconButton>
              
            {/* <Grid sx={{justifyContent:'center',alignItems:"center"}} > */}
            <Typography fontSize={{ xs: '12px' }}  fontFamily={'Manrope, sans-serif'} color={isActive ? '#FF7035' : '#121212'} noWrap>
                {text}
            </Typography>
            {/* </Grid> */}
        </Link>



    );
}


const Mobilefooter = () => {
    return (
        <Box display={{ xs: 'block', sm: 'none', lg: 'none', md: 'none' }} >

            <CssBaseline />

            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: "white" }}>
                <Toolbar>

                    <Grid container gap={1} columns={{ xs: 12 }} justify="center" alignItems="center">
                        <Grid xs={2} >
                            <CustomLink to="/home" icon={<HomeOutlinedIcon />} text="Home" />
                        </Grid>
                        <Grid xs={2} >
                            <CustomLink to="/account" icon={<PersonOutlineOutlinedIcon />} text="My Account" />
                        </Grid>
                        <Grid xs={2}>
                            <CustomLink to="/gift-cards" icon={<CardGiftcardOutlinedIcon />} text="Gift cards" />
                        </Grid>
                        <Grid xs={2}>
                            <CustomLink to="/studios" icon={<PlaceOutlinedIcon />} text="Studios" />
                        </Grid>
                        <Grid xs={2}>
                            <CustomLink to="/categories" icon={<CategoryOutlinedIcon />} text="Categories" />
                        </Grid>


                    </Grid>

                </Toolbar>
            </AppBar>

        </Box>
    );
}

export default Mobilefooter;