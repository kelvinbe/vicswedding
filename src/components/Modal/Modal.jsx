import React from 'react';
import './Modal.css'


const Modall = ({selectedImg, setSelectedImg}) => {


        const handleClick= (e) => {

            if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
                
            }
        }

    return(
        <div  className="backdrop" onClick={handleClick}>

            <img src={selectedImg} alt="noimage" srcset="" />

        </div>
    )
}

export default Modall;