import { useState } from 'react'
import './App.scss'
import Hero from './Componentes/Hero'
import Navbar from './Componentes/Navbar'
import StarryBackground from './Componentes/StarryBackground'

function App() {
  return (
    <>
      <StarryBackground />
      <body>
        <Navbar />
        <Hero />
      </body>
    </>
  )
}

export default App
