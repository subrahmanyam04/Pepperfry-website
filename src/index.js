import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));



// const theme = createTheme({

//
// theme.typography.h1 = {
//   fontWeight: 800,
//   // lineHeight: 1.3,
//   // color: 'pink !important',
//   fontFamily: "ADLaM Display",
//   [theme.breakpoints.up("xs")]: {
//     fontSize: '2.85rem',
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: '4.5rem',
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: '4.8rem',
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: '5.25rem',
//   }
// };
// theme.typography.h2={
//   fontWeight: 500,
//   lineHeight: 1,
//   // color: '#000000de',
//   // color: 'pink !important',
//   letterSpacing: '-1px',
//   fontFamily: "ADLaM Display",
//   [theme.breakpoints.up("xs")]: {
//     fontSize: '2.15rem',
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: '3.05rem',
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: '3.15rem',
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: '3.35rem',
//   }
// };
// theme.typography.h3 = {
//   fontWeight: 400,
//   lineHeight: 1.4,
//   // marginTop: '0.5em',
//   // color: '#000000de',
//   // color: 'pink !important',
//   fontFamily: "ADLaM Display",
//   [theme.breakpoints.up("xs")]: {
//     fontSize: '1.55rem',
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: '2.15rem',
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: '2.35rem',
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: '2.55rem',
//   }
// };

// theme.typography.h4={
//   fontWeight: 300,
//   lineHeight: 1.4,
//   // marginTop: '0.5em',
//   // color: '#000000de',
//   // color: 'cyan !important',
//   fontFamily: "ADLaM Display",
//   [theme.breakpoints.up("xs")]: {
//     fontSize: '1.39rem',
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: '1.455rem',
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: '1.575rem',
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: '1.685rem',
//   }
// };

// theme.typography.subtitle1={
//   fontWeight: 500,
//   lineHeight: 1.4,
//   // marginTop: '0.5em',
//   // color: '#000000de',
//   // color: 'red !important',
//   fontFamily: "Ruwudu",
//   [theme.breakpoints.up("xs")]: {
//     fontSize: '0.95rem',
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: '1.25rem',
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: '1.rem',
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: '1.50rem',
//   }
// };
// theme.typography.caption={
//   fontWeight: 400,
//   lineHeight: 1.4,
//   // marginTop: '0.5em',
//   // color: '#000000de',
//   // color: 'red !important',
//   fontFamily: "Ruwudu",
//   [theme.breakpoints.up("xs")]: {
//     fontSize: '0.91rem',
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: '1.01rem',
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: '1..20rem',
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: '1.30rem',
//   }
// };
// theme.typography.text={
//   // fontWeight: 400,
//   // lineHeight: 1.7,
//   // marginTop: '0.5em',
//   // color: '#000000de',
//   // color: 'grey !important',
//   // color: 'grey',
//   fontFamily: "Manrope,sans-serif",
//   [theme.breakpoints.up("xs")]: {
//     fontSize: '12px',
//   },
//   [theme.breakpoints.up("sm")]: {
//     fontSize: '14px',
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: '16px',
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: '16px',
//   }
// };
//  });


const Root = styled('Typography')(({ theme }) => ({

  fontFamily: "Manrope,sans-serif",

  [theme.breakpoints.up('xs')]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "16px",
  },

}));


root.render(
  <Root>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
        <Outlet/>
      </BrowserRouter>
    </React.StrictMode>
  </Root>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
