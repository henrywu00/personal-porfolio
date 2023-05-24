import React from 'react'
import {motion} from 'framer-motion'


type Props = {}

function Card({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden
    '>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}

        className='w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="/meta-logo.png/"/>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Engineering Intern</h4>
            <p className='font-bol text-2xl mt-1'>Meta</p>
            <div className='flex space-x-2 my-2'>

            </div>
            <p className='uppercase py-5 text-gray-300'>Started - Ended</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>p</li>
                <li>p</li>
                <li>p</li>
                <li>p</li>
                <li>p</li>
            </ul>
        </div>
    </article>
  )
}

export default Card