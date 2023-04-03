
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./Education.css";

import React, { useState, useRef, useEffect } from 'react';

import * as THREE from 'three';
import earth_texture from './1_earth_8k.png';
import Typewriter from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';




function EducationPage() {



    var app = document.getElementById('app');
    

    const [zzIndex, setzZIndex] = useState(100);



    const [animationFrameId, setAnimationFrameId] = useState(null);
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("Registered")
            setzZIndex(0);
        }, 19000);
    
        // Cleanup function to clear the timeout if the component unmounts before it fires
        return () => {
          clearTimeout(timeoutId);
        };
      }, []); 


    useEffect(() => {
        const container = containerRef.current;
      
        // create a scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.x = -0.4;
        camera.position.y = -0.4;
        camera.position.z = -0.4;
      
        camera.rotation.set(0,-0.1,0)
      
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x00000000);
        container.appendChild(renderer.domElement);

        
      
        // create a sphere geometry for the globe
        const geometry = new THREE.SphereGeometry(3, 84, 64);
      
        // create a material with a texture for the globe
        const material = new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load(earth_texture),
          transparent: true,
        });
      
        // create a mesh for the globe
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);
        globe.position.x = 3.3;
        globe.position.y = -2;
        globe.position.z = -4.2;
      
        // add ambient light to the scene
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
      
        // add a directional light to the scene
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);
      
        renderer.setClearColor( 0x000000, 0 );
        // save the scene, camera, and renderer to refs
        sceneRef.current = scene;
        cameraRef.current = camera;
        rendererRef.current = renderer;

        material.castShadow = true;
        material.receiveShadow = true;

      
        // define an update function to rotate the globe
        const update = () => {
          globe.rotation.y += 0.001;
          renderer.render(scene, camera);
          setAnimationFrameId(requestAnimationFrame(update));
        };

        renderer.shadowMap.enabled = true;
      
        // start the animation loop
        update();
      
        // clean up when the component unmounts
        return () => {
          cancelAnimationFrame(animationFrameId);
          container.removeChild(renderer.domElement);
        };
      }, []);

     

    return( 
    <body>


        <div className = "Intro-Screen1" style={{ width: '100%', height: '100%' ,zIndex:zzIndex}}>
            <TypeWriterEffect
            
                
                startDelay={60}
                cursorColor="black"
                typeSpeed={50}
                nextTextDelay={500}
                
                multiText={[
                    'THE ROOTS OF EDUCATION ARE BITTER,' ,
                    'BUT THE FRUIT IS SWEET',
                    'ARISTOTLE',


                  ]}
                hideCursorAfterText={true}

                
              
            
            />
            
        </div>
  
        
        <Typewriter

            classname = "Typer"
            options={{
                autoStart: true,
                loop: true,
            }}

                onInit={(typewriter) => {
                    typewriter.typeString('<span style="font-size: 180px;">This is my <br/><span style="font-size: 200px;color: #ffb338;font-weight: bold;; ">EDUCATION</span>.</span>')
                    .callFunction(() => {
                        console.log('');
                    })
                    .pauseFor(3000)
                    .deleteAll()
                    .callFunction(() => {
                        console.log('');
                    })

                    typewriter.typeString('<span style="font-size: 180px;width: 100vw;">TRY <br/><span style="font-size: 200px;color: #ffb338;font-weight: bold;; ">SCROLLING</span>.</span>')
                    .callFunction(() => {
                        console.log('');
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                        console.log('');
                    })
                
                  
                

                
                    .start();


                }}
            
            />

        <div className = "Globe_Container" ref={containerRef}  />



        <div className = "Projects-Container">
            <h1 className = "My-Projects">What a long way we've come.</h1>
            
            <div className = "Projects-Card">
                <div className = "Image-display" id="ZHSS">
                </div>

                <div className = "Texts">
                    <div className = "ProjectsTitle"><h1 className = "T-Words">Zhenghua Secondary School</h1></div>
                    <div className = "Projects-Role"><h2 className = "R-Words">2014 - 2018</h2></div>
                    <div className = "Projects-Paragraph"><p className ="P-Words">Zhenghua Secondary School was a place of growth where I spent most of my teengae years studying. It is the education institution where I assumed my first major leadership position as chairperson of the Infocomm club for three years and carried out my duties subserviently.</p></div>
                   
                
                </div>


            </div>

            <div className = "Projects-Card">
                <div className = "Image-display" id="jpjc">
                </div>

                <div className = "Texts">
                    <div className = "ProjectsTitle"><h1 className = "J-T-Words">Jurong Pioneer Junior College</h1></div>
                    <div className = "Projects-Role"><h2 className = "J-R-Words">2019 - 2020</h2></div>
                    <div className = "Projects-Paragraph"><p className ="J-P-Words">I would say JPJC was the breeding ground of my passion towards programming having taken the H2 Computing A-Levels syllabus. My passion towards the intricacy of programing was facillitated by the resources that the school provided as well as that I could obtain myself from the internet. Upon graudating with a Computing O-Level cert, I was more than driven to persue a career in Computer Science. </p></div>

              </div>


            </div>

            <div className = "Projects-Card">
                <div className = "Image-display" id="sutd">
                </div>

                <div className = "Texts">
                    <div className = "ProjectsTitle"><h1 className = "S-T-Words">Singapore University of Technology and Design</h1></div>
                    <div className = "Projects-Role"><h2 className = "S-R-Words">2021 - PRESENT</h2></div>
                    <div className = "Projects-Paragraph"><p className ="S-P-Words">SUTD was the my university of choice and my duration as a student there is what I would describe as the reinassance period in terms of my prospects towards my career in Computer Science having been presented with numerous opportunities and networks to hone my craft in. My college days have been coupled with fun as well as hard work and not one day passes where I feel I am one step closer to my aspirations.</p></div>
                </div>


            </div>


            

        </div>

        

        
        

        
        
    </body>
    )
}

  
export default EducationPage;