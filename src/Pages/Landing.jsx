import React from 'react';
import PropTypes from 'prop-types';
import Home from '../components/Home/Home'
import About from '../components/About Us/About '
import Service from '../components/Services/Service'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer';
Landing.propTypes = {
    
};

function Landing(props) {
    return (
        <div>
            <Home />
            <About />
            <Service />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Landing;