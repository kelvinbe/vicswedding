import React from 'react';
import PropTypes from 'prop-types';
import '../Home/Home.css';
import student from '../../assets/student.png'
import Grid from '@material-ui/core/Grid';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 3000, // values from 0 to 3000, with step 50ms

});


Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className="home">
        <Grid container spacing={3} className="container">
            <Grid item xs={12} xl={12} className="item-text" data-aos="fade-right">
           <h1 className="text">Welcome to Ark Hostels</h1> 
            </Grid>
            <Grid item xs ={12} xl={12} className="item-img" data-aos="fade-left">
                <img src={student} alt="" className="img"/>
            </Grid>
        </Grid>
        </div>

    );
}

export default Home
