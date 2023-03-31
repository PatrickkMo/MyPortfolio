import React from 'react';
import "./bgAnimation.css";
import { useState } from 'react';



export default function BgAnimation({ fade }) {


  const [animationComplete, setAnimationComplete] = useState(false);

  return (

    <div onAnimationEnd={() => setAnimationComplete(true)} className={`bgAnimation ${animationComplete && (!fade) ? "bgAnimation-fade-out" : ""}`}>

        <div className="c_animations"></div>
        <div className="c_animations2"></div>
        <div className="c_animations3"></div>
        <div className="c_animations4"></div>
        <div className="c_animations5"></div>
        <div className="c_animations6"></div>
        <div className="c_animations7"></div>
        <div className="c_animations8"></div>
        <div className="c_animations9"></div>
        <div className="c_animations10"></div>
        <div className="c_animations11"></div>
        <div className="c_animations12"></div>
        <div className="c_animations13"></div>


    </div>
  );
}




