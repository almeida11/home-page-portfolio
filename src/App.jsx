import { useState } from 'react'
import './App.css'

//reaproveitamento de estruturas
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
//outlet passa o conteudo central

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='view'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
