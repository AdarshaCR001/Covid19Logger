import React from 'react';

import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import GlobalStatus from './Pages/GlobalStatus'
import Facebook from './Components/Facebook';
import { Router, Link } from "@reach/router"

function App() {
  return (
  <div>
    


    <Router>
      <Facebook path="/"/>
      <Home path="/home"/>
      <About path="/about"/>
      <GlobalStatus path="/"/>

    </Router>
  </div>
  );
}

export default App;
