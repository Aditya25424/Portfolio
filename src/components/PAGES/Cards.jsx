import React from 'react'
import './Cards.css'
import { useNavigate } from 'react-router-dom'

const Cards = ()=> {
    const navigate = useNavigate();

    function handlepage(path){
        navigate(path);
    }

    const adidata = [
        {
            title: "Skills",  
            Image: "/src/assets/Todayspicks/Skills.gif",
            path: "/Skills"
        },
        {
            title: "Projects",  
            Image: "/src/assets/Todayspicks/projects.gif",
            path: "/Projects"
        },
        {
            title: "Experience",
            Image: "/src/assets/Todayspicks/experience.gif",
            path: "/Professional"
        },
        {
            title: "Recommendations",  
            Image: "/src/assets/Todayspicks/Recommendations.gif",
            path: "/Profiles"
        },
        {
            title: "Contact me",  
            Image: "/src/assets/Todayspicks/Contactme.gif",
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
