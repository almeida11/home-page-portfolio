import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//reaproveitamento de estruturas
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
//outlet passa o conteudo central

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
