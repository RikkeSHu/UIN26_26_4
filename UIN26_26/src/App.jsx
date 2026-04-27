import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import IkramProfile from './components/profiles/IkramProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>GRUPPE 26</h1>
      </header>

      <main>
        <section>
          <IkramProfile />
        </section>
      </main>
    </>
  )
}

export default App
