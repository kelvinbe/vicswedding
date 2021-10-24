import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loading.css';
import loading from '../../assets/wedload.gif'
import flowers from '../../assets/maua.png'
import ring from '../../assets/Vector.png'

import Grid from '@material-ui/core/Grid';



function Loading(props) {
    return (
        <div className="load">
            <Grid item xs ={12} xl={12} l={12} sm={12} className="img-loading">
            {/* <img src={flowers} alt="" srcset="" className="flowers" /> */}
            <h1 className="title">Victor {<img src={ring} alt="" srcset="" className="gif" />} Sharon</h1>
           <img style={{width: '277px'}} src={loading} alt="" srcset="" className="gif" />
            </Grid>
        </div>
    );
}

export default Loading;