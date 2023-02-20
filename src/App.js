import logo from './logo.svg';
import Fire from './Fire.js';

import Bonfire from './bonfire.png';
import mountain_background from './mountainbackground.png';
import patform from './patrickplatform.png';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <header className="">
      </header>

      <div className = "App-header">
      

      <div class="homescreen-container">
        <div className="Fire"><Fire /></div>
        
        <img src={patform} alt="Patform" className="Patform" />
        <img src={Bonfire} alt="Bonfire" className="Bonfire" />
      </div>




    </div>


        

    </div>

  );
}

export default App;
