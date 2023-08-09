import { useState } from 'react'
import './App.css'
import Hero from './pt_components/Hero'
import Header from './pt_components/Header'
import About from './pt_components/About'
import Projects from './pt_components/Projects'
import Languages from './pt_components/Languages'
import Contact from './pt_components/Contact'
import Footer from './pt_components/Footer'

import TestNavbar from './pt_components/TestNavbar'

function App() {

  return (
    <div>

      <Hero />
      {/*         <Testespring />*/}
     {/* <Header /> */}
      <TestNavbar />
      <div id="main">
        <About />
        <Languages />
        <Projects />
        <Contact />
        <Footer />        
      </div>
    </div>
  )
}

export default App
