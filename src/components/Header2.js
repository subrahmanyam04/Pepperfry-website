import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Furniturtab from './Furnituretab';
import Sofasandseatings from './Sofasandseatings';
import Mattressers from './Mattressers';
import Homedecor from './Homedecor';
import Furnishings from './Furnishings';
import Kitchenanddining from './Kitchenanddining';
import Lampandliughtenings from './Lampsandlightenings';
import Homeutility from './Homeutility';
import Appliances from './Appliances';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     textDecoration: 'none',
//     color: theme.palette.text.secondary,
//   }));


const Header2 = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabHover = (index) => {
    setValue(index);
  };

  const handleTabLeave = () => {
    setValue(null);
  };

  return (
    <Box sx={{ width: '100%' }} onMouseLeave={handleTabLeave}>
      <Box sx={{ backgroundColor: "#5b5b5b", }}>
        <Tabs value={value} onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example" sx={{
            justifyContent: 'center',

            '@media (min-width: 1044px)': {
              marginLeft: "130px"
            },

            //   '& .MuiTabs-flexContainer': {
            //     backgroundColor: '#5b5b5b', // Change the background color of the tabs
            //   },
            '& .MuiTab-root': {
              fontSize: "14px",
              fontFamily: "Poppins,sans-serif",
              textTransform: "capitalize",
              color: '#ffffff', // Default text color
              transition: 'color 0.3s', // Smooth transition for color changes
              '&:hover': {
                color: 'orange',


              },
            },
            '& .MuiTab-root.Mui-selected': {
              color: 'orange', // Change the text color of the selected tab
            },
            '& .MuiTabs-indicator': {
              display: 'block', // Remove the tab indicator bar
              backgroundColor: "orange",
              height: "5px",
              borderRadius: "1px",
              width: "100%"
            },
          }}>
          <Tab label="Furniture" {...a11yProps(0)} onMouseEnter={() => handleTabHover(0)} />
          <Tab label="Sofas & Seatings" {...a11yProps(1)} onMouseEnter={() => handleTabHover(1)} />
          <Tab label="Mattressers" {...a11yProps(2)} onMouseEnter={() => handleTabHover(2)} />
          <Tab label="Home Decor" {...a11yProps(3)} onMouseEnter={() => handleTabHover(3)} />
          <Tab label="Furnishings" {...a11yProps(4)} onMouseEnter={() => handleTabHover(4)} />
          <Tab label="Kitchen & Dinning" {...a11yProps(5)} onMouseEnter={() => handleTabHover(5)} />
          <Tab label="Lamps & Ligtening" {...a11yProps(6)} onMouseEnter={() => handleTabHover(6)} />
          <Tab label="Home Utility" {...a11yProps(7)} onMouseEnter={() => handleTabHover(7)} />
          <Tab label="Appliances" {...a11yProps(8)} onMouseEnter={() => handleTabHover(8)} />
          <Tab label="Modular" {...a11yProps(9)} onMouseEnter={() => handleTabHover(9)} />


        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Furniturtab/>

      </TabPanel>
      <TabPanel value={value} index={1}>
       <Sofasandseatings/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Mattressers/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Homedecor/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Furnishings/>
      </TabPanel>
      <TabPanel value={value} index={5}>
       <Kitchenanddining/>
      </TabPanel>
      <TabPanel value={value} index={6}>
       <Lampandliughtenings/>
      </TabPanel>
      <TabPanel value={value} index={7}>
       <Homeutility/>
      </TabPanel>
      <TabPanel value={value} index={8}>
       <Appliances/>
      </TabPanel>
      <TabPanel value={value} index={9}>
        tab9
      </TabPanel>

    </Box>
  );
}
export default Header2;