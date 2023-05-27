import React from 'react'
import {motion} from "framer-motion"
import Card from './Card'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex flex-col justify-evenly items-center'>
        <h3 className='top-24 uppercase tracking-[20px] text-gray-500
        text-2xl'>Experience</h3>


        <div className='w-full flex-col p-10 items-center text-center'>
            <h1>WIP stay tuned</h1>
        </div>
    </motion.div>
  )
}

export default Experience