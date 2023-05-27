import React from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion"

type Props = {}

export default function Header({}: Props) {
    return (
        <header className='top-0 flex items-start'>
            <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center'>
                {/* Icons */}
                <SocialIcon 
                    url='https://github.com/henrywu00'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon 
                    url='https://www.linkedin.com/in/henry-wu-6742771a0/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://soundcloud.com/yuna120'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
        </header>
    )
}