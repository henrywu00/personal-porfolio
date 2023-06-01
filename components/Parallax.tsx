import React from 'react'
import { useRef } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
  } from "framer-motion";

import { wrap } from '@motionone/utils';

type Props = {
    children: string;
    baseVelocity: number;
    image: string;
}


function Parallax({children, baseVelocity = 50, image = ""}: Props) {

    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity,[0, 1000], [0, 5], {
        clamp: false
    });
    
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
        console.log(scrollY);
    });

    
    const has_image = image != "";
    let sc;
    if (has_image) {
        const img = [...Array(16)].map((e, i) => <span><img src={image} className='max-w-min'/></span>)
        sc = <div className='flex'>
        {img}
        </div>
    } else {
        sc = <div className='flex'>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        </div>
    }

  return (
    <div className='parallax'>
        <motion.div className='scroller' style={{x}}>
            {sc}
        </motion.div>
    </div>
  )
}

export default Parallax