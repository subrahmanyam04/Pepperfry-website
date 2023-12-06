import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { orange } from "@mui/material/colors";
import { Grid, Typography } from "@mui/material";
import { Icon } from '@iconify/react';
import { Divider } from "@mui/joy";

const Tabsstaticpagination = () => {
    return (
        <>

            <Grid conatiner lg={12}  >
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid lg={3}  marginTop={2} marginBottom={2}>
                        <Stack spacing={2}>
                            <Pagination count={5} sx={{
                                '& .MuiPaginationItem-root': {
                                    // color: '#FF7035', // Change the color to orange
                                    fontWeight: 'bold',
                                },
                                '& .Mui-selected': {
                                    backgroundColor: '#FF7035 !important', // Change the background color of the selected page
                                    color: '#ffffff !important', // Change the text color of the selected page
                                },
                            }} />

                        </Stack>
                    </Grid>
                </Grid>
            </Grid>



            {/* small infoemation */}


            <Grid conatiner sx={{ backgroundColor: '#f5f5f5' }} lg={12} xs={12}  marginBottom={2}>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid lg={2.7} xs={10.5} marginTop={2} marginBottom={{lg:2,md:0,sm:0,xs:0}}>
                        <Typography textAlign={"center"} fontFamily={'Manrope,sans-serif'} fontSize={{lg:'16px',sm:'14px',xs:'14px'}} color={'#121212'}> <b>Didn't Find What You Were Looking For? </b>  </Typography>

                    </Grid>
                    <Grid lg={2} xs={10.5}  marginBottom={{lg:0,md:2,sm:2,xs:2}} marginTop={{lg:2,md:0,sm:0,xs:0}}>
                        <Typography textAlign={"center"} fontFamily={'Manrope,sans-serif'} fontSize={{lg:'16px',sm:'14px',xs:'14px'}} color={'#121212'}> Share your Feedback with Us <Icon icon="ph:arrow-right-thin" width="18" height="18"  />  </Typography>

                    </Grid>

                </Grid>

            </Grid>
<Divider/>
        </>

    )
}
// Share your Feedback with Us <Icon icon="ph:arrow-right-thin" width="18" height="18"  />
export default Tabsstaticpagination;