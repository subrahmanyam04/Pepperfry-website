import { Grid } from "@mui/material";
import React from "react";
import { Typography } from '@mui/material';
import { Divider } from "@mui/joy";
const Tabscontentinformation = () => {

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
        {
            title: "Find Furniture Shop That Helps Turn a House into Your Home",
            p1: " Gone are the days when you had to spend copious amounts of time wandering through furniture store after furniture store, looking for unique and useful pieces. Shopping with us can help you find premium-quality furnishings to set up every area of your home.",
            p2: " Looking for comfortable sofa sets that make lounging in your living room a delight? We have you covered! From plush multiple seater sofas to cosy futon couches, we have it all. To create a complete look, we also offer a range of accompanying sofa chairs. If relaxation is a priority, look at our collection of aesthetically pleasing and restful ",
            p3: "Getting ready to host parties and entertain guests? Choose from our line of dining tables that’ll add a touch of finesse to your events. Or pick a dining set and create a cosy nook for you and your loved ones to share an intimate meal together.",
            p4: " For your bedroom: If your heart is set on creating a bedroom that is your private sanctuary, we have just what you need. From beds of all sizes and across design styles to mattresses designed to help you sleep peacefully, we enable you to pick and choose to create a bedroom that is yours to the tee. Whether you like to dress efficiently or in a leisurely manner, we have closets and wardrobes that cater to your diverse needs."

        }
    ]


    const sidedata = [
        {
            product: "Antalya Fabric 3 Seater Sofa in Blue Colour",
            Price: "₹25,413"
        },
        {
            product: " Nebula Fabric 3 Seater Sofa in Charcoal Grey Colour ",
            Price: "₹13,229"
        },
        {
            product: " Bali Velvet 3 Seater Sofa in Blue Colour ",
            Price: "₹13,719"
        },
        {
            product: " Jack Velvet 3 Seater Sofa in Grey Colour ",
            Price: "₹26,299"
        },
        {
            product: " Jack Velvet 3 Seater Sofa in Green Colour ",
            Price: "₹25,773"
        },
        {
            product: " Nipul Fabric 3 Seater Sofa in Charcoal Grey Colour ",
            Price: "₹14,799"
        },
        {
            product: "Bali Fabric 3 Seater Sofa in Grey Colour",
            Price: "₹14,699"
        },
        {
            product: " Andres Fabric 3 Seater Sofa In Chestnut Brown Colour ",
            Price: "₹39,999"
        },
        {
            product: " Daroo Velvet 3 Seater Sofa in Camel Beige Colour ",
            Price: "₹19,403"
        },
        {
            product: " Daroo Velvet 3 Seater Sofa in Pine Green Colour ",
            Price: "₹19,403"
        },

    ]



    return (
        <>

            <Grid container lg={12} md={12} sm={12} xs={12} marginTop={2}>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid lg={10.5} md={11} sm={11} xs={11.5}>
                        <Grid container gap={1}>
                            <Grid lg={7} md={7} sm={7} xs={12} >
                                {inform.map((data) => (

                                    <>
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
                                    </>


                                ))}
                            </Grid>
                            <Grid lg={4.9} md={4.8} sm={4.8} xs={12}>
                                <Typography fontSize={'12px'} color={'#323232'} fontFamily={'Poppins,sans-serif'}> <b>3 Seater Sofas Price List</b> </Typography>
                                <Grid lg={12} md={12} sm={12} xs={12} container gap={1} marginTop={1} marginBottom={1}>
                                    <Grid lg={8.8} md={8.7} sm={8.6} xs={8.6}>
                                        <Typography fontSize={'12px'} color={'#121212'} fontFamily={'Manrope,sans-serif'}><strong>Products List</strong></Typography>

                                    </Grid>
                                    <Grid lg={3} md={3} sm={3} xs={3} textAlign={{ lg: 'end', md: 'end', sm: 'end', xs: "end" }}>
                                        <Typography fontSize={'12px'} color={'#121212'} fontFamily={'Manrope,sans-serif'}><strong>PRICE</strong></Typography>

                                    </Grid>

                                </Grid>
                                <Divider />


                                {sidedata.map((data) => (
                                    <>
                                        <Grid lg={12} md={12} container gap={1} marginTop={1} marginBottom={1}>
                                            <Grid lg={8.8} md={8.7} sm={8.6} xs={8.6}>
                                                <Typography fontSize={'12px'} color={'#5B5B5B'} fontFamily={'Manrope,sans-serif'}> {data.product} </Typography>

                                            </Grid>
                                            <Grid lg={3} md={3} sm={3} xs={3} textAlign={{ lg: 'end', md: 'end', sm: 'end', xs: "end" }}>
                                                <Typography fontSize={'12px'} color={'#848484'} fontFamily={'Manrope,sans-serif'}>{data.Price}</Typography>

                                            </Grid>

                                        </Grid>
                                        <Divider />
                                    </>

                                ))}

                                <Typography fontSize={'12px'} color={'#5B5B5B'} fontFamily={'Manrope,sans-serif'} marginTop={1}> This data was last updated on 2023/11/27 </Typography>



                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>


            </Grid>
        </>
    )
}

export default Tabscontentinformation;