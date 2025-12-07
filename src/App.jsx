import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Homepage } from './components/Homepage.jsx'
import Welcome from './components/Welcomescreens/Welcome.jsx'
import Profiles from './components/Welcomescreens/Profiles.jsx';
import Skills from './components/Mainpages/Skills.jsx';
import Projects from './components/Mainpages/Projects.jsx';
import HireMe from './components/Mainpages/HireMe.jsx';
import Professional from './components/Mainpages/Professional.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/profiles" element={<Profiles />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/professional" element={<Professional />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/hireme" element={<HireMe />} />
    </Routes>
  )
}

export default App;
