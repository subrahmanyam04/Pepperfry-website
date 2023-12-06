import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import purple from '@material-ui/core/colors/purple';
import { green, orange } from '@mui/material/colors';


let theme = createTheme({



  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.

    fontSize: "16px",
    fontFamily: 'Manrope,sans-serif',
  },
  palette: {
    primary: {
      main: "#fb6129",
    },
    secondary: {
      main: green[500],
    },
    tertiary: {
      main: "#616161",
    },
    info: {
      main: "#d50000",
    },
    
    black: {
      main: "#121212",
    },

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },



});

export default (theme);