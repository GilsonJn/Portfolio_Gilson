import { useState } from 'react'
import './App.scss'
import Hero from './Componentes/Hero'
import Navbar from './Componentes/Navbar'
import StarryBackground from './Componentes/StarryBackground'
import About from './Componentes/About'
import Skills from './Componentes/Skills'
import Projects from './Componentes/Projects'
import Contact from './Componentes/Contact'
import Footer from './Componentes/Footer'

function App() {
  return (
      <div className="app-container">
        <StarryBackground />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
