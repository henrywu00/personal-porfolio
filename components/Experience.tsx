import React from 'react'
import {motion} from "framer-motion"
import Card from './Card'

type Props = {}


const Meta: Xperience = {
  company: "Meta",
  title: 'Software Engineering Intern',
  start: "May 2022",
  end: "Aug 2022",
  location: "Menlo Park, CA",
  desc: ["Created UI components with React VR for a core feature responsible for the world building pipeline in Meta’s Horizon Worlds that reached over 200,000 users", 
  "Optimized dataflow from UI to Unity backend, improving performance by 30%",
  "Conducted end-to-end integration tests and unit testing to ensure high quality code",
  "Collaborated with cross-functional partners to implement fixes for critical user-facing bugs"],
  img: "./meta-logo.png",
  tech: ["Unity", "C#", "React", "JavaScript", "TypeScript", "Flow"]
}

const Purdue: Xperience = {
  company: "Purdue University",
  title: 'Research Assistant Intern',
  start: "May 2021",
  end: "May 2022",
  location: "West Lafayette, IN",
  desc: [
    "Developed a web-based map visualization tool, in Jupyter Notebook, to display war movements using primary historical data from WWII",
    "Conducted quantitative analysis on casualty lists and battle maps in Python",
    "Migrated the current local database online through Google Sheets API using Python"
  ],
  img: "./Purdue_University_Logo.png",
  tech: ["Python", "Jupyter"]
}



function Experience({}: Props) {
  return (
    <div 
    className='flex flex-col justify-evenly items-center max-w-full overflow-hidden'>
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

          <h3 className='text-5xl lg:text-6xl font-sans font-bold'>Experience</h3>
      </motion.div>
        

        <div id='card-container' className='flex flex-col p-10'>
            <Card data={Meta}/>
            <Card data={Purdue}/>
        </div>
    </div>
  )
}

export default Experience