import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import herologo from '../assets/img/programacaoWebInvert.png'


const Hero = () => {

  const logo = <a href="index.html" className="hero-logo" data-aos="zoom-in"><img src={herologo} alt="logo" id='imagem-hero' /></a>
  
  const titulo = <h1 data-aos="zoom-in">MARCELO ZUZA</h1>
 
  const subtitulo = <h2 data-aos="fade-up">Desenvolvimento Web Full Stack</h2>
  const botao = <a data-aos="fade-up" data-aos-delay="200" href="#about" className="btn-get-started scrollto">Comece por aqui</a>

  const items = [logo, titulo, subtitulo, botao];
  const [toggle, setToggle] = useState(true);
  
  const trail = useTrail(items.length, {
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 500 } 
  });
  
  return (
    <div className="hero-container">
      {trail.map((style, index) => (
        <animated.div key={index} style={style} className="hero-item">
          {items[index]}
        </animated.div>
      ))}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default Hero;
