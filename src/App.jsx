import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'

const App = () => {
  return (
    <div className='p-10'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>

    </div>
  )
}

export default App