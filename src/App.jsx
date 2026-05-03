import React from 'react'
import Banner from './Component/Banner'
import CircularSkills from './Component/Skill'
import About from './Component/About'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
    <Banner/>
    <About />
    <CircularSkills />
   
    </div>
  )
}

export default App