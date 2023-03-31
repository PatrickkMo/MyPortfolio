import React from 'react';
import "./bgAnimation3.css";
import { useState } from 'react';



export default function BgAnimation3({ fade }) {

  const [animationComplete3, setAnimationComplete3] = useState(false);
  
  return (

    <div onAnimationEnd={() => setAnimationComplete3(true)} className={`bgAnimation3 ${animationComplete3 && (!fade) ? "bgAnimation3-fade-out" : ""}`}>
        
        
      <div className="h_animations"></div>
      <div className="h_animations2"></div>
      <div className="h_animations3"></div>
      <div className="h_animations4"></div>
      <div className="h_animations5"></div>
      <div className="h_animations6"></div>
      <div className="h_animations7"></div>
      <div className="h_animations8"></div>
      <div className="h_animations9"></div>
      <div className="h_animations10"></div>
      <div className="h_animations11"></div>
      <div className="h_animations12"></div>
     


    </div>
  );
}




