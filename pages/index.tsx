import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Nav from '../components/Header';
import Header from '../components/Header';
import Parallax from '../components/Parallax';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function Home() {
  const [selected, setSelected] = useState(null)
  return (
    <div className='bg-[rgb(36,36,36)] text-white z-0'>
      <Head>
        <title>Henry Wu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <div className='fixed z-[100]'>
        <Header/>
      </div>
      
      {/* Hero */}
      <section id='hero' className=''>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className=''>
        <About/>
      </section>


      {/* Experience */}
      <section id='experience' className=''>
        <Experience/>
      </section>
      
      {/* Projects */}
      <section id='projects' className=''>
      <Projects setSelected={setSelected}/>
      </section>
      <Modal selected={selected} setSelected={setSelected}/>
      
      {/* Contact Me */}
    </div>
  )
}
