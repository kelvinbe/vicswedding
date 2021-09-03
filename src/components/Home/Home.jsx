import React from 'react';
import PropTypes from 'prop-types';
import '../Home/Home.css';
import student from '../../assets/student.png'
import Grid from '@material-ui/core/Grid';



Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className="home">
        <Grid container spacing={3} className="container">
            <Grid item xs={12} className="item-text in-left">
           <h1 className="text">Welcome to Ark Bookings</h1> 
            </Grid>
            <Grid item xs ={12} className="item-img">
                <img src={student} alt="" className="img"/>
            </Grid>
        </Grid>
        </div>

    );
}

export default Home
