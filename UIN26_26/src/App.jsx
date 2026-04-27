import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import myPhoto from './assets/tirilphoto.jpg';





function App() { 

  return (
    <>
      <header>
        <h1>Tiril</h1>
      </header>
      
      <section>
        <img src={myPhoto} alt="Bilde av Tiril"></img>'
        
        <p>E-post:</p>
        <a href="Tirillg@hiof.no">Tirillg@hiof.no</a>
        
        <p>Bachlerstudiet er Digitale medier og design</p>
      </section>

    <section>
      <h3>Arbeidskravene</h3>
    </section>

    </>
  )
}

export default App
