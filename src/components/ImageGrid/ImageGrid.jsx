import React, {useState, useEffect} from 'react';
import vic1 from '../../assets/vic1.jpg'
import vic2 from '../../assets/vic2.jpg'
import vic5 from '../../assets/vic5.jpg'
import vic4 from '../../assets/roracio.jpg'
import ror14 from '../../assets/RURACIOPHOTOS-385.jpg'
import ror15 from '../../assets/RURACIOPHOTOS-396.jpg'
import ror16 from '../../assets/RURACIOPHOTOS-424.jpg'
import ror17 from '../../assets/RURACIOPHOTOS-440.jpg'


import {Tab,Tabs, Box} from '@material-ui/core';


import './ImageGrid.css'

import { motion } from 'framer-motion'


const images = [
    {key: 3, pic: vic5, tag: 0},
    {key: 17, pic: ror14, tag: 1},
    {key: 18, pic: ror15, tag: 1},
    {key: 19, pic: ror16, tag: 1},
    {key: 20, pic: vic4, tag: 1},
    {key: 33, pic: ror17, tag: 1},
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


