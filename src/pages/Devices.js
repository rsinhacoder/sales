import React from "react";
import { Button } from '@material-ui/core';
import useStyles from "../sytlex"
import { BrowserRouter } from "react-router-dom";
//import Navbar from "./Navbar";
const Devices = () => {
  const classes = useStyles();

  return (
    <div>
    <BrowserRouter>
    
    <Button className={classes.appButton} color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSecOvn4bnGdTdd-lp6ftyBi8KHVYo2vsQHzjXe0OfncQoSrdw/viewform?usp=sf_link
    ">EV Dealership Form</Button>

    

    
  
    <Button className={classes.appButton} color="primary" href="https://zfrmz.in/8OYNMusHTp0E0GO1bkDg">Dealership Onboarding Form</Button>
    


    
    
    <Button className={classes.appButton} color="primary" href="https://sign.zoho.in/signform?form_link=234b4d535f495623ad92c088268547513634ec1113805018f8e9e2b1a41636e6d624e838cbbfb9101cc8c77f4d242d5324800f702db8c20cdc1f3a83b661b4d4a1f74e6e61ebc3b7#">Dealer Agreement</Button>
  

    
    
    <Button className={classes.appButton} color="primary" href="https://sheet.zohopublic.in/sheet/publishedrange/e1e9797fc7d47f7cfddaf5ff8ff51c98835aa9d08dbd8880df86bb332cdacecc?type=grid">Onboarded Dealers</Button>
    
    

    

    </BrowserRouter>
   </div>
  )
}

export default Devices