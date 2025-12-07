import React from 'react'
import "./HireMe.css"
import Navbar from '/src/components/navbar/Navbar'
import Contact from '../../assets/background/Contact-turtle.png'
const HireMe = () => {
    return (
        <div>
           
                <div className='hire-top'>
                    <div className="page-with-navbar">
                    <Navbar />
                    <div className='HireMe-container'>
                        <div className='Hire-left'>
                            <img src={Contact} alt="" />
                        </div>
                        <div className='Hire-right'>
                            <h1>CONTACT ME</h1>
                            <br />
                            <div>
                                <h3>Hi! I’m Aditya Sharma, a full-stack developer who runs on React.js for smooth UIs, Spring Boot for powerful backends, and MySQL for rock-solid data—basically, I build websites that don’t just look good, they actually work (magic included ✨). I love turning wild ideas into real, fast, responsive, and scalable applications, fixing bugs like a boss, and making users go “Wow, this is clean!” If you need a developer who codes with passion, delivers on time, communicates clearly, and treats your project like their own—congrats, you just found your guy. Hire me before your competitor does. 😏🚀.</h3>
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
