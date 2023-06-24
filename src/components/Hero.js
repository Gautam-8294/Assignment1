import React from 'react'
import "../style/hero.css"
import Image1 from './Image1'
import Gridbox1 from './Gridbox1'
const Hero = () => {
    return (
        <>
            <div className='hero_container'>

                <h1 className='hero_heading_div'>
                    Best way to grow your local business
                </h1>
                <div className='hero_description_div'>
                    Artificial Intelligence powered easy-to-use tools to get more customers & give them a better experience
                </div>
                <div className='hero_contact'>
                    <form className='hero_form'>
                        <div className='hero_input-box'><input type='email' placeholder='ENTER YOUR EMAIL' id='hero_input-box' required /></div>
                        <div className='hero_button'><input type='submit' value="GET DEMO" id="hero_button" /></div>
                    </form>
                </div>
                
            </div>
            <Image1 />
            <h2 className='hero_quote'>
            Trusted by 100,000+ local businesses globally
            </h2>
            <Gridbox1 />
        </>
    )
}

export default Hero
