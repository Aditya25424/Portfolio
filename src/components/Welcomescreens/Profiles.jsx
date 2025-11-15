import React from "react";
import "./Profiles.css";
import { useNavigate } from "react-router-dom";
const profiles = [
  {
    name: "Devloper",
    img: "/src/assets/userlogo/Developer.png",
  },
  {
    name: "Stalker",
    img: "/src/assets/userlogo/stalker.jpg",
  },
  {
    name: "Adventurer",
    img: "/src/assets/userlogo/Adventurer.png",
  },
  {
    name: "Recruter",
    img: "/src/assets/userlogo/Recruiter.png",
  },
  {
    name: "Suprised",
    img: "/src/assets/userlogo/Suprised.png",
  },
];

const Profiles = () => {
  const navigate = useNavigate();

  const handleprofile = () => {
    navigate("/homepage");
  };
  return (
    <div className="profiles-container">
      <h1 className="title">Who's watching?</h1>

      <div className="profiles-list" onClick={handleprofile}>
        {profiles.map((item, index) => (
          <div key={index} className="profile-card">
            <img src={item.img} alt={item.name} className="profile-img" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
