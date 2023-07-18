import React from 'react'
import {motion} from 'framer-motion'


type Props = {
  data: Xperience
}


function Card({data}: Props) {
  const desc = data.desc.map((e) => <li key={e}>{e}</li>);
  const techs = data.tech.map((e) => <div key={e} className='bg-[rgb(82,92,155)] px-5'>{e}</div>)
  return (
    <motion.div 
    initial={{
      x: -200,
      opacity: 0,
    }}
    whileInView={{
      x: 0,
      opacity: 1,
    }}
    transition={{duration:1.5}}
    viewport={{ once: true }}
    className='flex flex-col flex-shrink-0 shadow-xl w-auto md:w-[600px] xl:w-[700px] justify-between p-10 bg-[rgb(46,46,46)] m-5'>
        <article className='flex flex-col justify-start font-sans items-center '>
            <img src={data.img} className='w-32 h-32 mb-5'/>
            <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>{data.company}</h4>
              <p className='font-bol text-2xl mt-1'>{data.title}</p>
              <p className='uppercase py-5 text-gray-300'>{data.start} - {data.end}</p>
              <ul className='list-disc space-y-4 ml-5 text-lg'>
                {desc}
              </ul>
            </div>
        </article>
      <div className='flex flex-row flex-wrap px-10 self-start my-5 gap-2'>
        {techs}
      </div>
    </motion.div>
        
  )
}

export default Card