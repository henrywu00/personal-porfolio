import React from 'react'
import ProjectCard from './ProjectCard'

type Props = {
  setSelected: Function
}

const ProjectList: ProjectData[] = [
  {
    id: 1,
    title: "Purcle",
    description: "An online forum designed for Purdue students to interact and post about various topics",
    tech: ["Python"],
    links: ["https://github.com/ldavid19/Purcle"],
    brief: "Purdue social media",
    img: "./purcle-logo.png",
    logo: true,
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "This is my personal portfolio about me and what I have accomplished",
    tech: ["TypeScript", "Next.JS", "Tailwind CSS", "Vercel"],
    links: ["https://github.com/henrywu00/personal-porfolio", "https://www.henrywu.dev/"],
    brief: "My personal portfolio",
    img: "./portfolio.png",
    logo: false,
  },
  {
    id: 3,
    title: "Visible Past",
    description: "A visualization project that displays war movement using primary historical data from Operation Barbarossa during WWII",
    tech: ["Python", "Jupyter", "GCP"],
    links: ["https://www.youtube.com/watch?v=ewUfKMT5vEw"],
    brief: "WWII data visualization",
    img: "./duri.png",
    logo: false,
  },

]

function Projects({setSelected}: Props) {
  return (
    <div 
    className='flex flex-col justify-evenly items-center max-w-full'>
        <h3 className='text-5xl lg:text-6xl font-sans font-bold mb-20'>Projects</h3>
        <div id='proj-container' className='grid gap-4 grid-cols-3 grid-rows-3 mx-10 max-w-[1200px]'>
          {ProjectList.map((e, i) => <ProjectCard setSelected={setSelected} key={i} data={e}/>)}
        </div>
    </div>
  )
}

export default Projects