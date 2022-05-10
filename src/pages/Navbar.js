//import { IconBase } from "react-icons";
//import Homepage from "./Pages/HomePage";
import React from "react";
import { AppBar, Toolbar, Button } from '@material-ui/core';
//import "./Navbar.css";
import { BrowserRouter } from "react-router-dom";
//import CoinPage from "./Pages/CoinPage";
//import Header from "./components/Header";
//import Dashboard from "./Dashboard";
import powerstrip from "../images/powerstrip.webp"
//import Device from "./Device";
//import Devices from "./Devices";

import useStyles from "../sytlex"


const Navbar = () => {
    const classes = useStyles();

    
  return (
    <BrowserRouter>
    <AppBar className={classes.appBarx} position="static" color="inherit">
    <div className={classes.brandContainer}>
      
    <img className={classes.image} src={powerstrip} alt="icon" height="80" />
  </div>
        


<Toolbar className={classes.toolbar}>
        
        
<Button  className={classes.appnavButton} href="https://www.powerstrip.in/" > powerstrip.in </Button>



</Toolbar>

  
        
</AppBar>
    </BrowserRouter>


  );
}

export default Navbar;