import { Grid } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Mousewheel, Navigation } from 'swiper/modules';
// import makeStyles from '@mui/styles/makeStyles';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Icon } from '@iconify/react';
// import { styled } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
// import { useMediaQuery } from '@mui/material';

const Findlocation = () => {

    const SwiperContainer = styled(Swiper)({
        // Custom styles for the Swiper container
        width: '100%',
        height: '399px',


        // Add more styles as needed
    });




    // const useStyles = makeStyles((theme) => ({
    //     swiperSlide: {
    //         fontSize: '18px',
    //         height: 'auto',
    //         boxSizing: 'border-box',
    //         padding: '30px',
    //     },
    // }));


    // const useStyles = makeStyles((theme) => ({
    //     swiperSlide: {
    //         fontSize: '18px',
    //         height: 'auto',
    //         boxSizing: 'border-box',
    //         padding: '30px',
    //     },
    //   }));
    // const classes = useStyles();

    const card = [
        {
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/6349_1677562010_19371677424983Testimonial1.jpg",
            cityname: "Bengaluru",
            studios: "20 Studios"
        },
        {
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/2179_1677562119_2501677424983Testimonial2.jpg",
            cityname: " Mumbai ",
            studios: "13 Studios"
        },
        {
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/6071_1677562281_82591677424984Testimonial3.jpg",
            cityname: " Hyderabad ",
            studios: "10 Studios"
        }



    ]





    const icons = [
        {
            title: "Studio Pepperfry",
            list1: "Lower Parel",
            list2: "Gala No 13, Janata Industrial Estate, Senapati Bapat Marg",
            list3: "Lower Parel",
            list4: "Mumbai - 400014",
            list5: "Opposite Phoenix Mill",
            list6: "+917948060752",
            list7: "Open until 10:00 PM",
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/2616_1677590915_4CO030.jpg",

        },
        {
            title: "Studio Pepperfry",
            list1: "Lower Parel",
            list2: "Gala No 13, Janata Industrial Estate, Senapati Bapat Marg",
            list3: "Lower Parel",
            list4: "Mumbai - 400014",
            list5: "Opposite Phoenix Mill",
            list6: "+917948060752",
            list7: "Open until 10:00 PM",
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/8935_1677590918_11CO018.jpg",

        },
        {
            title: "Studio Pepperfry",
            list1: "Lower Parel",
            list2: "Gala No 13, Janata Industrial Estate, Senapati Bapat Marg",
            list3: "Lower Parel",
            list4: "Mumbai - 400014",
            list5: "Opposite Phoenix Mill",
            list6: "+917948060752",
            list7: "Open until 10:00 PM",
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/8632_1677590917_8CO003.jpg",

        },
        {
            title: "Studio Pepperfry",
            list1: "Lower Parel",
            list2: "Gala No 13, Janata Industrial Estate, Senapati Bapat Marg",
            list3: "Lower Parel",
            list4: "Mumbai - 400014",
            list5: "Opposite Phoenix Mill",
            list6: "+917948060752",
            list7: "Open until 10:00 PM",
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/5352_1677590919_12CO032.jpg",

        },
        {
            title: "Studio Pepperfry",
            list1: "Lower Parel",
            list2: "Gala No 13, Janata Industrial Estate, Senapati Bapat Marg",
            list3: "Lower Parel",
            list4: "Mumbai - 400014",
            list5: "Opposite Phoenix Mill",
            list6: "+917948060752",
            list7: "Open until 10:00 PM",
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/6586_1677590914_2CO029.jpg",

        },
        {
            title: "Studio Pepperfry",
            list1: "Lower Parel",
            list2: "Gala No 13, Janata Industrial Estate, Senapati Bapat Marg",
            list3: "Lower Parel",
            list4: "Mumbai - 400014",
            list5: "Opposite Phoenix Mill",
            list6: "+917948060752",
            list7: "Open until 10:00 PM",
            img: "https://cdn4.singleinterface.com/files/banner_images/165131/2616_1677590915_4CO030.jpg",

        },
    ]

    const [age1, setAge1] = React.useState('20');
    const [age2, setAge2] = React.useState('20');
    const [age3, setAge3] = React.useState('20');
    const handleChange1 = (event) => {
        setAge1(event.target.value);
        setAge2('10');
        setAge3('10');
    };
    const handleChange2 = (event) => {
        setAge2(event.target.value);
        setAge3('10');

    };
    const handleChange3 = (event) => {
        setAge3(event.target.value);

    };

    // const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [value1, setValue1] = React.useState(null);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container sx={{ justifyContent: 'center' }} >
            <Grid lg={9.5} md={11} sm={11} marginBottom={2} marginTop={5} display={{ lg: 'block', md: 'block', sm: 'none', xs: 'none' }}>

                <Grid container columns={{ lg: 12, md: 12, sm: 12 }} >


                    {/* first tab searchbar */}

                    <Grid lg={5.8} md={5.8} sm={12} >
                        {/* <Box sx={{ width: '100%', typography: 'body1' }}> */}

                        <Grid container columns={{ lg: '12', md: 12, sm: 12 }}>
                            <Grid lg={5.8} md={5.8} sm={12} display={{ xs: 'block', sm: 'block', lg: 'none', md: 'none' }}>
                                <img src="./assets/images/MicrosoftTeams-image (1).png" alt="" height={'40%'} width={'100%'} />

                            </Grid>
                            <Grid lg={12} md={12} sm={12}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                                        <TabList onChange={handleChange} aria-label="lab API tabs example">


                                            <Tab label="Search Nearby" value="1" sx={{
                                                color: "#54575A", fontSize: '14px', indicator: "#54575A", textTransform: "capitalize",

                                            }}
                                            />




                                            <Tab label="Advanced Serach" value="2" sx={{
                                                color: "#54575A", fontSize: '14px', indicator: "red", textTransform: "capitalize",

                                            }} />




                                        </TabList>

                                    </Box>
                                    <TabPanel value="1">
                                        <GooglePlacesAutocomplete
                                            apiKey="IzaSyC2dPMOzNNktEUr2dLPqyJyOhsLofOk57k"
                                            selectProps={{
                                                value1,
                                                onChange: setValue1
                                            }}

                                        />
                                    </TabPanel>


                                    {/* second Tab state,city,locality */}

                                    <TabPanel value="2">
                                        <Grid container gap={1.5}>
                                            <Grid lg={3.5} md={3.9} sm={3.7}>
                                                <FormControl size="small" fullWidth>
                                                    {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
                                                    <Select
                                                        labelId="demo-select-small-label"
                                                        id="demo-select-small"
                                                        value={age1}
                                                        onChange={handleChange1}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10} ><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Select State</Typography></MenuItem>
                                                        <MenuItem value={20}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Andhra Pradesh</Typography></MenuItem>
                                                        <MenuItem value={30}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Telngana</Typography></MenuItem>
                                                        <MenuItem value={40}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Tamil Nadu</Typography></MenuItem>
                                                        <MenuItem value={50}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Karnataka</Typography></MenuItem>
                                                        <MenuItem value={60}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Gujrat</Typography></MenuItem>
                                                        <MenuItem value={70}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Orrisa</Typography></MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid lg={3.9} md={3.5} sm={3.8}>
                                                <FormControl size="small" fullWidth>
                                                    {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
                                                    <Select
                                                        labelId="demo-select-small-label"
                                                        id="demo-select-small"
                                                        value={age2}
                                                        onChange={handleChange2}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>

                                                        <MenuItem value={10} ><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Select City</Typography></MenuItem>
                                                        <MenuItem value={20}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Kakinada</Typography></MenuItem>
                                                        <MenuItem value={30}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Hyderabad</Typography></MenuItem>
                                                        <MenuItem value={40}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Chennai</Typography></MenuItem>
                                                        <MenuItem value={50}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Bangalore</Typography></MenuItem>
                                                        <MenuItem value={60}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Ahamedabadh</Typography></MenuItem>
                                                        <MenuItem value={70}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Bhubaneswar</Typography></MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid lg={4} md={3.8} sm={4}>
                                                <FormControl size="small" fullWidth>
                                                    {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
                                                    <Select
                                                        labelId="demo-select-small-label"
                                                        id="demo-select-small"
                                                        value={age3}
                                                        onChange={handleChange3}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10} ><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Select Locality</Typography></MenuItem>
                                                        <MenuItem value={20}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Gandhi nagar</Typography></MenuItem>
                                                        <MenuItem value={30}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Hi Tech City</Typography></MenuItem>
                                                        <MenuItem value={40}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Chennai</Typography></MenuItem>
                                                        <MenuItem value={50}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Bangalore</Typography></MenuItem>
                                                        <MenuItem value={60}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Ahamedabadh</Typography></MenuItem>
                                                        <MenuItem value={70}><Typography color={'#838383'} fontSize={{ lg: '16px', md: "14px" }} fontFamily={'Manrope-Regular'}>Bhubaneswar</Typography></MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>

                                        </Grid>
                                    </TabPanel>

                                </TabContext>
                            </Grid>
                            {/* </Box> */}
                            <Grid container sx={{ justifyContent: 'end' }}>
                                <Grid lg={4} md={4} sm={3.7}>
                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained" type="button" color="primary" fullWidth style={{ cursor: "pointer" }}><Typography fontSize={'16px'}  >Search</Typography></Button>
                                    </ThemeProvider>
                                </Grid>
                                <Grid lg={0.5} md={0.7} sm={0.5}></Grid>
                            </Grid>


                        </Grid>

                        <Grid container lg={12} md={12} style={{ marginTop: '15px' }} >




                            <Swiper

                                spaceBetween={'2px'}
                                direction={'vertical'}
                                slidesPerView={'1.5'}
                                freeMode={true}
                                // scrollbar={true}
                                mousewheel={true}
                                modules={[FreeMode, Scrollbar, Mousewheel, Navigation]}
                                className="swiper"
                                style={{
                                    // Add your inline styles for the scrollbar here
                                    overflowY: 'scroll',  // Ensure vertical scrollbar is visible
                                    scrollbarColor: '#3498db #f1f1f1',  // WebKit browsers (Chrome, Safari)
                                    scrollbarWidth: '100px',  // Firefox
                                    msOverflowStyle: 'none',
                                    height: '399px', // Hide scrollbar for IE/Edge
                                    width: "100%"


                                }}

                            >


                                {/* <SwiperContainer> */}
                                {icons.map((infor) => (
                                    <Grid container columns={{ lg: 12, md: 12, sm: 12 }} gap={1} >

                                        <SwiperSlide  >
                                            {/* <Grid lg={0.5}></Grid> */}
                                            <Grid lg={12} md={12}>
                                                <Grid container gap={1.5}>
                                                    <Grid lg={3} md={3}>
                                                        <img src={infor.img} width={'100%'} height={'100%'} alt="...." />
                                                    </Grid>
                                                    <Grid lg={8} md={8}>
                                                        <Typography fontFamily={'Poppins'} fontSize={{ lg: '18px' }} color={"#000000"}><b>{infor.title}</b></Typography>
                                                        <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color={'#000000'}>{infor.list1}</Typography>

                                                        <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color={'#000000'}>{infor.list2}</Typography>
                                                        <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color={'#000000'}>{infor.list3}</Typography>

                                                        <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color={'#000000'}>{infor.list4}</Typography>
                                                        <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color={'#000000'}>{infor.list5}</Typography>

                                                        <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color={'#000000'}>{infor.list6}</Typography>
                                                        <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color={'#000000'}>{infor.list7}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container columns={{ lg: 12, md: 12 }} marginTop={4}>
                                                    <Grid lg={3} md={3}>
                                                        <Grid container sx={{ justifyContent: "center" }} >

                                                            <Grid lg={3} md={3} alignItems={'center'}>
                                                                <Icon icon="ep:location" color="#9d6a37" width="25" height="25" />
                                                            </Grid>
                                                            <Grid lg={12} md={12} textAlign={'center'}>
                                                                <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color="#9d6a37">Get Directions</Typography>
                                                            </Grid>

                                                        </Grid>

                                                    </Grid>

                                                    <Grid lg={3} md={3} >
                                                        <Grid container sx={{ justifyContent: "center" }} >

                                                            <Grid lg={3} md={3} alignItems={'center'}>
                                                                <Icon icon="fluent:call-48-regular" color="#9d6a37" width="25" height="25" />
                                                            </Grid>
                                                            <Grid lg={12} md={12} textAlign={'center'}>
                                                                <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color="#9d6a37"> Talk to Our Team </Typography>
                                                            </Grid>

                                                        </Grid>
                                                    </Grid>
                                                    <Grid lg={3} md={3}>
                                                        <Grid container sx={{ justifyContent: "center" }} >

                                                            <Grid lg={3} md={3} alignItems={'center'}>
                                                                <Icon icon="solar:share-linear" color="#9d6a37" width="25" height="25" />
                                                            </Grid>
                                                            <Grid lg={12} md={12} textAlign={'center'}>
                                                                <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color="#9d6a37"> Website </Typography>
                                                            </Grid>

                                                        </Grid>
                                                    </Grid>
                                                    <Grid lg={3} md={3}>
                                                        <Grid container sx={{ justifyContent: "center" }} >

                                                            <Grid lg={3} md={3} alignItems={'center'}>
                                                                <Icon icon="uiw:date" color="#9d6a37" width="25" height="25" />
                                                            </Grid>
                                                            <Grid lg={12} md={12} textAlign={'center'}>
                                                                <Typography fontFamily={'Manrope-Regular'} fontSize={'13px'} color="#9d6a37">Share Location</Typography>
                                                            </Grid>

                                                        </Grid>
                                                    </Grid>

                                                </Grid>

                                                {/* <Grid lg={0.5}></Grid> */}

                                            </Grid>
                                        </SwiperSlide >


                                    </Grid>


                                ))}
                                {/* </SwiperContainer> */}

                            </Swiper>


                        </Grid>



                    </Grid>
                    <Grid lg={0.4} md={0.4}></Grid>

                     {/* mapping grid */}

                    <Grid lg={5.8} md={5.8} display={{ xs: 'none', sm: 'none', lg: 'block', md: 'block' }}>
                        {/* <img src="./assets/images/MicrosoftTeams-image (1).png" alt="" height={'100%'} width={'100%'} /> */}

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.1882724784728!2d81.92495637419742!3d16.866578617601636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3797a8372ff79d%3A0x7c0d4df09d940932!2sActimize%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1688557188291!5m2!1sen!2sin" height='100%' width='100%' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </Grid>







                </Grid>





















            </Grid >

        </Grid >
    )
}
export default Findlocation;