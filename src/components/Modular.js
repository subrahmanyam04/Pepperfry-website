import { Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const Modular = () => {
    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize: "12px",
        color: "#5B5B5B",
        // fontWeight: "700",
        textDecoration: "none",
        fontFamily: "Poppins,sans-serif"
    }));

    const Links = styled(Link)(({ theme }) => ({
        textDecoration: "none",
    }));


    return (
        <>
            <Grid container lg={12} md={12} sm={12} sx={{ backgroundColor: 'pink', justifyContent: 'center' }} >

                <Grid container lg={10.5} md={11} sm={12} sx={{ backgroundColor: 'whitesmoke' }} >

                    {/* tabpannel column 1 */}

                    <Grid lg={1.5} md={1.7} sm={2} border={'1px solid black'} marginBottom={15}>
                        <Links to='/tabscontent/modular-sofas' ><LargeText sx={{ color: '#9d6a37' }}>CookTops </LargeText></Links>

{/*////////////////////////////////////////////////// working link////////////////////////////////////////////////////////////////////// */}


                        <Links to='/tabscontent/modular-gas-stoves'><LargeText sx={{color:"red"}}>Gas Stoves</LargeText></Links>
                        <Links to='/tabscontent/modular-2-seater-sofas'><LargeText >2 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/modular-1-seater-sofas'><LargeText>1 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/modular-sofa-sets'><LargeText>Sofa Sets </LargeText></Links>


                        <Links to='/tabscontent/modular-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sectional Sofas </LargeText></Links>
                        <Links to='/tabscontent/modular-lhs-sectionals'><LargeText >LHS Sectionals  </LargeText></Links>
                        <Links to='/tabscontent/modular-2-seater-sofas'><LargeText>RHS Sectionals  </LargeText></Links>
                        <Links to='/tabscontent/modular-1-seater-sofas'><LargeText>Corner Sofas </LargeText></Links>


                        <Links to='/tabscontent/modular-sofa-cum-beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Cum Beds  </LargeText></Links>


                        <Links to='/tabscontent/modular-sectional-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Sectional Sofas </LargeText></Links>


                        <Links to='/tabscontent/modular-futons' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Futons  </LargeText></Links>


                        <Links to='/tabscontent/modular-chaise-loungers' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Chaise Loungers  </LargeText></Links>

                        <Links to='/tabscontent/modular-bean-bags' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Bean Bags  </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 2 */}

                    <Grid lg={1.5} md={1.7} sm={2} border={'1px solid black'} marginBottom={15}>
                        <Links to='/tabscontent/modular-recliners' ><LargeText sx={{ color: '#9d6a37' }}>Heating modular </LargeText></Links>

{/*////////////////////////////////////////////////// working link////////////////////////////////////////////////////////////////////// */}

                        <Links to='/tabscontent/modular-room-heaters' ><LargeText sx={{color:"red"}}>Room Heaters </LargeText></Links>
                        <Links to='/tabscontent/modular-2-seater-recliners'><LargeText>2 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/modular-3-seater-recliners'><LargeText>3 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/modular-sofa-sets'><LargeText>Recliner Sets  </LargeText></Links>


                        <Links to='/tabscontent/modular-sofa-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Chairs  </LargeText></Links>
                        <Links to='/tabscontent/modular-wing-chairs'><LargeText >Wing Chairs   </LargeText></Links>
                        <Links to='/tabscontent/modular-lounge-chairs'><LargeText>Lounge Chairs  </LargeText></Links>
                        <Links to='/tabscontent/modular-slipper-chairs '><LargeText>Slipper Chairs  </LargeText></Links>
                        <Links to='/tabscontent/modular-barrel-chairs'><LargeText>Barrel Chairs   </LargeText></Links>


                        <Links to='/tabscontent/modular-sofa-Cum-Beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Settees & Benches   </LargeText></Links>
                        <Links to='/tabscontent/modular-settees'><LargeText>Settees </LargeText></Links>
                        <Links to='/tabscontent/modular-benches'><LargeText>Benches </LargeText></Links>
                        <Links to='/tabscontent/modular-recamiers'><LargeText>Recamiers </LargeText></Links>


                        <Links to='/tabscontent/modular-ottomans' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Ottomans </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 3 */}

                    <Grid lg={1.5} md={1.7} sm={2} border={'1px solid black'} marginBottom={15}>
                        <Links to='/tabscontent/modular-chairs' ><LargeText sx={{ color: '#9d6a37' }}>Chairs </LargeText></Links>
                        <Links to='/tabscontent/modular-arm-chairs'><LargeText>Arm Chairs </LargeText></Links>
                        <Links to='/tabscontent/modular-rocking-chairs'><LargeText>Rocking Chairs </LargeText></Links>
                        <Links to='/tabscontent/modular-folding-chairs'><LargeText>Folding Chairs </LargeText></Links>
                        <Links to='/tabscontent/modular-iconic-chairs'><LargeText>Iconic Chairs</LargeText></Links>
                        <Links to='/tabscontent/modular-cafe-chairs'><LargeText>Cafe Chairs </LargeText></Links>


                        <Links to='/tabscontent/modular-gaming-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Gaming Chairs  </LargeText></Links>


                        <Links to='/tabscontent/modular-stools-&-pouffes' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Stools & Pouffes   </LargeText></Links>
                        <Links to='/tabscontent/modular-foot-stools'><LargeText>Foot Stools  </LargeText></Links>
                        <Links to='/tabscontent/modular-seating-stools'><LargeText>Seating Stools  </LargeText></Links>
                        <Links to='/tabscontent/modular-pouffes'><LargeText>Pouffes  </LargeText></Links>


                        <Links to='/tabscontent/modular-shoe-racks' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Shoe Racks  </LargeText></Links>
                        <Links to='/tabscontent/modular-shoe-cabinets'><LargeText>Shoe Cabinets </LargeText></Links>
                        <Links to='/tabscontent/modular-open-shoe-racks'><LargeText>Open Shoe Racks   </LargeText></Links>
                        <Links to='/tabscontent/modular-shoe-rack-&-seat'><LargeText>Shoe Rack & Seat   </LargeText></Links>
                        <Links to='/tabscontent/modular-tilt-out-shoe-racks'><LargeText>Tilt Out Shoe Racks   </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 4 */}

                    <Grid lg={1.5} md={1.7} sm={2} border={'1px solid black'} marginBottom={15}>
                        <Links to='/tabscontent/modular-centre-tables' ><LargeText sx={{ color: '#9d6a37' }}>Centre Tables  </LargeText></Links>
                        <Links to='/tabscontent/modular-coffee-tables'><LargeText>Coffee Tables  </LargeText></Links>
                        <Links to='/tabscontent/modular-coffee-table-sets'><LargeText>Coffee Table Sets  </LargeText></Links>
                        <Links to='/tabscontent/modular-nesting-tables'><LargeText>Nesting Tables  </LargeText></Links>
                        <Links to='/tabscontent/modular-trunks'><LargeText>Trunks </LargeText></Links>


                        <Links to='/tabscontent/modular-side-tables' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Side Tables  </LargeText></Links>
                        <Links to='/tabscontent/modular-end-tables'><LargeText>End Tables   </LargeText></Links>
                        <Links to='/tabscontent/modular-c-shaped-tables'><LargeText>C Shaped Tables   </LargeText></Links>
                        <Links to='/tabscontent/modular-console-tables'><LargeText>Console Tables  </LargeText></Links>
                        <Links to='/tabscontent/modular-nest-of-tables'><LargeText>Nest of Tables   </LargeText></Links>


                        <Links to='/tabscontent/modular-tv-&-media-units' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>TV & Media Units   </LargeText></Links>


                        <Links to='/tabscontent/modular-cabinets-&-sideboards' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Cabinets & Sideboards  </LargeText></Links>


                        <Links to='/tabscontent/modular-book-shelves' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Shelves   </LargeText></Links>


                        <Links to='/tabscontent/modular-book-cases ' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Cases   </LargeText></Links>

                    </Grid>



                    {/* grid 5 images coloumn */}


                    <Grid lg={3} md={2.5} sm={2} border={'1px solid black'} marginBottom={15}>

                        <Grid lg={12} md={12} sm={12}>

                            <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Pepperfry_Banner_Creative_316x384_1.png" height={'100%'} width={'100%'} alt="" />
                        </Grid>
                    </Grid>

                    <Grid lg={3} md={2.5} sm={2} border={'1px solid black'} marginBottom={15}>

                        <Grid lg={12} md={12} sm={12}>

                            <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/1600_Mattresses_B2_1x_HoverBanner_2809.jpg" height={'100%'} width={'100%'} alt="" />
                        </Grid>
                    </Grid>

                </Grid>



            </Grid>
        </>
    )
}

export default Modular;

