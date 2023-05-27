import React from 'react'
import {motion} from 'framer-motion'
import Parallax from './Parallax'


type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col justify-start overflow-hidden'>
      <div className='font-cutive'>
        <Parallax baseVelocity={5} image=''>Nice to meet you //</Parallax>
        <Parallax baseVelocity={-5} image=''>Here's what I do //</Parallax>
      </div>
      <div className='flex flex-col lg:flex-row justify-start lg:justify-center items-center text-center p-20 lg:px-40'>
        <motion.div 
                initial={{
                  x: -500,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{duration:1.5}}
                viewport={{ once: true }}
                className='lg:basis-1/2 lg:p-40 p-20'>

          <img src='/henry-photo.png' className='rounded-full'/>
        </motion.div>
        <motion.div 
        initial={{
                  x: 500,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{duration:1.5}}
                viewport={{ once: true }}
        className='lg:basis-1/2 lg:p-10'>
          <p className='font-cutive text-xl'>I am a recent computer science graduate from Purdue University currently looking for Software Engineering opportunities! I am a frontend focused engineer
                with a passion for problem solving and self learning. <br></br><br></br>
                
                During my degree, I specialized in computer graphics and machine intelligence. My goal is to integrate computer graphics with frontend development and bring
                a whole new dimension to the web. At the same time I wish to continue to develop my skills as an engineer in this rapidly changing industry. <br></br><br></br>
                
                During my freetime, I enjoy playing video games and creating electronic music.
          </p>
        </motion.div>
      </div>
    </div>
    
  )
}

export default About