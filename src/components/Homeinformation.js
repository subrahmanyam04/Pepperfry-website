import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Homeinformation = () => {

    const inform = [
        {
            title: "Pepperfry: Your One-Stop Online Furniture Store",
            p1: " Whether you’ve fulfilled your lifelong dream of buying your own home or are a renter excited to decorate your personal space, home décor and furniture can help you create a residence that reflects your tastes and sensibilities.",
            p2: "The right pieces of furniture can not only personalize a space, but they also make everyday life much more pleasant. Imagine, waking up in a bed that provides the most restful night’s sleep. Or experiencing the joy that comes from cooking meals for loved ones in a kitchen designed to your liking.",
            p3: "Pepperfry understands the value home décor and furniture can impart to your space. We recognize that apart from being functional and utilitarian, furniture can hold sentimental value that enriches your life. To make living in your home a dream come true, we offer a wide variety of furniture and home décor items that can meet all your requirements and much more.",
            p4: " As a furniture store that prioritizes quality, we are constantly pushing the envelope to enable you to find pieces that catch your eye and pull at your heartstrings."

        },
        {
            title: "Find Furniture Shop That Helps Turn a House into Your Home",
            p1: " Gone are the days when you had to spend copious amounts of time wandering through furniture store after furniture store, looking for unique and useful pieces. Shopping with us can help you find premium-quality furnishings to set up every area of your home.",
            p2: " Looking for comfortable sofa sets that make lounging in your living room a delight? We have you covered! From plush multiple seater sofas to cosy futon couches, we have it all. To create a complete look, we also offer a range of accompanying sofa chairs. If relaxation is a priority, look at our collection of aesthetically pleasing and restful ",
            p3: "Getting ready to host parties and entertain guests? Choose from our line of dining tables that’ll add a touch of finesse to your events. Or pick a dining set and create a cosy nook for you and your loved ones to share an intimate meal together.",
            p4: " For your bedroom: If your heart is set on creating a bedroom that is your private sanctuary, we have just what you need. From beds of all sizes and across design styles to mattresses designed to help you sleep peacefully, we enable you to pick and choose to create a bedroom that is yours to the tee. Whether you like to dress efficiently or in a leisurely manner, we have closets and wardrobes that cater to your diverse needs."

        },
        {
            title: "Pepperfry: Your One-Stop Online Furniture Store",
            p1: " Whether you’ve fulfilled your lifelong dream of buying your own home or are a renter excited to decorate your personal space, home décor and furniture can help you create a residence that reflects your tastes and sensibilities.",
            p2: "The right pieces of furniture can not only personalize a space, but they also make everyday life much more pleasant. Imagine, waking up in a bed that provides the most restful night’s sleep. Or experiencing the joy that comes from cooking meals for loved ones in a kitchen designed to your liking.",
            p3: "Pepperfry understands the value home décor and furniture can impart to your space. We recognize that apart from being functional and utilitarian, furniture can hold sentimental value that enriches your life. To make living in your home a dream come true, we offer a wide variety of furniture and home décor items that can meet all your requirements and much more.",
            p4: " As a furniture store that prioritizes quality, we are constantly pushing the envelope to enable you to find pieces that catch your eye and pull at your heartstrings."

        },
        {
            title: "Find Furniture Shop That Helps Turn a House into Your Home",
            p1: " Gone are the days when you had to spend copious amounts of time wandering through furniture store after furniture store, looking for unique and useful pieces. Shopping with us can help you find premium-quality furnishings to set up every area of your home.",
            p2: " Looking for comfortable sofa sets that make lounging in your living room a delight? We have you covered! From plush multiple seater sofas to cosy futon couches, we have it all. To create a complete look, we also offer a range of accompanying sofa chairs. If relaxation is a priority, look at our collection of aesthetically pleasing and restful ",
            p3: "Getting ready to host parties and entertain guests? Choose from our line of dining tables that’ll add a touch of finesse to your events. Or pick a dining set and create a cosy nook for you and your loved ones to share an intimate meal together.",
            p4: " For your bedroom: If your heart is set on creating a bedroom that is your private sanctuary, we have just what you need. From beds of all sizes and across design styles to mattresses designed to help you sleep peacefully, we enable you to pick and choose to create a bedroom that is yours to the tee. Whether you like to dress efficiently or in a leisurely manner, we have closets and wardrobes that cater to your diverse needs."

        },
        {
            title: "Pepperfry: Your One-Stop Online Furniture Store",
            p1: " Whether you’ve fulfilled your lifelong dream of buying your own home or are a renter excited to decorate your personal space, home décor and furniture can help you create a residence that reflects your tastes and sensibilities.",
            p2: "The right pieces of furniture can not only personalize a space, but they also make everyday life much more pleasant. Imagine, waking up in a bed that provides the most restful night’s sleep. Or experiencing the joy that comes from cooking meals for loved ones in a kitchen designed to your liking.",
            p3: "Pepperfry understands the value home décor and furniture can impart to your space. We recognize that apart from being functional and utilitarian, furniture can hold sentimental value that enriches your life. To make living in your home a dream come true, we offer a wide variety of furniture and home décor items that can meet all your requirements and much more.",
            p4: " As a furniture store that prioritizes quality, we are constantly pushing the envelope to enable you to find pieces that catch your eye and pull at your heartstrings."

        },
    ]






    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container sx={{ justifyContent: "center" }} marginBottom={20}>

                {inform.map((data) => (
                    <Grid item xs={11} marginTop={1.7} >
                        <Typography fontSize={'12px'} color={'#000000'} fontFamily={'Manrope,sans-serif'}>
                            <b>{data.title}</b>
                        </Typography>
                        <Typography fontSize={'12px'} color={'#000000'} fontFamily={'Manrope,sans-serif'} marginTop={1.7}>
                            {data.p1}
                        </Typography>

                        <Typography variant="body1" component="p" fontSize={'12px'} color={'#000000'} fontFamily={'Manrope, sans-serif'} marginTop={1.7}>
                            {data.p2}
                        </Typography>
                        <Typography fontSize={'12px'} color={'#000000'} fontFamily={'Manrope,sans-serif'} marginTop={1.5}>
                            {data.p3}
                        </Typography>
                        <Typography fontSize={'12px'} color={'#000000'} fontFamily={'Manrope,sans-serif'} marginTop={1.5}>
                            {data.p4}
                        </Typography>
                    </Grid>

                ))}













            </Grid>
        </Box>
    )
}

export default Homeinformation;