import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { Grid, Typography } from '@mui/material';

import { Box, padding } from '@mui/system';

const Productscontentaccordian = () => {

  const data = [
    {
      Title:"Brand",
      Des:"Nuedot"

   },
   {
    Title:"Assembly",
    Des:"Carpenter Assembly"

 },
 {
  Title:"Dimensions (in Centimeters)",
  Des:"H 84 x W 193 x D 85"

},
{
  Title:"Dimensions (in Inches)",
  Des:"H 33 x W 76 x D 84"

},
{
  Title:"Primary Material",
  Des:"Fabric"

},
{
  Title:"Seating Height",
  Des:"17.5"

},{
  Title:"Warranty",
  Des:"36 months Warranty"

},{
  Title:"Weight",
  Des:"60KG"

},{
  Title:"Sku",
  Des:"FN2135198-S-PM39974"

},
  ]




  const [index, setIndex] = React.useState(0);
  const [index2, setIndex2] = React.useState(1);
  const [index1, setIndex1] = React.useState(0);
  return (
    <Grid display={{lg:'block',md:"block",sm:"block",xs:"none"}}>
    <AccordionGroup fullWidth>
      
      <Accordion
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
        }}
        sx={{padding:'7px'}}
      >
        <AccordionSummary><Typography fontSize={{ lg: '16px',md:"16px",sm:"14px",xs:"14px" }} fontFamily={'Manrope,sans-serif'} color={'#121212'}><b>Stores Near You</b></Typography></AccordionSummary>
        <AccordionDetails>
          <Typography fontSize={{ lg: '14px',md:"14px",sm:"12px",xs:"12px" }} fontFamily={'Manrope,sans-serif'} color={'#FF7035'}> Enter Pincode <span style={{ fontFamily: "Manrope,sans-serif", fontSize: "14px", color: '#5B5B5B' }}>for Details</span></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index2 === 1}
        onChange={(event, expanded) => {
          setIndex2(expanded ? 1 : null);
        }}
        sx={{padding:'7px'}}
      >
        <AccordionSummary><Typography fontSize={{ lg: '16px',md:"16px",sm:"14px",xs:"14px" }} fontFamily={'Manrope,sans-serif'} color={'#121212'}><b>Product Details</b></Typography></AccordionSummary>
        <AccordionDetails>
          <Box >
            <Grid container lg={12} md={12} sm={12} xs={12} >
              { data.map((datas)=>(
                <Grid lg={5} md={5} sm={5.5} xs={5.5}>
               <Typography fontSize={{ lg: '14px',md:"14px",sm:"12px",xs:"12px" }} fontFamily={'Manrope,sans-serif'} color={'#5B5B5B'}>
               {datas.Title}
               </Typography>
               <Typography fontSize={{ lg: '14px',md:"14px",sm:"12px",xs:"12px" }} fontFamily={'Manrope,sans-serif'} color={'#848484'}>
                {datas.Des}
               </Typography>
              </Grid>

              ))}
              
             
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index1 === 2}
        onChange={(event, expanded) => {
          setIndex1(expanded ? 2 : null);
        }}
        sx={{padding:'7px'}}
      >
        <AccordionSummary><Typography fontSize={{ lg: '16px',md:"16px",sm:"14px",xs:"14px" }} fontFamily={'Manrope,sans-serif'} color={'#121212'}><b>Specification</b></Typography></AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
     
      <Accordion
        expanded={index1 === 3}
        onChange={(event, expanded) => {
          setIndex1(expanded ? 3 : null);
        }}
        sx={{padding:'7px'}}
      >
        <AccordionSummary><Typography fontSize={{ lg: '16px',md:"16px",sm:"14px",xs:"14px" }} fontFamily={'Manrope,sans-serif'} color={'#121212'}><b>Brand And Collection Overview</b></Typography></AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index1 === 4}
        onChange={(event, expanded) => {
          setIndex1(expanded ? 4 : null);
        }}
        sx={{padding:'7px'}}
      >
        <AccordionSummary><Typography fontSize={{ lg: '16px',md:"16px",sm:"14px",xs:"14px" }} fontFamily={'Manrope,sans-serif'} color={'#121212'}><b>Care And Maintenance</b></Typography></AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index1 === 5}
        onChange={(event, expanded) => {
          setIndex1(expanded ? 5 : null);
        }}
        sx={{padding:'7px'}}
      >
        <AccordionSummary><Typography fontSize={{ lg: '16px',md:"16px",sm:"14px",xs:"14px" }} fontFamily={'Manrope,sans-serif'} color={'#121212'}><b>Seller</b></Typography></AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index1 === 6}
        onChange={(event, expanded) => {
          setIndex1(expanded ? 6 : null);
        }}
        sx={{padding:'7px'}}
      >
        <AccordionSummary><Typography fontSize={{ lg: '16px',md:"16px",sm:"14px",xs:"14px" }} fontFamily={'Manrope,sans-serif'} color={'#121212'}><b>Warranty</b></Typography></AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index1 === 7}
        onChange={(event, expanded) => {
          setIndex1(expanded ? 7 : null);
        }}
        sx={{padding:'7px'}}
      >
        <AccordionSummary><Typography fontSize={{ lg: '16px',md:"16px",sm:"14px",xs:"14px" }} fontFamily={'Manrope,sans-serif'} color={'#121212'}><b>Customer Reviews $ images</b></Typography></AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index1 === 8}
        onChange={(event, expanded) => {
          setIndex1(expanded ? 8 : null);
        }}
        sx={{padding:'7px'}}
      >
        <AccordionSummary><Typography fontSize={{ lg: '16px',md:"16px",sm:"14px",xs:"14px" }} fontFamily={'Manrope,sans-serif'} color={'#121212'}><b>Q&A</b></Typography></AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
    </Grid>
  );
}

export default Productscontentaccordian;