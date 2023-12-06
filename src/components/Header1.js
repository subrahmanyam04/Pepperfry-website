import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const Header1 = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{
      maxWidth: { xs: 500, sm: 1180 }, bgcolor: 'White', marginTop: "75px", '@media (min-width: 1044px)': {
        marginLeft: "190px"
      }, '@media (min-width: 1024px) and (max-width: 1024px)': {
        marginLeft: "10px" // Center only at 1024px width
      },
    }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          justifyContent: 'center',

          // '& .MuiTabs-flexContainer': {
          //   backgroundColor: 'lightblue', // Change the background color of the tabs
          // },
          '& .MuiTab-root': {
            fontSize: "12px",
            fontFamily: "Manrope,sans-serif",
            color: '#5B5B5B', // Default text color
            transition: 'color 0.3s', // Smooth transition for color changes
            '&:hover': {
              color: 'orange', // Text color on hover
            },
          },
          '& .MuiTab-root.Mui-selected': {
            color: 'orange', // Change the text color of the selected tab
          },
          '& .MuiTabs-indicator': {
            display: 'none', // Remove the tab indicator bar
          },
        }}

      >
        <Tab label="SELL ON PEPPERYFRY" />
        <Tab label="BECOME A FRANCHISEE" />
        <Tab label="BUY IN BULK" />
        <Tab label="GIFT CARDS" />
        <Tab label="GET INSPIRED" />
        <Tab label="TRACK YOUR ORDER" />
        <Tab label="CONTACT US" />
      </Tabs>


    </Box>
  );
}

export default Header1;