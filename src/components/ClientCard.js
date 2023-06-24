import React from 'react'
import {data} from '../data/data.js'
import '../style/clientcard.css'


const ClientCardc = (props) => {
    return (
        <>

            <div className='card_column'>
            <h3>{props.title}</h3>  
            <p>{props.brief}</p>
                <div className="single_card">
                    {data.filter((item)=>{return item.id>=props.idStart && item.id<props.idEnd}).map((item) => (
                            
                            <div>{console.log(item.source)}
                                <img src={item.source} alt='logo'/>
                                <div className=''><a href="#"  className="single_card_anchor">{item.title}</a>
                                <p>{item.description}</p></div>
                            </div>
                    ))}
                </div>
            </div>

        </>
    )
}

const ClientCard = () => {
    return (
        <>
            <div className='client_card_main_container'>
                <h1>Tools to take your business to next level</h1>
            <div className='client_card_container'>
            <div className="card_nav_menu">
                <ClientCardc idStart="1" idEnd="5" title="Attract" brief ="Attract more customers"/>
                <ClientCardc idStart="5" idEnd="9" title="Engage" brief ="Convert leads to customers"/>
                <ClientCardc idStart="9" idEnd="13" title="Elevate" brief ="Provide a delightful experience"/>
                </div>
            </div>
            </div>

        </>
    )
}

export default ClientCard
