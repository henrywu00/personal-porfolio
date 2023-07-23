import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Lattice from './Lattice';
import StarCanvas from './StarCanvas';


type Props = {}

export default function Hero ({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, I'm Henry Wu",
        "I'm a Software Engineer"
    ],
        loop: true,
        delaySpeed: 2000,
    });

    return <div className='h-screen flex flex-col space-y-5 items-center 
    justify-center text-center overflow-hidden'>

      
        <StarCanvas/>
        <Lattice/>
        

        <h1 className='text-5xl lg:text-7xl font-sans scroll-px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>

        <div className='pt-5 z-[100]'>
            <Link href="#about" className=''>
                <button className='heroButton'>About</button>
            </Link>

            <Link href="#experience" className=''>
                <button className='heroButton'>Experience</button>
            </Link>
            
            <Link href="#projects" className=''>
                <button className='heroButton'>Projects</button>
            </Link>

            <Link href="/Henry_Wu_Resume__.pdf" className='' rel="noopener noreferrer" target="_blank">
                <button className='heroButton'>Resume</button>
            </Link>
            
        </div>

    </div>
}