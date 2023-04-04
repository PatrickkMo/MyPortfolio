
import Firevid from './FireGIF/gif.mp4'
import './Home.css';
import React, { useState, useEffect, useCallback } from 'react';
import myAudio from "./music1.mp3";
import button from "./button-1.png";
import button_clicked from "./button-2.png";
import BgAnimation from './bgAnimation.js';
import BgAnimation2 from './bgAnimation2.js';
import BgAnimation3 from './bgAnimation3.js';
import { Link } from 'react-router-dom';



function Home() {




  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState( new Audio(myAudio) );

  const [isButtonProjectsHovered, setIsButtonProjectsHovered] = useState(false);
  const [showBgAnimation, setShowBgAnimation] = useState(false);

  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);



  const [isButtonProjectsHovered2, setIsButtonProjectsHovered2] = useState(false);
  const [showBgAnimation2, setShowBgAnimation2] = useState(false);

  const [isButtonProjectsHovered3, setIsButtonProjectsHovered3] = useState(false);
  const [showBgAnimation3, setShowBgAnimation3] = useState(false);



  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  


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

    

  
    <div className="Home">
  
      <body>
              
        
              <div className ="frame">

          

              {showBgAnimation && <BgAnimation className="bgAnimation" fade ={isButtonProjectsHovered}/>}

              {showBgAnimation2 && <BgAnimation2 className="bgAnimation2" fade ={isButtonProjectsHovered2}/>}

              {showBgAnimation3 && <BgAnimation3 className="bgAnimation3" fade = {isButtonProjectsHovered3}/>}



              </div>

          
              <video id="bg-video" autoPlay loop muted>
                    <source src={Firevid} type="video/mp4"></source>
              </video>
   
              <div className="NavBar-Art-Grid" >
              


              <div className="audio-background">
                <audio id="my-audio" loop>
                  <source src={myAudio} type="audio/mp3" />
                </audio>
          
                <button className="play-button" onClick={togglePlay}>
                  <span className="play-icon"></span> {isPlaying ? "Pause" : "Play"}
                </button>
                
              </div>


              <div className="test-block">

                <Link to="/MyPortfolio/Portfolio" className = "LinkTab">
                <button
                  className="menu-button1"
                  background="none/"
                  id="button-achievements"

                  onClick={() => {
                    setIsFadingOut(true);
                    setIsButtonClicked(true);
                  }}

                  onMouseEnter={() => {

                    if (isVisible == true){
                      setIsVisible(false)
                    }
                    if (isVisible4==true){
                      setIsVisible4(false)
                    }
                    if (isVisible3==true){
                      setIsVisible3(false)
                    }

                    setIsVisible2(true)
                               
              
                    if (showBgAnimation == true) {
                    

                      
                      setTimeout(() => setShowBgAnimation(true), 500)
                      setTimeout(() => setIsButtonProjectsHovered(true), 500)
                  
                      
                    } else {

                      
                      setIsButtonProjectsHovered(true);
                      setShowBgAnimation(true);}

                    
                  }}
                  
                  onMouseLeave={() => {
                    
                    setIsVisible2(false)
                    setIsVisible(true)
  
          
              
                    setIsButtonProjectsHovered(false);
                    setTimeout(() => setShowBgAnimation(false), 500);
                  }}
                >

                  <img className="init" src={button} width="50px" height="50px">
                  </img>
                  <img className="clicked" src={button_clicked} width="50px" height="50px">
                  </img>
                </button>
                </Link>



                <Link to="/MyPortfolio/Education" className = "LinkTab">
                <button
                  className="menu-button1"
                  background="none/"
                  id="button-projects"
                  onMouseEnter={() => {

                    if (isVisible == true){
                      setIsVisible(false)
                    }
                    if (isVisible2==true){
                      setIsVisible2(false)
                    }
                    if (isVisible3==true){
                      setIsVisible3(false)
                    }

                    setIsVisible3(true)

            
                    if (showBgAnimation2 == true) {
                 
                      setTimeout(() => setShowBgAnimation2(true), 700)
                      setTimeout(() => setIsButtonProjectsHovered2(true), 700)
                  
                      
                    } else {
                  
                      setIsButtonProjectsHovered2(true);
                      setShowBgAnimation2(true);}
                  }}
                  onMouseLeave={() => {
                    setIsVisible3(false)
                    setIsVisible(true)
                    
                    setIsButtonProjectsHovered2(false);
                    setTimeout(() => setShowBgAnimation2(false), 500);
                  }}
                >
                  <img className="init" src={button} width="50px" height="50px">
                  </img>
                  <img className="clicked" src={button_clicked} width="50px" height="50px">
                  </img>
                </button>
                </Link>




                <Link className = "LinkTab" to="/MyPortfolio/Hobbies">
                <button
                  className="menu-button1"
                  background="none/"
                  id="button-about-me"
                  onMouseEnter={() => {

                    if (isVisible == true){
                      setIsVisible(false)
                    }
                    if (isVisible2==true){
                      setIsVisible2(false)
                    }
                    if (isVisible3==true){
                      setIsVisible3(false)
                    }

                    setIsVisible4(true)

                    if (showBgAnimation3 == true) {
                      
                      setTimeout(() => setShowBgAnimation3(true), 700)
                      setTimeout(() => setIsButtonProjectsHovered3(true), 700)
                  
                      
                    } else {
                  
                      setIsButtonProjectsHovered3(true);
                      setShowBgAnimation3(true);}
                  }}
                  onMouseLeave={() => {
                    setIsVisible(true)
                    setIsVisible4(false)
                    
                    setIsButtonProjectsHovered3(false);
                    setTimeout(() => setShowBgAnimation3(false), 500);
                  }}
                >
                  <img className="init" src={button} width="50px" height="50px">
                  </img>
                  <img className="clicked" src={button_clicked} width="50px" height="50px">
                  </img>
                </button>
                </Link>




              </div>

              <div className="art-grid">
                <h1 className={`fade-in-out ${isVisible ? '' : 'hide'}`} id="title_text1" >Patrick Mo</h1>
                <h1 className={`fade-in-out ${isVisible2 ? '' : 'hide'}`} id="title_text2" >Portfolio</h1>
                <h1 className={`fade-in-out ${isVisible3 ? '' : 'hide'}`} id="title_text3" >Education</h1>
                <h1 className={`fade-in-out ${isVisible4 ? '' : 'hide'}`} id="title_text4" >About Me</h1>
              </div>

            </div>


      </body>
    </div>


  );
}

export default Home;
