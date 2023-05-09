import logo from './logo.svg';
import './App.css';
import * as Sections from './components/Sections'
import EsotericModel from './components/Models/Esoteric/EsotericModel'
import InkaModel from './components/Models/Inka/inkaModel'
import { Canvas, useThree  } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import { Vector3 } from 'three';
import KazanModel from './components/Models/Kazan/kazanModel';
import MacsModel from './components/Models/Macsdona/macsModel';
import MetroModel from './components/Models/Club-Metro/metroModel';
import CashModel from './components/Models/Cash/cashModel';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import data from './cameraPositions.json';

import { useSpring, animated } from '@react-spring/web'


function App() {
  const [activeTileIndex, setActiveTileIndex] = useState(0);
  const appRef = useRef();
  


const { position } = data[activeTileIndex];
const { x, y, z } = position;

console.log('X:'+x+' Y:'+y+' Z:'+z);


function CameraPositioning() {
  const { camera } = useThree();
  const [position, setPosition] = useState(camera.position.clone());
  const [targetPosition, setTargetPosition] = useState(new Vector3(x, y, z));

  const animationRef = useRef(null);
  const animationStartTimeRef = useRef(null);
  const animationDuration = 1900; // milliseconds

  useEffect(() => {
    // Start the animation when the target position changes
    animationStartTimeRef.current = performance.now();
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animateCameraPosition);

    return () => {
      // Stop the animation when the component unmounts
      cancelAnimationFrame(animationRef.current);
    };
  }, [targetPosition]);
  
  const easeOutCubic = t => 1 - (({ pow }) => pow(1 - t, 3))({ pow: Math.pow });

  
  function animateCameraPosition(timestamp) {
    const timeElapsed = timestamp - animationStartTimeRef.current;
    const progress = Math.min(timeElapsed / animationDuration, 1);
  
    const easedProgress = easeOutCubic(progress);
  
    const currentX = position.x + (targetPosition.x - position.x) * easedProgress;
    const currentY = position.y + (targetPosition.y - position.y) * easedProgress;
    const currentZ = position.z + (targetPosition.z - position.z) * easedProgress;
  
    setTimeout(() => {
      setPosition(new Vector3(currentX, currentY, currentZ));
    },10)

  
    if (progress < 1) {
      // Continue the animation until it's finished
      animationRef.current = requestAnimationFrame(animateCameraPosition);
    }
  }
  

  camera.position.copy(position);

  return null;
}



  return (
    <div className="App overflow">
          <Sections.Introduction ref={appRef}/>
          <Sections.About />
          <Sections.Projects  setActiveTileIndex={setActiveTileIndex} />
          <Sections.Process appRef={appRef}/>
          <Sections.Contact />   
          <Canvas tabIndex={0} >
              <Suspense fallback={null}>
                  <EsotericModel/>
                  <MacsModel/>
                  <InkaModel/>
                  <KazanModel/>
                  <CashModel/>
              </Suspense>
              <fog attach="fog" args={['#354970', 0.5 ,10 ]} />
              <CameraPositioning />
          </Canvas>
          <Footer/>

      <div className='dot-overlay'></div>
    </div>
  );
}

export default App;
