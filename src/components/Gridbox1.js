import React from 'react'
import '../style/gridbox1.css'
import Img1 from '../assets/grid1_1.webp'
import Img2 from '../assets/grid1_2.webp'
import Img3 from '../assets/grid1_3.webp'
import Img4 from '../assets/grid1_4.webp'
import Img5 from '../assets/grid1_5.webp'
import Img6 from '../assets/grid1_6.webp'
import Img7 from '../assets/grid1_7.webp'

const Gridbox1 = () => {
    return (
        <>
            <div className='gridbox'>
                <img src={Img1} />
                <img src={Img3} />
                <img src={Img2} />
                <img src={Img4} />
                <img src={Img5} />
                <img src={Img6} />
                <img src={Img7} />
            </div>

        </>
    )
}

export default Gridbox1
