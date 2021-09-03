import React from 'react';
import PropTypes from 'prop-types';
import Home from '../components/Home/Home'
import About from '../components/About Us/About '

Landing.propTypes = {
    
};

function Landing(props) {
    return (
        <div>
            <Home />
            <About />
        </div>
    );
}

export default Landing;