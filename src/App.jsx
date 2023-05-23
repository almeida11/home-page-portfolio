import { useState } from 'react'
import './App.css'
import { useLocation } from 'react-router-dom'


//reaproveitamento de estruturas
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './routes/home/Home'
import About from './routes/about/About'
import Project from './routes/projects/Project'
import NavbarRes from './components/Navbar/NavbarRes'

//outlet passa o conteudo central


function App() {
  const location = useLocation()

  return (
    <div className='view'>
      {
        location.pathname === '/' ? <div>
          <Navbar />
          <Home />
          <About />
          <Project />
        </div>
          :
          <div>
            <NavbarRes />
            <Outlet />
          </div>
      }
    </div>
  )
}

export default App
