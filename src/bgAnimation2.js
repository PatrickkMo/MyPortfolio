import React from 'react';
import "./bgAnimation2.css";
import { useState } from 'react';



export default function BgAnimation2({fade}) {

  const [animationComplete2, setAnimationComplete2] = useState(false);

  return (

    <div onAnimationEnd={() => setAnimationComplete2(true)} className={`bgAnimation2 ${animationComplete2 && (!fade) ? "bgAnimation2-fade-out" : ""}`}>
        
        
      <div className="animations"></div>
      <div className="animations2"></div>
      <div className="animations3"></div>
      <div className="animations4"></div>
      <div className="animations5"></div>
      <div className="animations6"></div>
      <div className="animations7"></div>
      <div className="animations8"></div>
      <div className="animations9"></div>
      <div className="animations10"></div>
      <div className="animations11"></div>
      <div className="animations12"></div>
      <div className="animations13"></div>
      <div className="animations14"></div>
      <div className="animations15"></div>

    </div>
  );
}




