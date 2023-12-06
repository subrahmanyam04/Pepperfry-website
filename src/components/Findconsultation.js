import { Grid } from "@mui/material";
import React from "react";
import Typography from '@mui/joy/Typography';


import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";

const Findconsultation = () => {

    const [time, setTime] = React.useState('');
    const handleChange = (event) => {
        setTime(event.target.value);
    };
    return (
        <>

            <Grid lg={12} md={12} sm={12} xs={12}>
                <Typography textAlign={'center'} textColor={'#9d6a37'} fontWeight={{ sm: "600px" }} fontSize={{ xs: "17.5px", sm: "24px", md: "24px", lg: "26px" }} fontFamily={'Poppins'} >
                    <b>Book A Free Consultation</b>

                </Typography>
            </Grid>

            <Grid lg={12} md={12}>
                <Typography textAlign={'center'} textColor={'#848484'} fontSize={{ md: "14px", lg: "16px", xs: "14px" }} fontFamily={'Manrope-Regular'} >
                    Give us your details. We'll call back!

                </Typography>
            </Grid>

            <Grid container columns={{ xs: 2, sm: 2, md: 2, lg: "1" }} justifyContent={'center'}>

                <Grid lg={3}>

                    <TextField fullWidth placeholder='Your Full Name' id="fullWidth" sx={{ marginTop: "15px" }} />
                    <TextField fullWidth placeholder='Mobile Number' id="fullWidth" sx={{ marginTop: "15px" }} InputProps={{
                        endAdornment: <InputAdornment position="end"> <Typography textColor={'#FF7035'} fontFamily={'manrope-bold'}><b>Send OTP</b></Typography></InputAdornment>,
                    }} />

                    <TextField fullWidth placeholder='Pincode' id="fullWidth" sx={{ marginTop: "15px" }} />

                    <FormControl fullWidth sx={{ marginTop: "10px" }} >
                        <Select
                            value={time}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <Typography textColor={'#858585'}>Preffered Time Of Call</Typography>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>

                    </FormControl>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" type="button" color="primary" fullWidth sx={{ marginTop: "15px" }} style={{ cursor: "pointer" }}><Typography fontSize={'16px'}  >Submit</Typography></Button>
                    </ThemeProvider>


                </Grid>

            </Grid>






        </>


    )
}
export default Findconsultation;