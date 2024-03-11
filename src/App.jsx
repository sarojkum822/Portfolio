import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import {Routes,Route} from 'react-router-dom'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div className='p-10'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>

    </div>
  )
}

export default App