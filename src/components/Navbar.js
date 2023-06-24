import React from 'react'
import { useState, useEffect } from 'react'
import '../style/navbar.css'
import Img from '../assets/navbar_image.webp'
import {data} from '../data/data'
// import '../style/clientcard.css'

const Navbar = () => {
    const [styleProducts, setStyleProducts] = useState("nav_dropdown_container");
    const [statusProducts, setStatusProducts] = useState(false);

    const [styleSolutions, setStyleSolutions] = useState("nav_dropdown_container");
    const [statusSolutions, setStatusSolutions] = useState(false);


    const current_product_dropdown = {
        display: "grid",
    }
    const changeStyleProducts = (event) => {

        setStyleProducts("currentProduct_dropdown");
        console.log(event);
    }
    const changeStyleProductsBack = (event) => {

        setStyleProducts("nav_dropdown_container");
        console.log(event);
    }
    const changeStyleProductsOnClick = (event) => {
        setStatusProducts(true);
        statusProducts ? setStatusProducts(false) : setStatusProducts(true);
        statusProducts ? setStyleProducts("current_product_dropdown") : setStyleProducts("nav_dropdown_container");
        console.log(event)
    }



    const current_solution_dropdown = {
        display: "grid",
        height: "600px"
    }
    const changeStyleSolutions = (event) => {

        setStyleProducts("currentProduct_dropdown");
        console.log(event);
    }
    const changeStyleSolutionsBack = (event) => {

        setStyleSolutions("nav_dropdown_container");
        console.log(event);
    }
    const changeStyleSolutionsOnClick = (event) => {
        setStatusSolutions(true);
        statusSolutions ? setStatusSolutions(false) : setStatusSolutions(true);
        statusSolutions ? setStyleSolutions("current_product_dropdown") : setStyleSolutions("nav_dropdown_container");
        console.log(event)
    }








    return (
        <>
            <div className='nav_container'>
                <div className='nav_content'>

                    <div className='nav_img'>
                    <a href=''><img src={Img} alt='Brand Logo' style={{ width: "190px" }} /></a>
                    </div>
                    <div className='nav_menu'>
                        <nav className='nav_menu'>
                            <div className='nav_link nav_products_class' id='nav_products' onMouseOver={changeStyleProducts} onMouseOut={changeStyleProductsBack} onClick={changeStyleProductsOnClick}><a href='#'>Products</a></div>
                            <div className='nav_link nav_solutions_class' ><a href='#'>Solutions</a></div>
                            <a href='#' className='nav_link'>Pricing</a>
                            <a href='#' className='nav_link'>Resources</a>
                            <a href='#' className='nav_link'>Support</a>
                            <a href='https://app.salescaptain.com/login' className='button nav_sign-in'>Sign in</a>
                            <a href='#' className='button nav_get-started' id='get-started-button'>Get Started</a>
                        </nav>
                    </div>

                </div>
            </div>
            <div className={styleProducts}>
            <div className='nav_dropdown' style={{textAlign:"left"}} onMouseOver={changeStyleProducts} onMouseOut={changeStyleProductsBack}>
                <div className="single_card" style={{padding:"0", margin:"0",textAlign: "justify", fontFamily: "Avertastd,sans-serif",paddingLeft:"100px"}}>
                    {data.filter((item)=>{return item.id>=1 && item.id<5}).map((item) => (
                            
                            <div style={{border:"none", textAlign:"left", fontSize: ".8em"}}>
                                <img src={item.source} alt='logo'/>
                                <div className=''><a href="#"  className="single_card_anchor" style={{padding:"0"}}>{item.title}</a>
                                <p style={{fontSize:".7em", fontWeight:"thin",fontFamily: "Avertastd,sans-serif"}}>{item.description}</p></div>
                            </div>
                    ))}
                </div>
                <div className="single_card" style={{padding:"0", margin:"0",textAlign: "justify", fontFamily: "Avertastd,sans-serif",padding:"0 50px"}}>
                    {data.filter((item)=>{return item.id>=5 && item.id<9}).map((item) => (
                            
                            <div style={{border:"none", textAlign:"left", fontSize: ".8em"}}>
                                <img src={item.source} alt='logo'/>
                                <div className=''><a href="#"  className="single_card_anchor" style={{padding:"0"}}>{item.title}</a>
                                <p style={{fontSize:".7em", fontWeight:"thin",fontFamily: "Avertastd,sans-serif"}}>{item.description}</p></div>
                            </div>
                    ))}
                </div>
                <div className="single_card" style={{padding:"0", margin:"0",textAlign: "justify", fontFamily: "Avertastd,sans-serif",padding:"0 50px"}}>
                    {data.filter((item)=>{return item.id>=9 && item.id<13}).map((item) => (
                            
                            <div style={{border:"none", textAlign:"left", fontSize: ".8em"}}>
                                <img src={item.source} alt='logo'/>
                                <div className=''><a href="#"  className="single_card_anchor" style={{padding:"0"}}>{item.title}</a>
                                <p style={{fontSize:".7em", fontWeight:"thin",fontFamily: "Avertastd,sans-serif"}}>{item.description}</p></div>
                            </div>
                    ))}
                </div>
                </div>
            </div>
            {/* <div className={styleProducts}>
                <div className='nav_dropdown' onMouseOver={changeStyleProducts} onMouseOut={changeStyleProductsBack}>

                    <div className='nav_dropdown_section'>
                        <div className='nav_dropdown_contents'>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Gautam</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='' />
                            <div>
                                <a href=''>Reviews</a>
                                <div>
                                    Improve ratings & get chosen more.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}


            {/* <div className={styleSolutions}>
                <div className='nav_dropdown' onMouseOver={changeStyleSolutions} onMouseOut={changeStyleSolutionsBack}>
                    <div>
                        <div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Gautam</a>
                                    <div>
                                        Hello There I m
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Good</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div><div>
                        <div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='' />
                                <div>
                                    <a href=''>Reviews</a>
                                    <div>
                                        Improve ratings & get chosen more.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Navbar;
