import React from 'react'
import herologo from '../assets/img/programacaoWebInvert.png'


const Hero = () => {

  return (
    <div>
        <section id="hero">
            <div className="hero-container fade-in-element">
                <a href="index.html" className="hero-logo" data-aos="zoom-in"><img src={herologo} alt="logo" id='imagem-hero' /></a>
                <h1 data-aos="zoom-in">MARCELO ZUZA</h1>
                <h2 data-aos="fade-up">Desenvolvimento Web Full Stack</h2>
            <a data-aos="fade-up" data-aos-delay="200" href="#about" className="btn-get-started scrollto">Comece por aqui</a>
            </div>
    </section>
    </div>
  )
}

export default Hero