import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div  className='container'>
      <section id="projects" className="portfolio">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>PROJETOS</h2>
            <p>Conheça meus projetos</p>
            <div className="hero-container fade-in-element" id='btn-projetos'>
              <Link to="/projects" className="btn-get-started" id='projects'>Projetos</Link>

            </div>

          </div>

          
        </div>
      </section>
    </div>
  )
}

export default Projects