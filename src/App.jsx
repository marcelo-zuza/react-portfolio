import { useState } from 'react'
import './App.css'
import './assets/js/script.jsx'
import Hero from './pt_components/Hero'
import Header from './pt_components/Header'
import About from './pt_components/About'
import Services from './pt_components/Services'
import Feature from './pt_components/Feature'
import Why from './pt_components/Why'
import Projects from './pt_components/Projects'
import FadeInOnScroll from './services/FadeInOnScroll'
import Languages from './pt_components/Languages'
import Contact from './pt_components/Contact'
import Footer from './pt_components/Footer'

import Testespring from './pt_components/Testespring'
import EmailService from './pt_components/EmailService'
import TestFooter from './pt_components/TestFooter'
import TestFooter2 from './pt_components/TestFooter2'
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
