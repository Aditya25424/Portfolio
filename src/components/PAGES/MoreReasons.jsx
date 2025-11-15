import React from 'react'
import './MoreReasons.css'
const MoreReasons = () => {
    const reasons_to_hire_me = [
        {
            "id": 1,
            "title": "Strong Frontend & UI/UX Understanding",
            "description": "I create intuitive, visually appealing, and user-friendly interfaces using React and UI/UX principles.",
            "image": "/src/assets/Todayspicks/Skills.gif"
        },
        {
            "id": 2,
            "title": "Proven Experience Through Real Projects",
                        "image": "/src/assets/Todayspicks/Skills.gif",

            "description": "I have built real projects like the Dronathoan website, BloodUnity App, and Swachhta Sainik platform, gaining practical development experience."
        },
        {
            "id": 3,
            "title": "Quick Learner With Multi-Stack Knowledge",
            "description": "Along with frontend development, I work with Java, Spring Boot, and AWS Cloud, allowing me to understand full-stack concepts.",
                        "image": "/src/assets/Todayspicks/Skills.gif"

        },
        {
            "id": 4,
            "title": "Strong Problem-Solving & Debugging Skills",
            "description": "I break down complex issues and solve them efficiently, including React errors, CSS issues, deployment problems, and backend integration.",
                        "image": "/src/assets/Todayspicks/Skills.gif"

        },
        {
            "id": 5,
            "title": "Good Communication & Professional Approach",
            "description": "I communicate clearly, accept feedback positively, and explain technical concepts simply to both technical and non-technical people.",
                        "image": "/src/assets/Todayspicks/Skills.gif"

        },
        {
            "id": 6,
            "title": "Highly Motivated & Consistent",
            "description": "I stay disciplined, learn quickly, and deliver reliable results across projects, studies, and technical tasks.",
                        "image": "/src/assets/Todayspicks/Skills.gif"

        }
    ]


    return (
        <div>
            <div className='Todayspicks'>
                <div>
                    <h1>More Reasons to hire me</h1>
                </div>
                <div className='MoreSections'>
                <div className="reasons-container">
                    {reasons_to_hire_me.map((reason) => (
                        <div key={reason.id} className="reason-card">
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreReasons