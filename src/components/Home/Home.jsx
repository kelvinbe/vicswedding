import React from 'react';
import PropTypes from 'prop-types';
import '../Home/Home.css';
import main from '../../assets/main.jpg'


import Grid from '@material-ui/core/Grid';
import AOS from 'aos';



// import Leaves from './leaves';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 3000, // values from 0 to 3000, with step 50ms

});


Home.propTypes = {
    
};

// const fadeImages = [
//     vic1,
//     vic2,
//     vic3
//   ];



  // const Slideshow = () => {
  //   return (
  //     <div className="slide-container">
  //       <Fade>
  //         {fadeImages.map(fadeImage, index) => {(
  //               <div className="each-fade" key={index}>
  //               <div className="image-container">
  //                 <img src={fadeImage.url} />
  //               </div>
  //               <h2>{fadeImage.caption}</h2>
  //             </div>
  //         )}}
  //       </Fade>
  //     </div>
  //   )
  // }

function Home(props) {

    return (
        
            
        <div className="home">

  
        <Grid container className="container">
            <Grid item xs={12} xl={12} className="item-text">
           <h1 className="text-home" data-aos="fade-up" >Victor & Sharon</h1> 
           <h3 className="text-home" data-aos="fade-up" data-aos-duration="2000">Are getting married</h3>  
           {/* <img src={maua} alt="" className="img" />*/}

            
            </Grid>
            <Grid item className="item-img">
                <img src={main} alt="" className="img" />

                {/* {Slideshow()} */}
            </Grid>
        </Grid>
        </div>


    );
}

export default Home
