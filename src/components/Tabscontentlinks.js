import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Tabscontentlinks = () => {
    const linked = [
        {
            linkname: " 3 Seater Sofas "
        },
        {
            linkname: " 4 Seater Dining "
        },
        {
            linkname: " 4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        },
        {
            linkname: "4 Seater Dining"
        }, 
        {
            linkname: "4 Seater Dining"
        }, 
        {
            linkname: "4 Seater Dining"
        }, 
        {
            linkname: "4 Seater Dining"
        }, 
        {
            linkname: "4 Seater Dining"
        }, 
        {
            linkname: "4 Seater Dining"
        }, 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
        , 
        {
            linkname: "4 Seater Dining"
        }
    ]
    return (
        <>


            <Grid container lg={12} md={12} sm={12} xs={12} marginTop={2} marginBottom={10}>
                <Grid container sx={{ justifyContent: 'center' }}>

                    <Grid lg={10.5} md={11} sm={11} xs={11.5}>
                        <Grid lg={12} marginTop={2}>
                            <Typography fontSize={'12px'} color={'#121212'} fontFamily={'Manrope,sans-serif'}><b>MOST SEARCHED IN 3 SEATER SOFAS</b> </Typography>
       
                        </Grid>
                        <Grid container lg={12}>
                        <Grid container lg={12}>
{linked.map((data)=>(
   
   <Grid lg={0.9} >
    <Link style={{ textDecoration: "none" }}><Typography fontSize={'12px'} color={'#848484'} fontFamily={'Manrope,sans-serif'}>{data.linkname} <span>|</span></Typography></Link>
    </Grid>
   
))}
</Grid>
 </Grid>

                        

                    </Grid>

                </Grid>


            </Grid>
        </>
    )
}

export default Tabscontentlinks;