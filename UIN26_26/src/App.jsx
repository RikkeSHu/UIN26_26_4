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
        <h1>Tirils side</h1>
      </header>
      
      <section>
        <img src={myPhoto} alt="Bilde av Tiril"></img>
      </section> 

      <section>
        <p>E-post:</p>
        <a href="Tirillg@hiof.no">Tirillg@hiof.no</a>
        <p>Bachlerstudiet er Digitale medier og design</p>
      </section>
    </>
  )
}

export default App
