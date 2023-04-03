import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import * as THREE from 'three';
import earth_texture from './1_earth_8k.png';
import Typewriter from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';






function ProjectsPage() {



    var app = document.getElementById('app');
    

    const [zIndex, setZIndex] = useState(100);



    const [animationFrameId, setAnimationFrameId] = useState(null);
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("Registered")
            setZIndex(0);
        }, 14000);
    
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


        <div className = "Intro-Screen" style={{ width: '100%', height: '100%' ,zIndex:zIndex}}>
            <TypeWriterEffect
            
                
                startDelay={60}
                cursorColor="black"
                typeSpeed={50}
                nextTextDelay={400}
                
                multiText={[
                    'EXPERIENCE IS THE TEACHER OF ALL THINGS',
                    'JULIUS CAESAR',


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
                    // typewriter.typeString('<span style="font-size: 200px;">The only way to do <span style="color: #27ae60;font-style: oblique;">great work</span>,</span>')
                            
                    // .callFunction(() => {
                    //     console.log('');
                    // })
                    // .pauseFor(2500)
                    // .deleteAll()

                    // typewriter.typeString('<span style="font-size: 200px;">is to <span style="color: #27ae60;font-style: oblique;">love</span> what you do</span>')
                            
                    // .callFunction(() => {
                    //     console.log('');
                    // })
                    // .pauseFor(2500)
                    // .deleteAll()
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
                
                    typewriter.typeString('<span style="font-size: 180px;">This is my <br/><span style="font-size: 200px;color: #ffb338;font-weight: bold;; ">Portfolio</span>.</span>')
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

        <div className = "Globe_Container" ref={containerRef}  />



        <div className = "Projects-Container">
            <h1 className = "My-Projects">The little things that makes us smile.</h1>
            
            <div className = "Projects-Card">
                <div className = "Image-display" id="Aileng">
                </div>

                <div className = "Texts">
                    <div className = "ProjectsTitle"><h1 className = "T-Words">Aileng Food Industries</h1></div>
                    <div className = "Projects-Role"><h2 className = "R-Words">Senior Web Developer / Designer</h2></div>
                    <div className = "Projects-Paragraph"><p className ="P-Words">My time at Aileng Food Industries was an insightful experience as it was my
                    first coperate position as a developer. I was tasked with handling my client's expectations for the site and it's design as well as development and deployment and I fulfilled it
                    with satisfactory standards.</p></div>
                    <a className="aileng-site" href="https://ailengfood.co" target="_blank">Check out the website!</a>
                
                </div>


            </div>

            <div className = "Projects-Card">
                <div className = "Image-display" id="Match">
                </div>

                <div className = "Texts">
                    <div className = "ProjectsTitle"><h1 className = "M-T-Words">MATCH APP</h1></div>
                    <div className = "Projects-Role"><h2 className = "M-R-Words">Tech & Team Lead / Cloud Engineer / Mobile Developer</h2></div>
                    <div className = "Projects-Paragraph"><p className ="M-P-Words">Match was a social media application for athletes that my team and I were developing as a hobby. Match was a finalist in the SUTD What-The-Hack 2022 Hacakathon and was considered
                    as one of the most well-developed applications during the hackathon. As the team lead, I was reponsible with idea generation as well as team management/delegation. Aside from my role as tech-lead, I was the cloud engineer for the application as well. 
                    My responsibilities as a cloud engineer included but not limited to; database management, API engineering and deployment.</p></div>

                    <a className="match-site" href="https://www.canva.com/design/DAFVOSm_0wM/MC700HdU5mKczTeiA8odxA/view?utm_content=DAFVOSm_0wM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Check out the documentation!</a>
                </div>


            </div>

            <div className = "Projects-Card">
                <div className = "Image-display" id="LogicCoders">
                </div>

                <div className = "Texts">
                    <div className = "ProjectsTitle"><h1 className = "L-T-Words">The Logic Coders</h1></div>
                    <div className = "Projects-Role"><h2 className = "L-R-Words">Instructor / Trainer</h2></div>
                    <div className = "Projects-Paragraph"><p className ="L-P-Words">During my time at The Logic Coders, I pursued my passion towards teaching while also aligning it with my interest in programming
                    by registering to teach at a coding tuition center known as "The Logic Coders". As an instructor, I have worked with students of all ages who I personally curated and taylored each of my classes to.
                    My time at The Logic Coders was definitely fruitful having gathered the people skills required to work in a team environment as well as the abillity to adequately relay information.</p></div>
                </div>


            </div>


            

        </div>

        

        
        

        
        
    </body>
    )
}





export default ProjectsPage;