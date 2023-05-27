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

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 10 }));
  
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    });
  
    return (
      <group rotation={[0, 0, Math.PI / 4]}  >
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color='#f272c8'
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  };



function StarCanvas({}: Props) {
    

    return (
            <div className='absolute w-full h-full -z-1'>
            <Canvas>
            <Stars/>
            <Preload all />
            </Canvas>
            </div>
    )
}

export default StarCanvas