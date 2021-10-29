import React from 'react';
import PropTypes from 'prop-types';
import Home from '../components/Home/Home'
import About from '../components/About Us/About '
import Service from '../components/Services/Service'
import Meet from '../components/ContactUs/ContactUs'
import Roracio from '../components/Roracio/Roracio'


import Footer from '../components/Footer/Footer';
Landing.propTypes = {
    
};

function Landing(props) {


    return (
        <div>

            <Home />
            <Meet />
            <Service />
            <Roracio />
            <About />
            <Footer />
        </div>

    );
}

export default Landing;