import React from 'react'
import {motion} from "framer-motion"
import ProjectCard from './ProjectCard'

type Props = {
  setSelected: Function
}

const ProjectList: ProjectData[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "This is my personal portfolio showcasing my projects and what I have accomplished. Built with Typescript, Next.JS, React, TailwindCSS, and deployed using Vercel",
    tech: ["TypeScript", "Next.JS", "Tailwind CSS", "Vercel"],
    links: ["https://github.com/henrywu00/personal-porfolio", "https://www.henrywu.dev/"],
    brief: "My personal portfolio",
    img: "./personal.png",
    logo: false,
  },
  {
    id: 2,
    title: "Purcle",
    description: "An online forum designed for Purdue students to interact and post about various topics. Built with Javascript, React, Axios, Django, PostgreSQL, and deployed using Heroku",
    tech: ["Python"],
    links: ["https://github.com/ldavid19/Purcle"],
    brief: "Purdue social media",
    img: "./purcle-logo.png",
    logo: true,
  },
  
  {
    id: 3,
    title: "Visible Past",
    description: "A visualization project that displays war movement using primary historical data from Operation Barbarossa during WWII. Linked is my presentation of the research.",
    tech: ["Python", "Jupyter", "GCP"],
    links: ["https://www.youtube.com/watch?v=ewUfKMT5vEw"],
    brief: "WWII data visualization",
    img: "./visible.png",
    logo: false,
  },
  {
    id: 4,
    title: "Ray Tracer",
    description: "A CPU based ray tracer written in pure C++ for CS434 Advanced Computer Graphics. Extended with support for multi-threading, animation exporting, and scene importing.",
    tech: ["C++"],
    links: ["https://github.com/henrywu00/Ray-Tracer"],
    brief: "A CPU based ray tracer written in C++",
    img: "./raytrace.png",
    logo: false,
  },
  {
    id: 5,
    title: "Boids Simulation",
    description: "A simulation exploring the Boids artificial life program, originally written by Craig Reynolds in 1986. It simulates the flocking behavior of birds with respect to three rules: separation, alignment, and cohesion. Linked is a video demo on YouTube.",
    tech: ["C++", "OpenGL"],
    links: ["https://github.com/henrywu00/animated-boids", "https://www.youtube.com/watch?v=8pgpNWHRqEo"],
    brief: "An implementation of the Boids artificial life program",
    img: "./boids.png",
    logo: false,
  },


]

function Projects({setSelected}: Props) {
  return (
    <div 
    className='flex flex-col justify-evenly items-center max-w-full'>
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
                className='lg:basis-1/2 py-10 lg:p-30 md:p-20'>

          <h3 className='text-5xl lg:text-6xl font-sans font-bold mb-20'>Projects</h3>
        </motion.div>
        
        <div id='proj-container' className='md:grid md:gap-4 md:grid-cols-3 md:grid-rows-1 mb-10 mx-10 max-w-[1200px]'>
          {ProjectList.map((e, i) => <ProjectCard setSelected={setSelected} key={i} data={e}/>)}
        </div>
    </div>
  )
}

export default Projects