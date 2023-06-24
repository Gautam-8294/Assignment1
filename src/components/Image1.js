import React from 'react'
import Img from '../assets/img1.webp'
import "../style/image1.css"
const Image1 = () => {
    const imagestyle = {  
        maxWidth: "100%",
        left: "0",

      };
  return (
    <>

    <div className='image_container'>
      <img src={Img} alt="image" id="image" style={imagestyle}/>
    </div>

    </>
  )
}

export default Image1
