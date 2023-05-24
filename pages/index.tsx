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

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white z-0'>
      <Head>
        <title>Henry Wu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id='hero' className='mb-20'>
        <Hero />
      </section>
      
      <section id='about' className='-skew-y-12'>
        <Parallax baseVelocity={5} image=''>i'm a gamer</Parallax>
        <Parallax baseVelocity={-5} image='/Vandal.png/'> </Parallax>
      </section>
      

      {/* About */}
      <section className=''>
        <About/>
      </section>
      {/* Experience */}
      <section id='experience' className=''>
        <Experience/>
      </section>
      
      {/* Projects */}
      <section id='projects' className=''>
      <Projects/>
      </section>
      
      {/* Contact Me */}
      <Contact/>
    </div>
  )
}
