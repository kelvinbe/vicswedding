import React, {useState, useEffect} from 'react';

import engaged from '../../assets/engaged.jpg'
import rura from '../../assets/rura.jpg'
import rura1 from '../../assets/rura1.jpg'
import rura2 from '../../assets/rura2.jpg'
import rura3 from '../../assets/rura3.jpg'
import rura4 from '../../assets/rura4.jpg'
import rura5 from '../../assets/rura5.jpg'





import {Tab,Tabs, Box} from '@material-ui/core';


import './ImageGrid.css'

import { motion } from 'framer-motion'


const images = [
    {key: 3, pic: engaged, tag: 0},
    {key: 17, pic: rura, tag: 1},
    {key: 18, pic: rura1, tag: 1},
    {key: 19, pic: rura2, tag: 1},
    {key: 20, pic: rura3, tag: 1},
    {key: 33, pic: rura4, tag: 1},
    {key: 34, pic: rura5, tag: 1},

]


console.log(images)
const ImageGrid = ({setSelectedImg, tag}) => {
const [filteredImages, setFilteredImages] = useState([])
const [value, setValue] = React.useState(2);


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

console.log('filteredImages', filteredImages)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };


console.log('value', value)
useEffect(() => {
// setTag(value)
// setTimeout(() => setValue(2), 1000000)

    value === 0 ? setFilteredImages(images.filter(image => image.tag === 0)) : setFilteredImages(images.filter( image => image.tag === value))
}, [value])

    return (
        <div>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Engagement" {...a11yProps(0)} />
            <Tab label="Ruracio" {...a11yProps(1)} />
            {/* <Tab label="close" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
</Box>

        <div className="img-grid">
            {
            images && filteredImages.map(pic => (
                    <motion.div className="img-wrap" key={pic.key} onClick={() => setSelectedImg(pic.pic)}
                    whileHover={{ opacity: 1}}
                    >
                        <img src={pic.pic} alt="" srcset="" />
                    </motion.div>
            ))
 }
        </div>
</div>

    )


}


export default ImageGrid


