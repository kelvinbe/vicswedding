import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import '../Services/Services.css';
import { Fade } from 'react-slideshow-image';
import AOS from 'aos';
import vic3 from '../../assets/vic3.jpg'
import vic2 from '../../assets/vic2.jpg'
import flowers from '../../assets/flowers.png'



import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms

});


const fadeImages = [
    vic2,
    vic3
  ];





const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${fadeImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${fadeImages[1]})`}}>
            </div>
          </div>
        </Fade>
      </div>
    )
}





function Service(props) {

    const [scrollNav, setScrollNav] = useState(false)


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
        <div className="service">
           <img
        component='img'
        className="flowers-services"
        height="140"
        src={flowers}/>
          <Grid container>
            
            
        </Grid>
             <Grid item xs={12} sm={6} md={8} sm={12}>
           {/* <h1 className="text-service">GROOM & BRIDE</h1>  */}
           <Grid item xs ={12} sm={6} md={7} sm={12}>
                {Slideshow()}
            </Grid>
           {/* <h3 style={{color: '#965A00'}}>Groom</h3>
    <Typography variant="h3" style={{fontFamily: 'Birthstone', color: 'dark-grey', fontSize: '25px'}}>
    "Leo ipsum justo, enim augue neque, eu pulvinar etiam. 
    Elit quam gravida a nec. Mauris eu nulla vulputate vitae nisl, 
    massa vulputate tellus sit. Sit integer cras nibh sodales."
  
    </Typography>

    <h3 style={{color: '#965A00'}}>Bride</h3>
    <Typography variant="h3" style={{fontFamily: 'Birthstone', color: 'dark-grey', fontSize: '25px'}}>
    "Leo ipsum justo, enim augue neque, eu pulvinar etiam. 
    Elit quam gravida a nec. Mauris eu nulla vulputate vitae nisl, 
    massa vulputate tellus sit. Sit integer cras nibh sodales.""

    </Typography> */}

            </Grid>
        
        </div>
    );
}

export default Service;