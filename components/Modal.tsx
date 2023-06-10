import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {
    selected: ProjectData;
    setSelected: Function;
}

function Modal({selected, setSelected}: Props) {
    if (!selected) {
        return <></>
    }

  return (
    <div 
    onClick={() => setSelected(null)}
    className='flex justify-center items-center fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll'>
        <div onClick={(e) => e.stopPropagation()}
        className='w-full max-w-[700px] mx-auto my-8 px-8 cursor-default'
        >
            <motion.div 
            className='flex flex-col gap-3 bg-[rgb(46,46,46)] p-10 cursor-default shadow-xl'
            layoutId={`card-${selected.id}`}>
                <h4 className='text-4xl font-light'>{selected.title}</h4>
                <p className='font-bol text-2xl mt-1'>{selected.description}</p>
                <div className='flex flex-row flex-wrap gap-2'>
                {selected.tech.map((e, i) => <div key={e} className=' bg-[rgb(82,92,155)] px-5'>{e}</div>)}
                </div>
                <div className='flex flex-row'>
                    {selected.links.map((e, i) => 
                    <SocialIcon 
                    url={e}
                    fgColor='gray'
                    bgColor='transparent'
                    />
                    )}
                </div>
            </motion.div>


        </div>
    </div>
  )
}

export default Modal