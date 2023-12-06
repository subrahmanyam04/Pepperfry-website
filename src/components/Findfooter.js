import { Divider, Grid } from "@mui/material";
import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Icon } from '@iconify/react';

const Findfooter = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [

    <Link underline="hover" key="1" color="#000000" sx={{
      textDecoration: "none",
      '&:hover': {
        color: '#FF7035',
        textDecoration: 'none'
      },
    }} href="/" onClick={handleClick} fontSize={'16px'} fontFamily={'Manrope-Regular'}>
      Studio Pepperfry
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#000000"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      fontSize={'16px'}
      fontFamily={'Manrope-Regular'}
      sx={{
        textDecoration: "none",
        '&:hover': {
          color: '#FF7035',
          textDecoration: 'none'
        },
      }}
    >
      Furniture stores in Maharashtra
    </Link>,
    <Typography key="3" color="#000000" fontSize={'16px'} fontFamily={'Manrope-Regular'} marginTop={{ xs: 1, lg: 0, md: 0, sm: 0 }}>
      Furniture stores in Mumbai
    </Typography>,
  ];
  return (
    <>
      <Divider />
      <Grid container sx={{ backgroundColor: "#f4f5f7" }}>

        <Grid lg={12} md={12}>
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid lg={9.5} md={11} sm={11} marginTop={{ xs: 3, lg: 5, md: 5, sm: 5 }}>
              <Stack spacing={2}>


                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </Grid>

            <Grid lg={9.5} md={11} sm={11} marginTop={1} marginBottom={3}>
              <div role="presentation" onClick={handleClick} >
                <Breadcrumbs aria-label="breadcrumb">
                  <Link sx={{
                    textDecoration: "none",
                    '&:hover': {
                      color: '#FF7035',
                      textDecoration: 'none'
                    },
                  }} color="#999797" href="/" fontSize={'16px'} fontFamily={'Manrope-Regular'} >
                    Furniture stores in Bandra East
                  </Link>
                  <Link
                    // underline="hover"
                    sx={{
                      textDecoration: "none",
                      '&:hover': {
                        color: '#FF7035',
                        textDecoration: 'none'
                      },
                    }}
                    color="#999797"
                    href="/material-ui/getting-started/installation/"
                    fontSize={'16px'} fontFamily={'Manrope-Regular'}
                  >
                    Furniture stores in Bhandup West
                  </Link>
                  <Link
                    sx={{
                      textDecoration: "none",
                      '&:hover': {
                        color: '#FF7035',
                        textDecoration: 'none'
                      },
                    }}
                    color="#999797"
                    href="/material-ui/getting-started/installation/"
                    fontSize={'16px'} fontFamily={'Manrope-Regular'}
                  >
                    Furniture stores in Borivali West
                  </Link>
                  <Link
                    sx={{
                      textDecoration: "none",
                      '&:hover': {
                        color: '#FF7035',
                        textDecoration: 'none'
                      },
                    }}
                    color="#999797"
                    href="/material-ui/react-breadcrumbs/"
                    fontSize={'16px'} fontFamily={'Manrope-Regular'}
                  >
                    Furniture stores in Juhu
                  </Link>
                  <Link
                    sx={{
                      textDecoration: "none",
                      '&:hover': {
                        color: '#FF7035',
                        textDecoration: 'none'
                      },
                    }}
                    color="#999797"
                    href="/material-ui/getting-started/installation/"
                    fontSize={'16px'} fontFamily={'Manrope-Regular'}
                  >Furniture stores in Lower Parel
                  </Link>
                  <Link
                    sx={{
                      textDecoration: "none",
                      // '&:hover': {
                      //   color: 'red',
                      //   textDecoration: 'none'
                      // },
                    }}
                    color="#FF7035"
                    href="/material-ui/getting-started/installation/"
                    fontSize={'16px'} fontFamily={'Manrope-Regular'}
                  >
                    view more
                  </Link>
                </Breadcrumbs>
              </div>
            </Grid>
          </Grid>

          <hr marginBottom={2} />

          <Grid container sx={{ justifyContent: 'center' }} marginTop={3}>
            <Grid lg={9.5} md={11} xs={9}>
              <Grid container >
                <Grid lg={3} md={4} sm={12} xs={12} justifyContent={{ xs: 'center', sm: 'center', lg: 'none', md: 'none' }} textAlign={{ lg: 'start', md: 'start', xs: 'center', sm: 'center' }}>
                  <Typography fontSize={{ lg: '16px', md: '14px' }} fontFamily={'Manrope-Regular'}>Pepperfry Private Limited. © 2022</Typography>
                </Grid>
                <Grid lg={3} md={2}></Grid>

                <Grid lg={2.5} sm={12} md={3} xs={12} marginTop={{ lg: 0, md: 0, sm: 2, xs: 1 }} marginBottom={3} textAlign={{ lg: 'start', md: 'start', xs: 'center', sm: 'center' }}>
                  <Link to='' sx={{ textDecoration: "none", cursor: 'pointer' }}> <Icon icon="entypo-social:facebook-with-circle" width="27" height="27" color="skyblue" /></Link>
                  <Link to='' sx={{ textDecoration: "none", cursor: 'pointer' }}> <Icon icon="formkit:twitter" color="skyblue" width="27" height="27" /></Link>
                  <Link to='' sx={{ textDecoration: "none", cursor: 'pointer' }}> <img src="./assets/images/pepper-removebg-preview.png" alt="" width="27" height="27" /></Link>
                  {/* <Link to='' sx={{textDecoration:"none",cursor:'pointer'}}> <img src="./assets/images/pepper-removebg-preview.png" width="27" height="27"/></Link> */}
                  <Link to='' sx={{ textDecoration: "none", cursor: 'pointer' }}> <Icon icon="skill-icons:instagram" color="skyblue" width="27" height="27" /></Link>
                  <Link to='' sx={{ textDecoration: "none", cursor: 'pointer' }}> <Icon icon="logos:youtube-icon" color="skyblue" width="27" height="27" /></Link>
                  <Link to='' sx={{ textDecoration: "none", cursor: 'pointer' }}> <Icon icon="pepicons-pencil:internet-circle-filled" color="skyblue" width="27" height="27" /></Link>

                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>



      </Grid>

    </>
  )
}

export default Findfooter;