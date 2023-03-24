
import Fire from './Fire.js';
import Firevid from './FireGIF/gif.mp4'
import Bonfire from './bonfire.png';
import mountain_background from './mountainbackground.png';
import patform from './patrickplatform.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import myAudio from "./music1.mp3";
import button from "./button-1.png";
import button_clicked from "./button-2.png";

  


function App() {


  const [isPlaying, setIsPlaying] = useState(false);
  
  const [audio, setAudio] = useState( new Audio(myAudio) );

  audio.loop = true;

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };



  return (

    <div className="App">
      <body>

      
            <header className="">
            </header>

            <video id="bg-video" autoPlay loop muted>
                <source src={Firevid} type="video/mp4"></source>
            </video>

            


            <div className="NavBar-Art-Grid">

              <div className="audio-background">
                <audio id="my-audio" loop>
                  <source src={myAudio} type="audio/mp3" />
                </audio>
          
                <button className="play-button" onClick={togglePlay}>
                  <span className="play-icon"></span> {isPlaying ? "Pause" : "Play"}
                </button>
                
              </div>


              <div className="test-block">



                <button className="menu-button1" background="none/" id="button-achievements">
                  <img className="init" src={button} width="50px" height="50px">
                  </img>
                  <img className="clicked" src={button_clicked} width="50px" height="50px">
                  </img>
                </button>

                <button className="menu-button1" background="none/" id = "button-projects">
                  <img className="init" src={button} width="50px" height="50px">
                  </img>
                  <img className="clicked" src={button_clicked} width="50px" height="50px">
                  </img>
                </button>

                <button className="menu-button1" background="none/" id = "button-about-me">
                  <img className="init" src={button} width="50px" height="50px">
                  </img>
                  <img className="clicked" src={button_clicked} width="50px" height="50px">
                  </img>
                </button>

                <button className="menu-button1" background="none/" id = "button-my-articles">
                  <img className="init" src={button} width="50px" height="50px">
                  </img>
                  
                  <img className="clicked" src={button_clicked} width="50px" height="50px">
                  </img>
                </button>


              </div>

              <div className="art-grid">
                <h1>PATRICK MO</h1>
              </div>

            </div>


        </body>
    </div>
  );
}

export default App;
