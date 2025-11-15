import React from "react";
import "./Welcome.css";
import { CodeXml } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/Profiles");
  };

  return (
    <div className="welcome-screen">
      <div className="main-div">
        <h2>WELCOME TO</h2>
    <br />
        <h1>
          <span>ADITYA </span>SHARMA{" "}
          <CodeXml size={36} strokeWidth={4} />
        </h1>
        <br />

        <h3>PORTFOLIO</h3>
    <br />
        <button className="explore-btn" onClick={handleExplore} >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default Welcome;
