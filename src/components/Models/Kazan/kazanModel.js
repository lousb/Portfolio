import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { useGLTF, useCubeTexture, useScroll } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import gsap from "gsap";

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function KazanModel(props) {
  const { nodes } = useGLTF("/kazan.gltf");

  const ref = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const texture = useCubeTexture([
    'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'
  ],{path:'/'});



  useFrame(({ viewport }) => {
    var x = (mousePosition.x / viewport.width ) / 50
    var y = (mousePosition.y / viewport.height) / -10

    // Adjust the object's position based on mouse position
    const xOffset = mousePosition.x / viewport.width - 0.5;
    const yOffset = mousePosition.y / viewport.height - 0.5;
    

    
    ref.current.position.x = xOffset * 0.003 - 2.6;
    ref.current.position.y = yOffset * 0.2;


    ref.current.lookAt(x - 3, y - 10.5, 8);

  })
  
  useFrame(({ clock }) => {
    ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.08 - 26.5; 
    ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.05 - 0.1; 
    ref.current.rotation.x += 0.4;
  });


  return (
    <group dispose={null}>
      <mesh {...props}
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        scale={40}
      >
        <meshBasicMaterial
          attach="material"
          color="#202A45"
          opacity={1}
          envMap={texture}
        />
      </mesh>  
    </group>
  );
}

useGLTF.preload("/kazan.gltf");
