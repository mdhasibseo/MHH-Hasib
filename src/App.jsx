import React from 'react'
import Banner from './Component/Banner'
import CircularSkills from './Component/Skill'
import About from './Component/About'
import Projects from './Component/Projects'

import Navber from './Component/Navber'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navber/>
    <Banner/>
    <About />
    <CircularSkills />
    <Projects />
   
    </div>
  )
}

export default App