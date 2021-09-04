import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import room from '../../assets/best.jpg'
import room2 from '../../assets/room.jpg'
import room3 from '../../assets/rom.png'
import '../Services/Services.css';
import { Slide } from 'react-slideshow-image';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AlarmIcon from '@material-ui/icons/Alarm';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import CountUp, {startAnimation}  from 'react-countup';
import Button from '@material-ui/core/Button';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms

});

const slideImages = [
    room,
    room2,
    room3
  ];



 

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}





function Service(props) {

    const [scrollNav, setScrollNav] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', changeNav)
  
      }, []);

      const changeNav = () => {
        if(window.scrollY >= 80){
          setScrollNav(true)
        } else{
          setScrollNav(false)
        }
      }

    return (
        <div className="service">
             <Grid item xs={12}>
           <h1 className="text">Our Services</h1> 
            </Grid>
        <Grid container>
            <Grid item xs ={12}>
                {Slideshow()}
            </Grid>
            <Grid container xs={12} className="container-services">
                <Grid xs={12} data-aos="fade-right">
               <h2 className="text">We offer accomodation that is</h2> 
                </Grid>
            <Grid item xs ={4} data-aos="fade-left">
                <AttachMoneyIcon />
                <div>
                    Affordable
                </div>
                <CountUp start={scrollNav && 0} end={100} suffix=" %" duration={7.75}  className="counter-service"/>
            </Grid>
            <Grid item xs ={4} data-aos="fade-left">
                <AlarmIcon />
               <div>Convenient</div> 
               <CountUp start={scrollNav && 0} end={100} suffix=" %" duration={7.75}  className="counter-service"/>

            </Grid>
            <Grid item xs ={4} data-aos="fade-left">
                <AirlineSeatIndividualSuiteIcon />
               <div>
               Spacious
                   </div> 
                <CountUp startOnMount={true} start={scrollNav && 0} end={100} suffix=" %" duration={7.75}  className="counter-service"/>

            </Grid>

            <Grid item xs={12}  className="service-button" data-aos="fade-bottom">
            <Button variant="outlined" >Get Booking</Button>
            </Grid>
            </Grid>
        </Grid>
        </div>
    );
}

export default Service;