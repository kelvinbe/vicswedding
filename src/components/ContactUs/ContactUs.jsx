import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import '../ContactUs/ContactUs.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
// import SimpleMap from '../map/Map';



function ContactUs(props) {
    return (
        <div>
              <div className="contact">
            <Grid item xs={12} className="item-text-about">
           <h1 className="text-contact" >Contact Us</h1> 
            </Grid>
        <Grid container className="container-about">
            
            <Grid item xs ={12} data-aos="fade-left">
                <p className="about-statement">
            Lets talk about getting you onboard, booking your room and finally get you moving in.
                </p>
            </Grid>
            <Grid item xs ={12} sm={4}>
                <Card>
                <CardContent>
                <PhoneInTalkIcon />

                   <div>
                   Phone: 0717171998
                       </div> 
                </CardContent>
                <CardContent>
                    <EmailIcon />
                   <div>
                   Email: vicmuthomi@gmail.com
                       </div> 
                </CardContent>
                </Card>
            </Grid>
        </Grid>
        </div>
            
        </div>
    );
}

export default ContactUs;