import React from 'react'
import {motion} from 'framer-motion'
import Parallax from './Parallax'


type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col justify-evenly items-center overflow-hidden'>

      
      <div className='font-sans'>
        {/*
        <Parallax baseVelocity={2} image=''>Nice to meet you //</Parallax>
        <Parallax baseVelocity={-2} image=''>Here's what I do //</Parallax>
        */}
      </div>
      <motion.div 
                initial={{
                  x: -200,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{duration:1.5}}
                viewport={{ once: true }}
                className='xl:basis-1/2 py-10 xl:p-30 md:p-20'>

          <h3 className='text-5xl xl:text-6xl font-sans font-bold mt-10 mx-10 text-center'>Nice to meet you!</h3>
      </motion.div>
      
      <div className='flex flex-col xl:flex-row justify-start xl:justify-center items-center text-center pb-20 px-20 xl:px-40'>
        
        <motion.div 
                initial={{
                  x: -200,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{duration:1.5}}
                viewport={{ once: true }}
                className='xl:basis-1/2 py-10 md:p-40'>

          <img src='/henry-photo.png' className='rounded-full'/>
        </motion.div>
        <motion.div 
        initial={{
                  x: 200,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{duration:1.5}}
                viewport={{ once: true }}
        className='xl:basis-1/2 xl:p-10'>
          <p className='font-sans text-xl md:text-2xl'>I am a recent computer science graduate from Purdue University currently looking for Software Engineering opportunities! I am a fullstack focused engineer
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