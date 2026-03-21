import { useState } from 'react'
import './App.scss'
import Hero from './Componentes/Hero'
import Navbar from './Componentes/Navbar'
import StarryBackground from './Componentes/StarryBackground'
import About from './Componentes/About'
import Skills from './Componentes/Skills'
import Projects from './Componentes/Projects'
import Contact from './Componentes/Contact'

function App() {
  return (
      <body>
        <StarryBackground />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </body>
  )
}

export default App
