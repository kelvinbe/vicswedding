import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import room from '../../assets/best.jpg'
import room2 from '../../assets/room.jpg'
import room3 from '../../assets/rom.png'
import '../Roracio/Journey.css';
import { Fade } from 'react-slideshow-image';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AlarmIcon from '@material-ui/icons/Alarm';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import CountUp, {startAnimation}  from 'react-countup';
import Button from '@material-ui/core/Button';
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
        className="flowers-services"
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
    <Typography variant="h3" style={{fontFamily: 'Birthstone', color: 'dark-grey', fontSize: '25px'}}>
    Leo ipsum justo, enim augue neque, eu pulvinar etiam. 
    Elit quam gravida a nec. Mauris eu nulla vulputate vitae nisl, 
    massa vulputate tellus sit. Sit integer cras nibh sodales. 
    Sit pharetra, tellus elit in.
    Adipiscing vulputate platea pharetra et purus ultricies. 
    Aliquam et, amet, quam neque. Pellentesque id risus
    </Typography>

            </Grid>
        
        </div>
    );
}

export default Roracio;