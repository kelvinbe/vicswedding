import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import '../Roracio/Journey.css';

import AOS from 'aos';
import vic3 from '../../assets/vic3.jpg'
import vic2 from '../../assets/vic2.jpg'
import roracio from '../../assets/roracio.jpg'

import { Typography } from '@material-ui/core';
import flowers from '../../assets/flowers.png'
import ImageGrid from '../ImageGrid/ImageGrid';
import Modall  from '../Modal/Modal';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
import {Tab,Tabs, Box} from '@material-ui/core';

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms

});


const fadeImages = [
    vic2,
    vic3
  ];


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

 





function Roracio(props) {

    const [scrollNav, setScrollNav] = useState(false)
    const [selectedImg, setSelectedImg] = useState(null);




    useEffect(() => {
        window.addEventListener('scroll', changeNav)
  
      }, []);

      const changeNav = () => {
        if(window.scrollY >= 80){
          setScrollNav(true)
        } else{
          setScrollNav(false)
        }
      }

      
    return (
        <div className="journey">
           <img
        component='img'
        className="flowers-journey"
        height="140"
        src={flowers}/>
          <Grid container>
           
            
        </Grid>
             <Grid item xs={12}>
           <h1 className="text-service">THE JOURNEY</h1> 

  <Grid item xs ={12} xl={12} className="item-img">
                {/* <img src={roracio} alt="" className="img" /> */}
                <ImageGrid  setSelectedImg={setSelectedImg}/>
               {selectedImg && <Modall selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            </Grid>

           
           <h3 style={{color: '#965A00'}}>Hopes For The Future</h3>
    <Typography variant="h3" style={{fontFamily: 'Cormorant Garamond, serif', color: 'dark-grey', fontSize: '25px'}}>
    “Our hope as pilgrims is that we would strive side by side as we journey together towards our eternal home with Christ; 
    pursuing Christ, putting off sin and putting on Christ.
    What's more is that we hope that the striving and pilgrimage would be richer because of our marriage union. 
    The end goal is that we may be rooted and firmly grounded in Christ; 
    being renewed daily into image of Christ till the day the King returns,glorifies us and takes us to the celestial city. 
    To the praise of his glorious grace. Amen.”
    </Typography>

            </Grid>
        
        </div>
    );
}

export default Roracio;