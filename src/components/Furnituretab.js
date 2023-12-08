import { Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Furniturtab = () => {
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

    const navigate = useNavigate();

    const handleClick = (path) => {
        const url = path
        // window.location.href = '/tabscontent/furniture-3-seater-sofas';
        window.location.href = url;
        // navigate("/tabscontent/furniture-3-seater-sofas");

    };
    // const handleClick2 = () => {
    //     window.location.href = '/tabscontent/furniture-1-seater-recliners';
    //     // navigate("/tabscontent/furniture-1-seater-recliners");
    // };

    

    //   const handleClick = (path) => {
    //     // location.reload();
    //     window.location.reload();
    //     navigate(path);
    //   };

    return (
        <>
            <Grid container lg={12} md={12} sm={12} sx={{ backgroundColor: 'pink', justifyContent: 'center' }} >

                <Grid container lg={10.5} md={11} sm={12} sx={{ backgroundColor: 'whitesmoke' }} >

                    {/* tabpannel column 1 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/furniture-sofas' ><LargeText sx={{ color: '#9d6a37' }}>Sofas</LargeText></Links>
                        {/*<Links to='/tabscontent/furniture-3-seater-sofas'><LargeText sx={{ color: "red" }} >3 Seater Sofas </LargeText></Links>*/}
                        <LargeText sx={{color:"red"}} onClick={() => handleClick('/tabscontent/furniture-3-seater-sofas')}>3 Seater Sofas </LargeText>
                        <Links to='/tabscontent/furniture-2-seater-sofas'><LargeText >2 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/furniture-1-seater-sofas'><LargeText>1 Seater Sofas </LargeText></Links>
                        <Links to='/tabscontent/furniture-sofa-sets'><LargeText>Sofa Sets </LargeText></Links>


                        <Links to='/tabscontent/furniture-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sectional Sofas </LargeText></Links>
                        <Links to='/tabscontent/furniture-3-seater-sofas'><LargeText>LHS Sectionals  </LargeText></Links>
                        <Links to='/tabscontent/furniture-2-seater-sofas'><LargeText>RHS Sectionals  </LargeText></Links>
                        <Links to='/tabscontent/furniture-1-seater-sofas'><LargeText>Corner Sofas </LargeText></Links>


                        <Links to='/tabscontent/furniture-sofa-cum-beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Cum Beds  </LargeText></Links>


                        <Links to='/tabscontent/furniture-sectional-sofas' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Sectional Sofas </LargeText></Links>


                        <Links to='/tabscontent/furniture-futons' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Futons  </LargeText></Links>


                        <Links to='/tabscontent/furniture-chaise-loungers' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Chaise Loungers  </LargeText></Links>

                        <Links to='/tabscontent/furniture-bean-bags' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Bean Bags  </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 2 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/furniture-recliners' ><LargeText sx={{ color: '#9d6a37' }}>Recliners </LargeText></Links>
                        {/* <Links to='/tabscontent/furniture-1-seater-recliners'><LargeText sx={{ color: "red" }} >1 Seater Recliners </LargeText></Links> */}
                        <LargeText sx={{color:"red"}} onClick={() => handleClick('/tabscontent/furniture-1-seater-recliners')}>1 Seater Recliners  </LargeText>
                        <Links to='/tabscontent/furniture-2-seater-recliners'><LargeText>2 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/furniture-3-seater-recliners'><LargeText>3 Seater Recliners  </LargeText></Links>
                        <Links to='/tabscontent/furniture-sofa-sets'><LargeText>Recliner Sets  </LargeText></Links>


                        <Links to='/tabscontent/furniture-sofa-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Sofa Chairs  </LargeText></Links>
                        <Links to='/tabscontent/furniture-wing-chairs'><LargeText>Wing Chairs   </LargeText></Links>
                        <Links to='/tabscontent/furniture-lounge-chairs'><LargeText>Lounge Chairs  </LargeText></Links>
                        <Links to='/tabscontent/furniture-slipper-chairs '><LargeText>Slipper Chairs  </LargeText></Links>
                        <Links to='/tabscontent/furniture-barrel-chairs'><LargeText>Barrel Chairs   </LargeText></Links>


                        <Links to='/tabscontent/furniture-sofa-Cum-Beds' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Settees & Benches   </LargeText></Links>
                        <Links to='/tabscontent/furniture-settees'><LargeText>Settees </LargeText></Links>
                        <Links to='/tabscontent/furniture-benches'><LargeText>Benches </LargeText></Links>
                        <Links to='/tabscontent/furniture-recamiers'><LargeText>Recamiers </LargeText></Links>


                        <Links to='/tabscontent/furniture-ottomans' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Ottomans </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 3 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/furniture-chairs' ><LargeText sx={{ color: '#9d6a37' }}>Chairs </LargeText></Links>
                        <Links to='/tabscontent/furniture-arm-chairs'><LargeText>Arm Chairs </LargeText></Links>
                        <Links to='/tabscontent/furniture-rocking-chairs'><LargeText>Rocking Chairs </LargeText></Links>
                        <Links to='/tabscontent/furniture-folding-chairs'><LargeText>Folding Chairs </LargeText></Links>
                        <Links to='/tabscontent/furniture-iconic-chairs'><LargeText>Iconic Chairs</LargeText></Links>
                        <Links to='/tabscontent/furniture-cafe-chairs'><LargeText>Cafe Chairs </LargeText></Links>


                        <Links to='/tabscontent/furniture-gaming-chairs' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Gaming Chairs  </LargeText></Links>


                        <Links to='/tabscontent/furniture-stools-&-pouffes' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Stools & Pouffes   </LargeText></Links>
                        <Links to='/tabscontent/furniture-foot-stools'><LargeText>Foot Stools  </LargeText></Links>
                        <Links to='/tabscontent/furniture-seating-stools'><LargeText>Seating Stools  </LargeText></Links>
                        <Links to='/tabscontent/furniture-pouffes'><LargeText>Pouffes  </LargeText></Links>


                        <Links to='/tabscontent/furniture-shoe-racks' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Shoe Racks  </LargeText></Links>
                        <Links to='/tabscontent/furniture-shoe-cabinets'><LargeText>Shoe Cabinets </LargeText></Links>
                        <Links to='/tabscontent/furniture-open-shoe-racks'><LargeText>Open Shoe Racks   </LargeText></Links>
                        <Links to='/tabscontent/furniture-shoe-rack-&-seat'><LargeText>Shoe Rack & Seat   </LargeText></Links>
                        <Links to='/tabscontent/furniture-tilt-out-shoe-racks'><LargeText>Tilt Out Shoe Racks   </LargeText></Links>

                    </Grid>

                    {/* tabpannel column 4 */}

                    <Grid lg={1.5} md={1.7} sm={2} marginBottom={15}>
                        <Links to='/tabscontent/furniture-centre-tables' ><LargeText sx={{ color: '#9d6a37' }}>Centre Tables  </LargeText></Links>
                        <Links to='/tabscontent/furniture-coffee-tables'><LargeText>Coffee Tables  </LargeText></Links>
                        <Links to='/tabscontent/furniture-coffee-table-sets'><LargeText>Coffee Table Sets  </LargeText></Links>
                        <Links to='/tabscontent/furniture-nesting-tables'><LargeText>Nesting Tables  </LargeText></Links>
                        <Links to='/tabscontent/furniture-trunks'><LargeText>Trunks </LargeText></Links>


                        <Links to='/tabscontent/furniture-side-tables' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>Side Tables  </LargeText></Links>
                        <Links to='/tabscontent/furniture-end-tables'><LargeText>End Tables   </LargeText></Links>
                        <Links to='/tabscontent/furniture-c-shaped-tables'><LargeText>C Shaped Tables   </LargeText></Links>
                        <Links to='/tabscontent/furniture-console-tables'><LargeText>Console Tables  </LargeText></Links>
                        <Links to='/tabscontent/furniture-nest-of-tables'><LargeText>Nest of Tables   </LargeText></Links>


                        <Links to='/tabscontent/furniture-tv-&-media-units' ><LargeText sx={{ color: '#9d6a37', marginTop: '20px' }}>TV & Media Units   </LargeText></Links>


                        <Links to='/tabscontent/furniture-cabinets-&-sideboards' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Cabinets & Sideboards  </LargeText></Links>


                        <Links to='/tabscontent/furniture-book-shelves' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Shelves   </LargeText></Links>


                        <Links to='/tabscontent/furniture-book-cases ' ><LargeText sx={{ color: '#9d6a37', marginTop: '25px' }}>Book Cases   </LargeText></Links>

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

export default Furniturtab;

