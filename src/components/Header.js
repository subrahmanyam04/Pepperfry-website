import * as React from 'react';
import { useState } from "react";
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';

import { useMediaQuery } from '@mui/material';
//dialog api's ////////////////////////////////////////// 

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

// firebase api's //////////////////////////////////////

import { auth } from '../firebase';
import { provider, providerFb } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom'



    // console.log(params)

// component styles functions ////////////////////////////////////////////

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  borderBottom: "1px solid grey",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// main Header functional component /////////////////////////////////

const Header = (props) => {

  //navbar events //////////////////////////////// 
  // const params = useParams()

  // console.log('heder',params)

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // model form events signup /////////////////////////

  const [open, setOpen] = React.useState(false);
  // const isMobile = useMediaQuery('(max-width:600px)');


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);

  };

  // google authentication////////////////////////

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {

        console.log(',pmvdmvps,mxmamcsc,lkd', result)
        navigate('/');
       
  
       
        setOpen(false);
        

        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        const accessToken = result.user.accessToken;
        // const displayName = result.user.displayName;
        localStorage.setItem("accesstoken", accessToken);
  
        localStorage.setItem("name", name);
        console.log("name is ", name)
        localStorage.setItem("email", email);
        // localStorage.setItem("displayName", displayName);
        // console.log("name is ", displayName);
        localStorage.setItem("profilePic", profilePic);
        console.log("name is ", profilePic);
      
      })
      .catch((error) => {
        console.log(error);
      });
  };



  // facebook authentication /////////////////////

  const signInWithFacebook = () => {
    signInWithPopup(auth, providerFb)
      .then((result) => {
        console.log(result, 'result is this')
        navigate('/secondpage');
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        console.log("name is ", name)
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // states for login and email and password //////////////////

  const navigate = useNavigate();

  const [login, setLogin] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ...

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log('Type:', type);
    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          const user = data.user;
          const token = user && user.accessToken;
          console.log('User:', user);
          console.log('Token:', token);
          navigate("/");
          setEmail(''); // Set email to an empty string
          setPassword('');
          setOpen(false);
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else if (type === "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          // localStorage.setItem("accesstoken",User.accessToken);
          const user = data.user;
          const name = user.email
          localStorage.setItem("accesstoken", user.accessToken);
          localStorage.setItem('experationtime', user.stsTokenManager.expirationTime);
          console.log('ex time', user.stsTokenManager.expirationTime)
          console.log('name', name)
          // const accesstoken = user && user.getIdToken();
          console.log('User:', user);
          // console.log('Token:', accesstoken);
          navigate("/");
          setEmail(''); // Set email to an empty string
          setPassword('');
          setOpen(false);
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  let token = localStorage.getItem('accesstoken')
  let name = localStorage.getItem('name')
  // console.log('tocken',tocken)

  const handleSignout = () => {
    signOut(auth).then(val => {
      console.log(val, "val")
      navigate('/')
      localStorage.clear()
    })
  }

// Toggle data

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Button><Link to="/" style={{ textDecoration: 'none', color: "#242424" }}>Home</Link></Button>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Button><Link to="/about" style={{ textDecoration: 'none', color: "#242424" }}>About</Link></Button>
          </ListItemButton>
        </ListItem>

      </List>


    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: 'white' }}>
        <Toolbar>
          <IconButton
            color="#242424"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: 'black' } }}

          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Typography>


         {/* image icon in header */}

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', textAlign: "center" } }}
          >
            <Link to='/'> <img src='https://ii1.pepperfry.com/assets/525cc439-6893-4ba8-97bf-9e6accecf79d.png' alt='..' height='10%' width="35%" /></Link>
          </Typography>


          {/* For Large Views */}

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <List>

              <ListItem disablePadding >




                <ListItemButton >

                  {/* <Button><Link to="/about" style={{ textDecoration: 'none', color: "#242424" }}><Icon icon="line-md:home" color="#6b6b6b" width="22" height="22" /></Link></Button> */}


                  {/* <Box sx={{ flexGrow: 0, marginRight: "15px" }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                        <Icon icon="iconamoon:arrow-down-2-light" color="black" width="30" height="30" />
                      </IconButton>
                    </Tooltip> */}

                  {/* drop down */}




                  {/* <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    > */}

                  {/* <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">hii </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>

                        <Button variant="plain" onClick={handleClickOpen}>
                          Sign Up
                        </Button>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>

                        <Button variant="plain" onClick={handleSignout}>
                          Logout
                        </Button>
                      </MenuItem>

                    </Menu>
                  </Box> */}

                  {token ? (
                    <>
                     <Typography color={'#121212'} fontSize={{lg:"12px",md:"10px"}} display={{sm:"none",md:"block"}}>{name}</Typography>
                    <Box sx={{ flexGrow: 0, marginRight: "15px" }}>
                     
                      <Tooltip title="Open settings">
                        
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Icon icon="iconamoon:arrow-down-2-light" color="black" width="30" height="30" />
                        </IconButton>
                      </Tooltip>
                      {/* drop down */}
                      <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">hii </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Button variant="plain" onClick={handleClickOpen}>
                            Sign Up
                          </Button>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Button variant="plain" onClick={handleSignout}>
                            Logout
                          </Button>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>
                        <Typography color={'#121212'} fontSize={{lg:"12px",md:"10px",sm:"10px"}} display={{sm:"block",md:"none"}}>{name}</Typography>
                        </MenuItem>
                      </Menu>
                    </Box>
                    </>
                  ) : (
                    <>
                      <Grid container columns={{ lg: 12 }}>
                        <Grid lg={12} style={{ color: "#121212" }} onClick={handleClickOpen}>

                          <Typography variant="subtitle2" fontSize={{ sm: '9px', lg: "11px", md: '10px' }} sx={{ fontFamily: "Manrope,sans-serif", marginLeft: "23px" }} noWrap><b>Sign Up Now</b></Typography>
                          <Typography variant="subtitle2" fontSize={{ sm: '9px', lg: "11px", md: '10px' }} sx={{ fontFamily: "Manrope,sans-serif", color: "#FF7035" }} noWrap>Get Extra 20% Off</Typography>

                        </Grid>
                      </Grid>
                      <Button variant="plain" onClick={handleClickOpen}>


                        <Icon icon="ion:person-outline" color="#6b6b6b" width="30" height="30" />

                      </Button>
                    </>
                  )}

                  {/* <Link to="/findstudio" style={{ textDecoration: 'none', color: "#242424" }}> */}
                  <Grid xs={5} style={{ color: "#121212" }}>

                    <Typography variant="subtitle2" fontSize={{ sm: '9px', lg: "11px", md: '10px' }} sx={{ fontFamily: "Manrope,sans-serif" }} noWrap><b>Find a</b></Typography>
                    <Typography variant="subtitle2" fontSize={{ sm: '9px', lg: "11px", md: '10px' }} sx={{ fontFamily: "Manrope,sans-serif", color: "#FF7035" }}>studio</Typography>

                  </Grid>
                  {/* </Link> */}

                  <Button><Link to="/findstudio" style={{ textDecoration: 'none', color: "#242424" }}><Icon icon="line-md:home" color="#6b6b6b" width="25" height="25" /></Link></Button>

                  {token ? (

                    <Button><Link to="/wishlist" style={{ textDecoration: 'none', color: "#242424" }}><Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" color="#6b6b6b" width="25" height="25" /> </Link></Button>
                  ) : (

                    <Button><Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" color="#6b6b6b" width="25" height="25" onClick={handleClickOpen} /> </Button>


                  )}

                  {/* <Button><Link to="/" style={{ textDecoration: 'none', color: "#242424" }}><Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" color="#6b6b6b" width="25" height="25" /> </Link></Button> */}
                  {/* <ListItemText primary="sales" /> */}
                  <Button><Link to="/cart" style={{ textDecoration: 'none', color: "#242424" }}><Icon icon="circum:shopping-cart" color="#6b6b6b" width="25" height="25" /> </Link></Button>
                </ListItemButton>
              </ListItem>
            </List>

          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
          
        </Drawer>
      </nav>

      {/* dialog for sign up */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // xs={setOpen(false)}
        sx={{
          display: { xs: 'none', sm: 'block' }, // Hide on xs (mobile) view
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton >
        <DialogTitle id="alert-dialog-title">
          <Grid container sx={{ justifyContent: "center" }}>

            <Grid item xs={11}  >
              <img src='https://ii1.pepperfry.com/assets/7e9657cd-cb98-40cf-989d-5e5c1d9d4fa5.jpg' alt='...' style={{ width: '100%', height: '30%', marginTop: "25px" }} />
              <DialogContent>
                <DialogContentText id="alert-dialog-description" justifyContent={'center'} alignItems={'center'}>
                  <Typography color={'#9D6A37'} fontSize={'20px'} textAlign={'center'}><b>Sign Up Or Log In</b></Typography>



                  <Grid container >
                    <Grid item xs={12} md={12} sm={12} lg={12} >
                      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
                        <Stack spacing={2}>

                          <TextField
                            required
                            variant="outlined"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter Your Mail Id"
                            className="form-control"
                            value={email}
                            onChange={handleEmailChange}
                          />
                          <TextField
                            required
                            variant="outlined"
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={password}
                            onChange={handlePasswordChange}
                          />

                          {/* <Grid container spacing={0}>
                            <Grid xs={12} sm={12} lg={12} md={12} > */}
                          <Button variant="contained" type="submit">{login ? "SignIn" : "SignUp"}</Button>

                          <Typography textAlign={'center'}>
                            if you don't have an account
                            <Button
                              className={login == false ? "activeColor" : "pointer"}
                              onClick={() => setLogin(false)}
                            >
                              Sign Up
                            </Button>
                            else
                            <Button
                              className={login == true ? "activeColor" : "pointer"}
                              onClick={() => setLogin(true)}
                            >
                              Sign In
                            </Button>
                          </Typography>

                          {/* </Grid>
 
                          </Grid> */}

                          <Grid container spacing={0}>
                            <Grid xs={12} sm={12} lg={12} md={12} textAlign={'center'}>
                              <Typography sx={{ fontSize: "12px", fontFamily: "Manrope,sans-serif" }}>
                                By continuing, you agree to our Terms & Conditions
                              </Typography>
                              <Typography sx={{ fontSize: "14px", fontFamily: "Manrope,sans-serif" }}>
                                Or
                              </Typography>
                              <Typography sx={{ fontSize: "12px", fontFamily: "Manrope,sans-serif" }}>
                                Continue with
                              </Typography>

                            </Grid>

                          </Grid>


                          <Button variant="contained" type="button" style={{ backgroundColor: 'whitesmoke', color: "#121212" }} onClick={signInWithGoogle}>
                            <Icon icon="flat-color-icons:google" width="25" height="25" /><Typography marginLeft={2}>Google</Typography>
                          </Button>

                          <Button variant="contained" type="button" style={{ backgroundColor: 'whitesmoke', color: "#121212" }} onClick={signInWithFacebook}>
                            <Icon icon="ri:facebook-fill" color="#3d6ad6" width="24" height="24" /><Typography marginLeft={2}>Facebook</Typography>
                          </Button>



                          <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} >

                            {/* grid one */}

                            <Grid item xs={4} sm={4} md={4} lg={4} marginTop={'50px'}>
                              <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} justifyContent={{ lg: "center", md: "center", sm: "center" }} >

                                <Grid item lg={6} md={6} sm={6} >
                                  <img src='https://ii1.pepperfry.com/assets/w22-delivery-usp-icon.svg' alt='' />
                                </Grid>
                                <Grid item lg={8} md={8} sm={8}>
                                  <Typography marginTop={{ xs: 0, lg: 0, sm: 0, md: 0 }} color={'#5B5B5B'} fontSize={{ xs: '12px', lg: "12px", sm: "10px", md: "12px" }} fontFamily={'Manrope,sans-serif'} textAlign={{ lg: "center", md: "center", sm: "center" }}>10 Million Happy Deliveries</Typography>
                                </Grid>


                              </Grid>
                            </Grid>

                            {/* grid 2 */}

                            <Grid item xs={4} sm={4} md={4} lg={4} marginTop={'50px'}>
                              <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} justifyContent={{ lg: "center", md: "center", sm: "center" }}>

                                <Grid item lg={6} md={6} sm={6} >
                                  <img src="https://ii1.pepperfry.com/assets/w22-studio-usp-icon.svg" alt='' />
                                </Grid>
                                <Grid item lg={8} md={8} sm={8}>
                                  <Typography marginTop={{ xs: 0, lg: 0, sm: 0, md: 0 }} color={'#5B5B5B'} fontSize={{ xs: '12px', lg: "12px", sm: "10px", md: "12px" }} fontFamily={'Manrope,sans-serif'} textAlign={{ lg: "center", md: "center", sm: "center" }}>200+ Studios Across 100+ Cities</Typography>
                                </Grid>


                              </Grid>
                            </Grid>

                            {/* grid 3 */}


                            <Grid item xs={4} sm={4} md={4} lg={4} marginTop={'50px'}>
                              <Grid container spacing={{ xs: 0, md: 0, lg: 0, sm: 0 }} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} justifyContent={{ lg: "center", md: "center", sm: "center" }}>

                                <Grid item lg={6} md={6} sm={6} >
                                  <img src='https://ii1.pepperfry.com/assets/w22-return-usp-icon.svg ' alt='' />
                                </Grid>
                                <Grid item lg={8} md={8} sm={8}>
                                  <Typography marginTop={{ xs: 0, lg: 0, sm: 0, md: 0 }} color={'#5B5B5B'} fontSize={{ xs: '12px', lg: "12px", sm: "10px", md: "12px" }} fontFamily={'Manrope,sans-serif'} textAlign={{ lg: "center", md: "center", sm: "center" }}>7 Day Easy Return Policy</Typography>
                                </Grid>


                              </Grid>
                            </Grid>

                          </Grid>






                        </Stack>
                      </form>
                    </Grid>
                  </Grid>



                </DialogContentText>
              </DialogContent>
            </Grid>

          </Grid>
        </DialogTitle>

      </Dialog>



    </Box>






  );
}


export default Header;