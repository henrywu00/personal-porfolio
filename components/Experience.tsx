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
  desc: ["Implemented a core feature that was responsible for the world building pipeline in Meta's Horizon Worlds", 
  "Optimized dataflow from UI to Unity backend, improving performance by 30%",
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
    className='flex flex-col justify-evenly items-center max-w-full'>
        <h3 className='text-5xl lg:text-6xl font-sans font-bold'>Experience</h3>

        <div id='card-container' className='flex flex-col p-10'>
            <Card data={Meta}/>
            <Card data={Purdue}/>
        </div>
    </div>
  )
}

export default Experience