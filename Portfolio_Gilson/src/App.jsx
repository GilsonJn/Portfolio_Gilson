import { useState, Suspense, lazy } from 'react' // 1. Adicionamos Suspense e lazy aqui
import './App.scss'

// IMPORTAÇÕES NORMAIS (O que aparece logo que o site abre)
import Hero from './Componentes/Hero'
import Navbar from './Componentes/Navbar'
import StarryBackground from './Componentes/StarryBackground'
import { LanguageProvider } from './context/LanguageContext'
import CustomCursor from './Componentes/CustomCursor'
import Reveal from './Componentes/Reveal'

// 2. IMPORTAÇÕES "PREGUIÇOSAS" (Só descarregam quando necessário para poupar JavaScript)
const About = lazy(() => import('./Componentes/About'))
const Skills = lazy(() => import('./Componentes/Skills'))
const Projects = lazy(() => import('./Componentes/Projects'))
const Contact = lazy(() => import('./Componentes/Contact'))
const Footer = lazy(() => import('./Componentes/Footer'))

function App() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <StarryBackground />
      <Navbar />
      <Hero />
      
      {/* 3. O SUSPENSE: Ele "segura" a renderização. 
          O fallback é o que o utilizador vê naquela fração de segundo enquanto o JS é descarregado. 
          Pus uma div invisível para não estragar o design. */}
      <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
        
        <Footer />
      </Suspense>
      
    </LanguageProvider>
  )
}

export default App