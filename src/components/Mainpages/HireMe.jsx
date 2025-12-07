import React from 'react'
import "./HireMe.css"
import Navbar from '/src/components/navbar/Navbar'
import Contact from '../../assets/background/Contact-turtle.png'
const HireMe = () => {
    return (
        <div>
           
                <div className='hire-top'>
                    <div >
                    <Navbar />
                    <div className='HireMe-container'>
                        <div className='Hire-left'>
                            <img src={Contact} alt="" />
                        </div>
                        <div className='Hire-right'>
                            <h1>CONTACT ME</h1>
                            <br />
                            <div>
                                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores itaque quibusdam
                                    tempora corrupti voluptatum nulla,earum vel assumenda quos voluptatem facilis sint
                                     quisquam rem delectus ratione officiis quia ullam ea.</h3>
                                     <br />
                            </div>
                            <div style={{display:"contents"}} >
                        
                                <h2>Email id</h2>
                                <a href="mailto:as8693164@gmail.com">as8693164@gmail.com</a>
                                        <br />
                            </div>
                            <div style={{display:"contents"}}>
                                <h2>Contact number</h2>
                                <h3>+91 85878 07228</h3>
                                    <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireMe