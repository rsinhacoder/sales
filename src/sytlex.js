import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBarx: {
    borderRadius: 15,

    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'Left',
    padding: '10px 50px',
    background: "rgba(27, 29, 32, 70)",
    boxShadow: "5px",
    border: "2px solid lighten(tomato, 15%)",
    //borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    userselect: "none", 

    
  }, 
  appBar: {
    width: "200px",
    height: "60px",
    margin: "2em auto",
    display: "block",
    backgroundColor: "teal",
    color: "white",
    boxShadow: "5px",
    border: "2px solid lighten(tomato, 15%)",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    userselect: "none",

    
  },
  appButton: {
      width: "200px",
      height: "60px",
      margin: "2em auto",
      display: "block",
      backgroundColor: "teal",
      color: "white",
      boxShadow: "5px",
      border: "2px solid lighten(tomato, 15%)",
      borderRadius: "10px",
      position: "relative",
      overflow: "hidden",
      userselect: "none",
  },
  appnavButton: {


    color: "aquamarine",
  },

  heading: {
 
position: "absolute",
left: "6.22%",
right: "82.74%",
top: "4.16%",
bottom: "91.73%",




  },
  image: {
    height: "39.46392822265625px",
    width: "167px",
    left: "94px",
    top: "40px",
  
    
    
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
})); 
