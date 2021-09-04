import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loading.css';
import loading from '../../assets/loading.png'
import Grid from '@material-ui/core/Grid';


function Loading(props) {
    return (
        <div className="load">
            <CircularProgress />
            Loading ...
        </div>
    );
}

export default Loading;