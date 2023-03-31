import React from 'react';
import "./bgAnimation2.css";
import { useState } from 'react';



export default function BgAnimation2({fade}) {

  const [animationComplete2, setAnimationComplete2] = useState(false);

  return (

    <div onAnimationEnd={() => setAnimationComplete2(true)} className={`bgAnimation2 ${animationComplete2 && (!fade) ? "bgAnimation2-fade-out" : ""}`}>
        
        
      <div className="e_animations"></div>
      <div className="e_animations2"></div>
      <div className="e_animations3"></div>
      <div className="e_animations4"></div>
      <div className="e_animations5"></div>
      <div className="e_animations6"></div>
      <div className="e_animations7"></div>
      <div className="e_animations8"></div>
      <div className="e_animations9"></div>
      <div className="e_animations10"></div>
      <div className="e_animations11"></div>
      <div className="e_animations12"></div>
      <div className="e_animations13"></div>
      <div className="e_animations14"></div>
      <div className="e_animations15"></div>

    </div>
  );
}




