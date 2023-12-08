import { Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const Homedecor = () => {
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
    //     window.location.href = '/tabscontent/homedecor-table-vases';
    // };
    // const handleClick2 = () => {
    //     window.location.href = '/tabscontent/homedecor-table-clocks';
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
                        <Links to='/tabscontent/homedecor-sofas' ><LargeText sx={{ color: '#9d6a37' }}>Vases </LargeText></Links>

                        {/*////////////////////////////////////////////////// working link////////////////////////////////////////////////////////////////////// */}

                        {/* <Links to='/tabscontent/homedecor-table-vases'><LargeText sx={{ color: "red" }}>Table Vases </LargeText></Links> */}

                        <LargeText sx={{color:"red"}} onClick={() => handleClick('/tabscontent/homedecor-table-vases')}>Table Vases </LargeText>
                        <Links to='/tabscontent/homedecor-2-seater-sofas'><LargeText >2 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/homedecor-1-seater-sofas'><LargeText>1 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/homedecor-sofa-sets'><LargeText>Sofa Sets </LargeText></Links>


                        <Links to='/tabscontent/homedecor-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sectional Sofas </LargeText></Links>
                        <Links to='/tabscontent/homedecor-lhs-sectionals'><LargeText >LHS Sectionals  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-2-seater-sofas'><LargeText>RHS Sectionals  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-1-seater-sofas'><LargeText>Corner Sofas </LargeText></Links>


                        <Links to='/tabscontent/homedecor-sofa-cum-beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Cum Beds  </LargeText></Links>


                        <Links to='/tabscontent/homedecor-sectional-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Sectional Sofas </LargeText></Links>


                        <Links to='/tabscontent/homedecor-futons' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Futons  </LargeText></Links>


                        <Links to='/tabscontent/homedecor-chaise-loungers' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Chaise Loungers  </LargeText></Links>

                        <Links to='/tabscontent/homedecor-bean-bags' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Bean Bags  </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 2 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/homedecor-recliners' ><LargeText sx={{ color: '#9d6a37' }}>PTable Decor  </LargeText></Links>

                        {/*////////////////////////////////////////////////// working link////////////////////////////////////////////////////////////////////// */}
                        {/* <Links to='/tabscontent/homedecor-table-clocks'><LargeText sx={{ color: "red" }}>Table Clocks  </LargeText></Links> */}

                        <LargeText sx={{color:"red"}} onClick={() => handleClick('/tabscontent/homedecor-table-clocks')}>Table Clocks </LargeText>
                        <Links to='/tabscontent/homedecor-2-seater-recliners'><LargeText>2 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-3-seater-recliners'><LargeText>3 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-sofa-sets'><LargeText>Recliner Sets  </LargeText></Links>


                        <Links to='/tabscontent/homedecor-sofa-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Chairs  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-wing-chairs'><LargeText >Wing Chairs   </LargeText></Links>
                        <Links to='/tabscontent/homedecor-lounge-chairs'><LargeText>Lounge Chairs  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-slipper-chairs '><LargeText>Slipper Chairs  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-barrel-chairs'><LargeText>Barrel Chairs   </LargeText></Links>


                        <Links to='/tabscontent/homedecor-sofa-Cum-Beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Settees & Benches   </LargeText></Links>
                        <Links to='/tabscontent/homedecor-settees'><LargeText>Settees </LargeText></Links>
                        <Links to='/tabscontent/homedecor-benches'><LargeText>Benches </LargeText></Links>
                        <Links to='/tabscontent/homedecor-recamiers'><LargeText>Recamiers </LargeText></Links>


                        <Links to='/tabscontent/homedecor-ottomans' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Ottomans </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 3 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/homedecor-chairs' ><LargeText sx={{ color: '#9d6a37' }}>Chairs </LargeText></Links>
                        <Links to='/tabscontent/homedecor-arm-chairs'><LargeText>Arm Chairs </LargeText></Links>
                        <Links to='/tabscontent/homedecor-rocking-chairs'><LargeText>Rocking Chairs </LargeText></Links>
                        <Links to='/tabscontent/homedecor-folding-chairs'><LargeText>Folding Chairs </LargeText></Links>
                        <Links to='/tabscontent/homedecor-iconic-chairs'><LargeText>Iconic Chairs</LargeText></Links>
                        <Links to='/tabscontent/homedecor-cafe-chairs'><LargeText>Cafe Chairs </LargeText></Links>


                        <Links to='/tabscontent/homedecor-gaming-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Gaming Chairs  </LargeText></Links>


                        <Links to='/tabscontent/homedecor-stools-&-pouffes' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Stools & Pouffes   </LargeText></Links>
                        <Links to='/tabscontent/homedecor-foot-stools'><LargeText>Foot Stools  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-seating-stools'><LargeText>Seating Stools  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-pouffes'><LargeText>Pouffes  </LargeText></Links>


                        <Links to='/tabscontent/homedecor-shoe-racks' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Shoe Racks  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-shoe-cabinets'><LargeText>Shoe Cabinets </LargeText></Links>
                        <Links to='/tabscontent/homedecor-open-shoe-racks'><LargeText>Open Shoe Racks   </LargeText></Links>
                        <Links to='/tabscontent/homedecor-shoe-rack-&-seat'><LargeText>Shoe Rack & Seat   </LargeText></Links>
                        <Links to='/tabscontent/homedecor-tilt-out-shoe-racks'><LargeText>Tilt Out Shoe Racks   </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 4 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/homedecor-centre-tables' ><LargeText sx={{ color: '#9d6a37' }}>Centre Tables  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-coffee-tables'><LargeText>Coffee Tables  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-coffee-table-sets'><LargeText>Coffee Table Sets  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-nesting-tables'><LargeText>Nesting Tables  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-trunks'><LargeText>Trunks </LargeText></Links>


                        <Links to='/tabscontent/homedecor-side-tables' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Side Tables  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-end-tables'><LargeText>End Tables   </LargeText></Links>
                        <Links to='/tabscontent/homedecor-c-shaped-tables'><LargeText>C Shaped Tables   </LargeText></Links>
                        <Links to='/tabscontent/homedecor-console-tables'><LargeText>Console Tables  </LargeText></Links>
                        <Links to='/tabscontent/homedecor-nest-of-tables'><LargeText>Nest of Tables   </LargeText></Links>


                        <Links to='/tabscontent/homedecor-tv-&-media-units' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>TV & Media Units   </LargeText></Links>


                        <Links to='/tabscontent/homedecor-cabinets-&-sideboards' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Cabinets & Sideboards  </LargeText></Links>


                        <Links to='/tabscontent/homedecor-book-shelves' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Shelves   </LargeText></Links>


                        <Links to='/tabscontent/homedecor-book-cases ' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Cases   </LargeText></Links>

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

export default Homedecor;

