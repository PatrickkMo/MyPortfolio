import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import * as THREE from 'three';
import earth_texture from './1_earth_8k.jpg';

function ProjectsPage() {


    const [animationFrameId, setAnimationFrameId] = useState(null);
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);



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
      
        // save the scene, camera, and renderer to refs
        sceneRef.current = scene;
        cameraRef.current = camera;
        rendererRef.current = renderer;
      
        // define an update function to rotate the globe
        const update = () => {
          globe.rotation.y += 0.001;
          renderer.render(scene, camera);
          setAnimationFrameId(requestAnimationFrame(update));
        };
      
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
     
        <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
        <p>Hello</p>
    </body>
    )
}





export default ProjectsPage;