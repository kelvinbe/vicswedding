import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import '../About Us/About.css';

import flowers from '../../assets/flowers.png'
import rings from '../../assets/rings.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Dialog, DialogActions, Slide, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
// ..
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms

});



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function About(props) {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="about">
            <Grid item xs={12} className="item-text-about">
           <h1 className="text" >Support Us</h1> 
            </Grid>
        <Grid container className="container-about">
       <img
        component='img'
        className="flowers"
        height="140"
        src={flowers}/>
        <Card>

        <CardContent>
        
    <img src={rings} alt="" srcset="" style={{width: '70px', marginTop: '50px'}}/>
    <Typography variant="h3" style={{fontFamily: 'Birthstone', color: '#965A00'}}>
        Support Us
    </Typography>
    <Typography variant="h3" style={{fontFamily: 'Birthstone', color: '#965A00', fontSize: '25px'}}>
        Stand with us on this journey
    </Typography>
      <CardActions>
        <Button variant="contained" className="button-color" style={{color: 'white !important'}} onClick={handleClickOpen}>Support</Button>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thank You For Your Support!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please Send your contribution to the following Mpesa Number <span style={{color: 'blue'}}>0793878628</span>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </CardActions>
      </CardContent>
    </Card>

        </Grid>
        </div>
    );
}

export default About;