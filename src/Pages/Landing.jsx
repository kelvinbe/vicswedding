import React from 'react';
import PropTypes from 'prop-types';
import Home from '../components/Home/Home'
import About from '../components/About Us/About '
import Service from '../components/Services/Service'
Landing.propTypes = {
    
};

function Landing(props) {
    return (
        <div>
            <Home />
            <About />
            <Service />
        </div>
    );
}

export default Landing;