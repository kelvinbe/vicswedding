import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import '../About Us/About.css';
import discuss from '../../assets/explaining.svg'
import CountUp, {startAnimation}  from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms

});


const onVisibilityChange = isVisible => {
    if (isVisible) {
        if (this.state.scrollStatus) {
            startAnimation(this.myCountUp);
            this.setState({ scrollStatus: false });
        }
    }
}





function About(props) {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <div className="about">
            <Grid item xs={12} className="item-text-about" data-aos="fade-right" >
           <h1 className="text" >About Us</h1> 
            </Grid>
        <Grid container spacing={3} className="container-about">
            
            <Grid item xs ={12} data-aos="fade-left">
                <p className="about-statement">
            We are an establishment that believes in the investment of our youth through education.
            Thus we seek to solve the problem of accomodation and living for students as they pursue their education
                </p>
            </Grid>
            <VisibilitySensor delayedCall>
            <Grid item xs ={12} className="item-img-about" data-aos="fade-left">
                <Grid item xs={6}
                >
            <img src={discuss} alt="" className="img-about"/>

                </Grid>
                <Grid item xs={6} className="counter-container">
                <CountUp start={0} end={10} duration={2.75}  className="counter"/>Yrs of service
                </Grid>
            </Grid>
            </VisibilitySensor>
        </Grid>
        </div>
    );
}

export default About;