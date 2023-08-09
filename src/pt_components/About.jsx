import React from 'react'
import about from '../assets/img/about.jpg'

const About = () => {
  return (
    <div className='container'>
        <section id="about" className="about fade-in-element">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Sobre mim</h2>
                    <p>Desenvolvedor Full-Stack</p>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="image">
                        <img src={about} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
                            <h3>FRONT-END</h3>
                            <p id='fsd-italic'>
                                sou apaixonado por transformar ideias em realidade digital, construindo desde a interface do usuário até a lógica complexa nos bastidores.
                            </p>
                            <p>
                            No front-end, com React.JS, dou vida a designs estáticos, criando componentes interativos e responsivos que cativam os usuários. 

                            </p>
                            <ul>
                                <li><i className="bx bx-check-double"></i>
                                Com React.js, minha paixão é dar vida a interfaces dinâmicas e envolventes. Cada componente que crio é como uma peça de um quebra-cabeça, se encaixando perfeitamente para formar uma experiência do usuário fluida e cativante. Através da combinação de JavaScript moderno e a abordagem declarativa do React, transformo ideias em elementos visuais interativos.
 
                                </li>

                            </ul>
 
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6 about-set" data-aos="fade-right">
                        <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
                                <h3>BACK-END</h3>
                                <p id='fsd-italic'>
                                meu trabalho é impulsionado pelo compromisso em construir bases sólidas para aplicações dinâmicas na web
                                </p>
                                <p>
                                Com o Node.js, cada linha de código que escrevo é uma peça crucial para estabelecer a lógica por trás de cada funcionalidade.  

                                </p>
                                <ul>
                                    <li><i className="bx bx-check-double"></i>
                                    Desde a configuração inicial até a implementação de APIs e a integração de bancos de dados, concentro-me em garantir que a aplicação funcione sem problemas e de forma segura. 
    
                                    </li>

                                </ul>
    
                            </div>
                        </div>
                    <div className="col-lg-6 about-set" data-aos="fade-left">
                        <div className="image">
                            <img src={about} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>



            </div>
        </section>

    </div>
  )
}

export default About