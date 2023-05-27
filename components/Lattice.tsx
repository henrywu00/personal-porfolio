import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Points, PointMaterial } from '@react-three/drei';
import { random } from 'maath';

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";

type Props = {}

const deg2rad = degrees => degrees * (Math.PI / 180);


function Earth({}: Props) {
    
    const myMesh = useRef();
 
    const earth = useGLTF("./stylized_planet/scene.gltf")
    return <primitive ref={myMesh} object={earth.scene} scale={2.5}/>
}

function Lattice({}: Props) {
    

    return (
        <div className='w-full h-1/2'>
            <Canvas fallback={null}>
                <OrbitControls
                 autoRotate
                autoRotateSpeed={0.5}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                />
                <directionalLight position={[0, 0, 5]} color="red" />
                <Earth/>
                <Preload all />
            </Canvas>
        </div>
            

    )
}

export default Lattice