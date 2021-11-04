import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import '../ContactUs/Meet.css';
import { Fade } from 'react-slideshow-image';
import AOS from 'aos';
import separator from '../../assets/separator.png'
import vic2 from '../../assets/victorpic.jpg'
import vic3 from '../../assets/victorpic1.jpg'
import sha from '../../assets/Sharon.jpg'
import sha1 from '../../assets/SharonPic.jpg'



import { Typography } from '@material-ui/core';
import flowers from '../../assets/flowers.png'
import Time from './timer';
import ShowMoreText from "react-show-more-text";


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
            <div style={{'backgroundImage': `url(${fadeImages[0]})`,'filter': 'grayscale(100%)'}}>
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

const fadeImages1 = [
  sha1,
  sha
];

const Slideshow1 = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${fadeImages1[0]})`,'filter': 'grayscale(100%)'}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${fadeImages1[1]})`}}>
          </div>
        </div>
      </Fade>
    </div>
  )
}




function Meet(props) {

 function  executeOnClick(isExpanded) {
    console.log(isExpanded);
}


    const [scrollNav, setScrollNav] = useState(false)
    const [showText, setShowText] = useState(false)
    const [showTextVic, setShowTextVic] = useState(false)



  const showTypo = () => {

    setShowText(true)
  }

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
        <div className="meet">
           {/* <img
        component='img'
        className="flowers-meet"
        height="140"
        src={flowers}/> */}
           <h1 className="text-service">MEET</h1> 
       

          <Grid container className="intros" spacing={3}>
          <Grid xs={12} md={3} className="photos">
            {Slideshow1()}
              <div className="names">
             <h3>Sharon Muthoni</h3>
            </div> 
            <div variant="h3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" style={{fontFamily: 'Birthstone', color: 'dark-grey', fontSize: '25px'}}>
      {!showTextVic && <h3 style={{fontFamily: 'Birthstone', color: 'dark-grey', fontSize: '25px', fontWeight: '100'}}>
        "I will begin my message simply from God. 
    God is the creator God. In His wisdom, He revealed Himself through the Holy Scriptures. 
    I believe in His Holy Word. His word has guided every decision that I have made with regards to my relationship with Sharon. 

<a href="javascript:void(0);" onClick={() => setShowTextVic(!showTextVic)}>Show More</a>
        </h3>}

        {showTextVic && <Typography variant="h3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  style={{fontFamily: 'Birthstone', color: 'dark-grey', fontSize: '25px', fontWeight: '100'}}>
    "I will begin my message simply from God. 
    God is the creator God. In His wisdom, He revealed Himself through the Holy Scriptures. 
    I believe in His Holy Word. His word has guided every decision that I have made with regards to my relationship with Sharon. 
    The decision I made to marry her was simply informed from the truth of scripture. 
    Scripture tells me that Christ laid down his life, so that I may live by faith in Him. He suffered, bled, and died on my behalf so that I may be rescued from the guilt and penalty of my sin. 
    This was/is God’s truest expression of what love is. 
Romans 5:6 – 8 For while we were still weak, at the right time Christ died for the ungodly. 
7 For one will scarcely die for a righteous person—though perhaps for a good person one would dare even to die— 8 but God shows his love for us in that while we were still sinners, Christ died for us.
Therefore, in a similar manner, I desire to lay down my life for this wonderful lady by the name Sharon Muthoni; daughter of the Most High God. 
By the grace of God, it is my prayer that I will grow to be patient with her, kind, selfless and to ever point her to her Savior, Redeemer, and Friend – The Lord Jesus Christ. 
Since marriage is an institution created by God, 
I pray that Only He may receive all the glory through our union. 
To the praise of his glorious grace, with which he has blessed us in the Beloved. Amen. 
"<a href="javascript:void(0);" onClick={() => setShowTextVic(!showTextVic)}>Show Less</a>
  
    </Typography> }
  
    </div>
            </Grid> 
     
            <Grid xs={12} md={2} className="separator">
              <img src={separator} alt="" style={{width: '160px', height: '100px'}}/>
            </Grid>

            <Grid xs={12} md={3} className="photos">
              {Slideshow()}
             <div className="names">
             <h3>Victor Muthomi</h3>
               </div> 
               {/* <h3 style={{color: '#965A00'}}>Groom</h3> */}
     
     {!showText && <h3 style={{fontFamily: 'Birthstone', color: 'dark-grey', fontSize: '25px', fontWeight: '100'}}>
        "I will begin my message simply from God. 
    God is the creator God. In His wisdom, He revealed Himself through the Holy Scriptures. 
    I believe in His Holy Word. His word has guided every decision that I have made with regards to my relationship with Sharon. 
<a href="javascript:void(0);" onClick={() => setShowText(!showText)}>Show More</a>
        </h3>}


   {showText && <Typography variant="h3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  style={{fontFamily: 'Birthstone', color: 'dark-grey', fontSize: '25px', fontWeight: '100'}}>
    "I will begin my message simply from God. 
    God is the creator God. In His wisdom, He revealed Himself through the Holy Scriptures. 
    I believe in His Holy Word. His word has guided every decision that I have made with regards to my relationship with Sharon. 
    The decision I made to marry her was simply informed from the truth of scripture. 
    Scripture tells me that Christ laid down his life, so that I may live by faith in Him. He suffered, bled, and died on my behalf so that I may be rescued from the guilt and penalty of my sin. 
    This was/is God’s truest expression of what love is. 
Romans 5:6 – 8 For while we were still weak, at the right time Christ died for the ungodly. 
7 For one will scarcely die for a righteous person—though perhaps for a good person one would dare even to die— 8 but God shows his love for us in that while we were still sinners, Christ died for us.
Therefore, in a similar manner, I desire to lay down my life for this wonderful lady by the name Sharon Muthoni; daughter of the Most High God. 
By the grace of God, it is my prayer that I will grow to be patient with her, kind, selfless and to ever point her to her Savior, Redeemer, and Friend – The Lord Jesus Christ. 
Since marriage is an institution created by God, 
I pray that Only He may receive all the glory through our union. 
To the praise of his glorious grace, with which he has blessed us in the Beloved. Amen.
"<a href="javascript:void(0);" onClick={() => setShowText(!showText)}>Show Less</a>
  
    </Typography> }
            </Grid>
 
          </Grid>

          <Grid container style={{justifyContent: 'center'}}>
            <Grid style={{textAlign: 'center'}}>
              <h2 className="married" style={{color: '#dcc8b4', fontFamily: "Alex Brush",fontWeight: '400',lineHeight: '1.2'}}>
               We Are Getting Married
              </h2>
              <p style={{color: '#888888', fontSize: '120%', fontStyle: 'italic'}}>
                on 29 January, 2022-Nairobi, Kenya
              </p>
            </Grid>
          </Grid>

          <Grid container style={{justifyContent: 'center', backgroundColor: ' #ecf2f0', padding: '60px 0px'}}>
            <div style={{color: '#888',fontWeight: '400',lineHeight: '1.2', fontFamily: 'Georgia,Times,"Times New Roman",serif;', fontSize: '60px'}}>
            <Time />
            <div className="timer">
            <div style={{fontSize: '16px', width: '25%', textAlign: 'center', fontFamily: 'auto'}}>
              days
            </div>
            <div style={{fontSize: '16px', width: '25%', textAlign: 'center', fontFamily: 'auto'}}>
              hours
            </div>
            <div style={{fontSize: '16px', width: '25%', textAlign: 'center', fontFamily: 'auto'}}>
              minutes
            </div> 
            <div style={{fontSize: '16px', width: '25%', textAlign: 'center', fontFamily: 'auto'}}>
              seconds
            </div>  
            </div>   
            </div>
            
          </Grid>
        
        </div>
    );
}

export default Meet;