
import './Hobbies.css';
import { ReactPhotoCollage } from "react-photo-collage";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React, { useState, useRef, useEffect } from 'react';
import c1 from "./c1.jpg";
import c2 from "./c2.jpg";
import c3 from "./c3.jpg";
import c4 from "./c4.jpg";
import * as THREE from 'three';
import earth_texture from './1_earth_8k.png';
import Typewriter from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';




function HobbiesPage() {

    const setting = {
        className: "./1_earth_8k.png",
        width: "80vw",
        height: ["40vh", "40vh", "40vh"],
        layout: [3, 3 ,3 ],
        photos: [
          {
            source:

            'url/./1_earth_8k.png'
          },
          {
            source:
              "https://drive.google.com/uc?export=view&id=1URIEYUwNIzu5CE9mfpwF5DzfyG26sJA9"
          }
         
        ],
        showNumOfRemainingPhotos: true
      };


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


        <div className = "Intro-Screen3" style={{ width: '100%', height: '100%' ,zIndex:zzIndex}}>
            <TypeWriterEffect
            
                
                startDelay={60}
                cursorColor="black"
                typeSpeed={50}
                nextTextDelay={500}
                
                multiText={[
                    'WE ARE ALL EXPLORERS,' ,
                    "AREN'T WE",
                   


                  ]}
                hideCursorAfterText={true}

                
              
            
            />
            
        </div>
  
        <div className='Typer'>
        <Typewriter

            classname = "Typer"
            options={{
                autoStart: true,
                loop: true,
            }}

                onInit={(typewriter) => {

                    typewriter.typeString('<span style="font-size: 180px;width: 100vw;">TRY <br/><span style="font-size: 200px;color: #ffb338;font-weight: bold;; ">SCROLLING</span>.</span>')
                    .callFunction(() => {
                        console.log('');
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                        console.log('');
                    })



                    typewriter.typeString('<span style="font-size: 180px;">These are my <br/><span style="font-size: 200px;color: #ffb338;font-weight: bold;; ">HOBBIES</span>.</span>')
                    .callFunction(() => {
                        console.log('');
                    })
                    .pauseFor(3000)
                    .deleteAll()
                    .callFunction(() => {
                        console.log('');
                    })


                
                  
                

                
                    .start();


                }}
            
            />
            </div>

        <div className = "Globe_Container" ref={containerRef}  />



        <div className = "Projects-ContainerH">
            <h1 className = "My-Collage">What a long way we've come.</h1>
          
            
            <div className = "image-holder">
                <img src={c1} className = "imagec"/>
            </div>

            <div className = "image-holder">
                <img src={c2} className = "imagec"/>
            </div>

            <div className = "image-holder">
                <img src={c3} className = "imagec"/>
            </div>

            <div className = "image-holder">
                <img src={c4} className = "imagec"/>
            </div>

            

        </div>

        

        
        

        
        
    </body>
    )
}

  
export default HobbiesPage;