import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    setSelected: Function;
    data: ProjectData
}

function ProjectCard({setSelected, data}: Props) {
  return (
    <motion.div 
        className='bg-[rgb(46,46,46)] cursor-pointer shadow-xl flex flex-col justify-between mb-10 md:mb-0'
        whileHover={{
            scale: 1.025,
            transition: {
                duration: 0.2,
            },
        }}
        whileTap={{
            scale: 0.95,
        }}
        onClick={() => {
            setSelected(data);
        }}
        layoutId={`card-${data.id}`}
        >
        <div className='flex justify-center items-center'>
            {data.logo && <img src={data.img} className='h-full w-[400px]'/>}
            {!data.logo && <img src={data.img} className='object-cover'/>}
        </div>
        <div className='inset-x-0 bottom-0 m-10'>
            <h4 className='text-4xl font-light '>{data.title}</h4>
            <p className='font-bol text-2xl mt-1'>{data.brief}</p>
        </div>
        
        
        {/*}
        <div className='flex flex-row flex-wrap gap-2'>
            {data.tech.map((e, i) => <div key={e} className=' bg-[rgb(82,92,155)] px-5'>{e}</div>)}
        </div>
    */}
    </motion.div>
  )
}

export default ProjectCard