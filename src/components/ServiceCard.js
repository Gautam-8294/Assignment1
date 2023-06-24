import React from 'react'
import { data } from '../data/servicedata.js'
import '../style/servicecard.css'

const ServiceCard = (props) => {
    return (
        <>
            <div className='service_card_main_container'>
                <h2><strong>SalesCaptain is designed for your business</strong></h2>
                <h4>Select your industry to see how it works</h4>
            <div className='service_card_container'>
                <div className="service_card">
                    {data.map((item) => (

                        <div className='single_service_card'>
                            <a href="#" className="">
                                <img src={item.source} alt='logo' />
                                <h3>{item.title}</h3></a>
                            <p>{item.description}</p>
                        </div>

                    ))}
                </div>
            </div>
            </div>
        </>
    )
}

// const  ServiceCard= () => {
//     return (
//         <>
//             <div className='client_card_main_container'>
//                 <h1>Tools to take your business to next level</h1>
//             <div className='client_card_container'>
//             <div className="nav__menu">
//                 <ServiceCardc idStart="1" idEnd="5" />
//                 <ServiceCardc idStart="5" idEnd="9" />
//                 <ServiceCardc idStart="9" idEnd="13" />
//                 </div>
//             </div>
//             </div>

//         </>
//     )
// }

export default ServiceCard
