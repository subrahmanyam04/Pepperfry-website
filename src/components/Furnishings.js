import { Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const Furnishings = () => {
    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize: "12px",
        color: "#5B5B5B",
        // fontWeight: "700",
        cursor: "pointer",
        textDecoration: "none",
        fontFamily: "Poppins,sans-serif"
    }));

    const Links = styled(Link)(({ theme }) => ({
        textDecoration: "none",
    }));

    // const handleClick = () => {
    //     window.location.href = '/tabscontent/furnishings-single-bed-sheets';
    // };
    // const handleClick2 = () => {
    //     window.location.href = '/tabscontent/furnishings-3ft-x-5ft';
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
                        <Links to='/tabscontent/furnishings-sofas' ><LargeText sx={{ color: '#9d6a37' }}>Bed Sheets </LargeText></Links>

                        {/*////////////////////////////////////////////////// working link////////////////////////////////////////////////////////////////////// */}

                        {/* <Links to='/tabscontent/furnishings-single-bed-sheets'><LargeText sx={{ color: "red" }}>Single Bed Sheets </LargeText></Links> */}

                        <LargeText sx={{color:"red"}} onClick={() => handleClick('/tabscontent/furnishings-single-bed-sheets')}>Single Bed Sheets </LargeText>
                        <Links to='/tabscontent/furnishings-2-seater-sofas'><LargeText >2 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/furnishings-1-seater-sofas'><LargeText>1 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/furnishings-sofa-sets'><LargeText>Sofa Sets </LargeText></Links>


                        <Links to='/tabscontent/furnishings-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sectional Sofas </LargeText></Links>
                        <Links to='/tabscontent/furnishings-lhs-sectionals'><LargeText >LHS Sectionals  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-2-seater-sofas'><LargeText>RHS Sectionals  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-1-seater-sofas'><LargeText>Corner Sofas </LargeText></Links>


                        <Links to='/tabscontent/furnishings-sofa-cum-beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Cum Beds  </LargeText></Links>


                        <Links to='/tabscontent/furnishings-sectional-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Sectional Sofas </LargeText></Links>


                        <Links to='/tabscontent/furnishings-futons' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Futons  </LargeText></Links>


                        <Links to='/tabscontent/furnishings-chaise-loungers' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Chaise Loungers  </LargeText></Links>

                        <Links to='/tabscontent/furnishings-bean-bags' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Bean Bags  </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 2 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/furnishings-recliners' ><LargeText sx={{ color: '#9d6a37' }}>Carpets  </LargeText></Links>

                        {/*////////////////////////////////////////////////// working link////////////////////////////////////////////////////////////////////// */}
                        {/* <Links to='/tabscontent/furnishings-3ft-x-5ft'><LargeText sx={{ color: "red" }}>3ft x 5ft  </LargeText></Links> */}

                        <LargeText sx={{color:"red"}} onClick={() => handleClick('/tabscontent/furnishings-3ft-x-5ft')}>3ft x 5ft </LargeText>
                        <Links to='/tabscontent/furnishings-2-seater-recliners'><LargeText>2 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-3-seater-recliners'><LargeText>3 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-sofa-sets'><LargeText>Recliner Sets  </LargeText></Links>


                        <Links to='/tabscontent/furnishings-sofa-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Chairs  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-wing-chairs'><LargeText >Wing Chairs   </LargeText></Links>
                        <Links to='/tabscontent/furnishings-lounge-chairs'><LargeText>Lounge Chairs  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-slipper-chairs '><LargeText>Slipper Chairs  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-barrel-chairs'><LargeText>Barrel Chairs   </LargeText></Links>


                        <Links to='/tabscontent/furnishings-sofa-Cum-Beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Settees & Benches   </LargeText></Links>
                        <Links to='/tabscontent/furnishings-settees'><LargeText>Settees </LargeText></Links>
                        <Links to='/tabscontent/furnishings-benches'><LargeText>Benches </LargeText></Links>
                        <Links to='/tabscontent/furnishings-recamiers'><LargeText>Recamiers </LargeText></Links>


                        <Links to='/tabscontent/furnishings-ottomans' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Ottomans </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 3 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/furnishings-chairs' ><LargeText sx={{ color: '#9d6a37' }}>Chairs </LargeText></Links>
                        <Links to='/tabscontent/furnishings-arm-chairs'><LargeText>Arm Chairs </LargeText></Links>
                        <Links to='/tabscontent/furnishings-rocking-chairs'><LargeText>Rocking Chairs </LargeText></Links>
                        <Links to='/tabscontent/furnishings-folding-chairs'><LargeText>Folding Chairs </LargeText></Links>
                        <Links to='/tabscontent/furnishings-iconic-chairs'><LargeText>Iconic Chairs</LargeText></Links>
                        <Links to='/tabscontent/furnishings-cafe-chairs'><LargeText>Cafe Chairs </LargeText></Links>


                        <Links to='/tabscontent/furnishings-gaming-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Gaming Chairs  </LargeText></Links>


                        <Links to='/tabscontent/furnishings-stools-&-pouffes' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Stools & Pouffes   </LargeText></Links>
                        <Links to='/tabscontent/furnishings-foot-stools'><LargeText>Foot Stools  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-seating-stools'><LargeText>Seating Stools  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-pouffes'><LargeText>Pouffes  </LargeText></Links>


                        <Links to='/tabscontent/furnishings-shoe-racks' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Shoe Racks  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-shoe-cabinets'><LargeText>Shoe Cabinets </LargeText></Links>
                        <Links to='/tabscontent/furnishings-open-shoe-racks'><LargeText>Open Shoe Racks   </LargeText></Links>
                        <Links to='/tabscontent/furnishings-shoe-rack-&-seat'><LargeText>Shoe Rack & Seat   </LargeText></Links>
                        <Links to='/tabscontent/furnishings-tilt-out-shoe-racks'><LargeText>Tilt Out Shoe Racks   </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 4 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/furnishings-centre-tables' ><LargeText sx={{ color: '#9d6a37' }}>Centre Tables  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-coffee-tables'><LargeText>Coffee Tables  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-coffee-table-sets'><LargeText>Coffee Table Sets  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-nesting-tables'><LargeText>Nesting Tables  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-trunks'><LargeText>Trunks </LargeText></Links>


                        <Links to='/tabscontent/furnishings-side-tables' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Side Tables  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-end-tables'><LargeText>End Tables   </LargeText></Links>
                        <Links to='/tabscontent/furnishings-c-shaped-tables'><LargeText>C Shaped Tables   </LargeText></Links>
                        <Links to='/tabscontent/furnishings-console-tables'><LargeText>Console Tables  </LargeText></Links>
                        <Links to='/tabscontent/furnishings-nest-of-tables'><LargeText>Nest of Tables   </LargeText></Links>


                        <Links to='/tabscontent/furnishings-tv-&-media-units' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>TV & Media Units   </LargeText></Links>


                        <Links to='/tabscontent/furnishings-cabinets-&-sideboards' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Cabinets & Sideboards  </LargeText></Links>


                        <Links to='/tabscontent/furnishings-book-shelves' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Shelves   </LargeText></Links>


                        <Links to='/tabscontent/furnishings-book-cases ' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Cases   </LargeText></Links>

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

export default Furnishings;

