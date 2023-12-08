import { Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const Sofasandseatings = () => {
    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize: "12px",
        color: "#5B5B5B",
        // fontWeight: "700",
        textDecoration: "none",
        cursor: "pointer",
        fontFamily: "Poppins,sans-serif"
    }));

    const Links = styled(Link)(({ theme }) => ({
        textDecoration: "none",
    }));

    // const handleClick = () => {
    //     window.location.href = '/tabscontent/sofas&seatings-lhs-sectionals';
    // };
    // const handleClick2 = () => {
    //     window.location.href = '/tabscontent/sofas&seatings-wing-chairs';
    // };

    const handleClick = (path) => {
        const url = path
     
        window.location.href = url;
       

    };

    return (
        <>
            <Grid container lg={12} md={12} sm={12} sx={{ backgroundColor: 'pink', justifyContent: 'center' }} >

                <Grid container lg={10.5} md={11} sm={12} sx={{ backgroundColor: 'whitesmoke' }} >

                    {/* tabpannel column 1 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/sofas&seatings-sofas' ><LargeText sx={{ color: '#9d6a37' }}>Sofas</LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-3-seater-sofas'><LargeText >3 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-2-seater-sofas'><LargeText >2 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-1-seater-sofas'><LargeText>1 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-sofa-sets'><LargeText>Sofa Sets </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sectional Sofas </LargeText></Links>

                        {/*////////////////////////////////////////////////// working link////////////////////////////////////////////////////////////////////// */}
                        {/* <Links to='/tabscontent/sofas&seatings-lhs-sectionals'><LargeText sx={{ color: "red" }}>LHS Sectionals  </LargeText></Links> */}

                        <LargeText sx={{color:"red"}} onClick={() => handleClick('/tabscontent/sofas&seatings-lhs-sectionals')}>LHS Sectionals </LargeText>
                        <Links to='/tabscontent/sofas&seatings-2-seater-sofas'><LargeText>RHS Sectionals  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-1-seater-sofas'><LargeText>Corner Sofas </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-sofa-cum-beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Cum Beds  </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-sectional-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Sectional Sofas </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-futons' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Futons  </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-chaise-loungers' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Chaise Loungers  </LargeText></Links>

                        <Links to='/tabscontent/sofas&seatings-bean-bags' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Bean Bags  </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 2 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/sofas&seatings-recliners' ><LargeText sx={{ color: '#9d6a37' }}>Recliners </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-1-seater-recliners' ><LargeText >1 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-2-seater-recliners'><LargeText>2 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-3-seater-recliners'><LargeText>3 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-sofa-sets'><LargeText>Recliner Sets  </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-sofa-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Chairs  </LargeText></Links>

                        {/*////////////////////////////////////////////////// working link////////////////////////////////////////////////////////////////////// */}
                        {/* <Links to='/tabscontent/sofas&seatings-wing-chairs'><LargeText sx={{ color: "red" }}>Wing Chairs  </LargeText></Links> */}

                        <LargeText sx={{color:"red"}} onClick={() => handleClick('/tabscontent/sofas&seatings-wing-chairs')}>Wing Chairs </LargeText>
                        <Links to='/tabscontent/sofas&seatings-lounge-chairs'><LargeText>Lounge Chairs  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-slipper-chairs '><LargeText>Slipper Chairs  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-barrel-chairs'><LargeText>Barrel Chairs   </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-sofa-Cum-Beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Settees & Benches   </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-settees'><LargeText>Settees </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-benches'><LargeText>Benches </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-recamiers'><LargeText>Recamiers </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-ottomans' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Ottomans </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 3 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/sofas&seatings-chairs' ><LargeText sx={{ color: '#9d6a37' }}>Chairs </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-arm-chairs'><LargeText>Arm Chairs </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-rocking-chairs'><LargeText>Rocking Chairs </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-folding-chairs'><LargeText>Folding Chairs </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-iconic-chairs'><LargeText>Iconic Chairs</LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-cafe-chairs'><LargeText>Cafe Chairs </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-gaming-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Gaming Chairs  </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-stools-&-pouffes' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Stools & Pouffes   </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-foot-stools'><LargeText>Foot Stools  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-seating-stools'><LargeText>Seating Stools  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-pouffes'><LargeText>Pouffes  </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-shoe-racks' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Shoe Racks  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-shoe-cabinets'><LargeText>Shoe Cabinets </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-open-shoe-racks'><LargeText>Open Shoe Racks   </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-shoe-rack-&-seat'><LargeText>Shoe Rack & Seat   </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-tilt-out-shoe-racks'><LargeText>Tilt Out Shoe Racks   </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 4 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/sofas&seatings-centre-tables' ><LargeText sx={{ color: '#9d6a37' }}>Centre Tables  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-coffee-tables'><LargeText>Coffee Tables  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-coffee-table-sets'><LargeText>Coffee Table Sets  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-nesting-tables'><LargeText>Nesting Tables  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-trunks'><LargeText>Trunks </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-side-tables' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Side Tables  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-end-tables'><LargeText>End Tables   </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-c-shaped-tables'><LargeText>C Shaped Tables   </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-console-tables'><LargeText>Console Tables  </LargeText></Links>
                        <Links to='/tabscontent/sofas&seatings-nest-of-tables'><LargeText>Nest of Tables   </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-tv-&-media-units' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>TV & Media Units   </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-cabinets-&-sideboards' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Cabinets & Sideboards  </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-book-shelves' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Shelves   </LargeText></Links>


                        <Links to='/tabscontent/sofas&seatings-book-cases ' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Cases   </LargeText></Links>

                    </Grid>



                    {/* grid 5 images coloumn */}


                    <Grid lg={3} md={2.5} sm={2} marginBottom={15}>

                        <Grid lg={12} md={12} sm={12}>

                            <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Pepperfry_Banner_Creative_316x384_1.png" height={'100%'} width={'100%'} alt="" />
                        </Grid>
                    </Grid>

                    <Grid lg={3} md={2.5} sm={2} marginBottom={15}>

                        <Grid lg={12} md={12} sm={12}>

                            <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/1600_Mattresses_B2_1x_HoverBanner_2809.jpg" height={'100%'} width={'100%'} alt="" />
                        </Grid>
                    </Grid>

                </Grid>



            </Grid>
        </>
    )
}

export default Sofasandseatings;

