import React from "react";
import "./Profiles.css";
import { useNavigate } from "react-router-dom";

import Developer from "../../assets/userlogo/Developer.png"; 
import Stalker from "../../assets/userlogo/Stalker.jpg"; 
import Adventure from "../../assets/userlogo/Adventurer.png"; 
import Recruiter from "../../assets/userlogo/Recruiter.png"; 
import Surprised from "../../assets/userlogo/Surprised.png"; 

const profiles = [
  { name: "Developer", img: Developer },
  { name: "Stalker", img: Stalker },
  { name: "Adventurer", img: Adventure },
  { name: "Recruiter", img: Recruiter },
  { name: "Surprised", img: Surprised },
];

const Profiles = () => {
  const navigate = useNavigate();

  const handleprofile = (profile) => {
    navigate("/homepage", {
      state: {
        userType: profile.name,
        userImage: profile.img  
      },
    });
  };

  return (
    <div className="profiles-container">
      <h1 className="title">Who's watching?</h1>

      <div className="profiles-list">
        {profiles.map((item, index) => (
          <div
            key={index}
            className="profile-card"
            onClick={() => handleprofile(item)}
          >
            <img src={item.img} alt={item.name} className="profile-img" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
