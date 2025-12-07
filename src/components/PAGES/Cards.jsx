import React from 'react'
import './Cards.css'
import { useNavigate } from 'react-router-dom'
import Skills from '../../assets/Todayspicks/Skills.gif'
import Projects from '../../assets/Todayspicks/projects.gif'
import Professional from '../../assets/Todayspicks/experience.gif'
import Recommendation from '../../assets/Todayspicks/Recommendations.gif'
import Contact from '../../assets/Todayspicks/Contactme.gif'

const Cards = ()=> {
    const navigate = useNavigate();

    function handlepage(path){
        navigate(path);
    }

    const adidata = [
        {
            title: "Skills",  
            Image: Skills,
            path: "/Skills"
        },
        {
            title: "Projects",  
            Image: Projects,
            path: "/Projects"
        },
        {
            title: "Experience",
            Image: Professional,
            path: "/Professional"
        },
        {
            title: "Recommendations",  
            Image: Recommendation,
            path: "/Profiles"
        },
        {
            title: "Contact me",  
            Image: Contact,
            path: "/HireMe"
        }
    ];

    return (
        <div className='picks'>
            {adidata.map((item, index) => (
                <div
                    key={index}
                    className="card"
                    onClick={() => handlepage(item.path)}
                >
                    <img src={item.Image} alt={item.title} /> 
                    <h3 className='center-text'>{item.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Cards;
