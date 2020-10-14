import React from 'react';
import './App.css';

import Nav from './Nav.jsx';
import Top from './Top.jsx';
import About from './About.jsx';
import Skill from './Skill.jsx';
import Work from './Work.jsx';
import Intern from './Intern.jsx';
import ScrollUp from './ScrollUp.jsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Top />
      <About />
      <Skill />
      <Work />
      <Intern />
      <ScrollUp />
    </div>
  );
}

export default App;
