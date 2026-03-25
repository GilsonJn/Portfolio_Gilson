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
import { LanguageProvider } from './context/LanguageContext'
import CustomCursor from './Componentes/CustomCursor'

function App() {
  return (
      <LanguageProvider>
        <CustomCursor />
        <StarryBackground />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </LanguageProvider>
  )
}

export default App
