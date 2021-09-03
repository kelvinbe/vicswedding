import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import room from '../../assets/rooom.jpg'
import '../Services/Services.css';



Service.propTypes = {
    
};

function Service(props) {
    return (
        <div className="service">
             <Grid item xs={12}>
           <h1 className="text">Our Services</h1> 
            </Grid>
        <Grid container>
            <Card item xs={12}>
            <CardMedia 
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={room}
            title="Contemplative Reptile"
        />
            </Card>
            <Grid item xs ={12}>
                {/* <img src={student} alt="" className="img"/> */}
                <h1>Heloooo</h1>
            </Grid>
        </Grid>
        </div>
    );
}

export default Service;