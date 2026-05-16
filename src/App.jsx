import React from 'react'
import Banner from './Component/Banner'
import CircularSkills from './Component/Skill'
import About from './Component/About'
import Projects from './Component/Projects'

import Navber from './Component/Navber'
import Aboutme from './Component/Aboutme'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navber/>
    <Banner/>
    <Aboutme />
    <About />
    <CircularSkills />
    <Projects />
   
    </div>
  )
}

export default App