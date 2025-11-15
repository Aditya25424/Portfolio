import React from 'react'
import { Homepage } from './components/Homepage.jsx'
import Welcome from './components/Welcomescreens/Welcome.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profiles from './components/Welcomescreens/Profiles.jsx';
import Skills from './components/Mainpages/Skills.jsx';
import Projects from './components/Mainpages/Projects.jsx';
import HireMe from './components/Mainpages/HireMe.jsx';
import Professional from './components/Mainpages/Professional.jsx';
const App = () => {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Professional" element={<Professional />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/HireMe" element={<HireMe />} />
      </Routes>
    </Router>
  )
}

export default App