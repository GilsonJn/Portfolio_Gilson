import { useState } from 'react'
import './App.scss'
import Hero from './Componentes/Hero'
import Navbar from './Componentes/Navbar'
import StarryBackground from './Componentes/StarryBackground'
import About from './Componentes/About'
import Skill from './Componentes/Skill'
import Projects from './Componentes/Projects'

function App() {
  return (
    <>
      <StarryBackground />
      <body>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skill />
      </body>
    </>
  )
}

export default App
