import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


type Props = {}

export default function Hero ({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Henry Wu",
        "a Software Engineer",
        "a gamer"
    ],
        loop: true,
        delaySpeed: 2000,
    });

    return <div className='h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden'>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
            <span className='mr-3'>Hi, I'm {text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>

        <div className='pt-5'>
            <Link href="#about">
                <button className='heroButton'>About</button>
            </Link>

            <Link href="#experience">
                <button className='heroButton'>Experience</button>
            </Link>
            
            <Link href="#projects">
                <button className='heroButton'>Projects</button>
            </Link>
            
            <Link href="#skills">
                <button className='heroButton'>Skills</button>
            </Link>
            
        </div>

    </div>
}