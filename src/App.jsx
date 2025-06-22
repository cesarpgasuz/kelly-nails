import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import chicaAnime from './assets/anime.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={chicaAnime} className="anime" alt="Chica Anime" style={{width:'100px'}} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Hola hola cuidado con la hola...
      </p>
    </>
  )
}

export default App
