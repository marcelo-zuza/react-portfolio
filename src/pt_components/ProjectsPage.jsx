import TestNavbar from "./TestNavbar"
import Footer from "./Footer"
import Img1 from "../assets/img/about.jpg"
import SwImg from "../assets/img/projects/secretword.png"
import './ProjectsPage.css'
import { Link } from "react-router-dom"


const ProjectsPage = () => {
  return (
    <div>
        <TestNavbar />
        <div>
        <div className="container text-center">
                <div className="section-title" data-aos="fade-up">
                    <h2>PROJETOS</h2>
                    <p>Conheça meus projetos</p>
                </div>
        </div>

            
            <div className="container text-center" id="project-list">
                <div className="row">
                    <div className="col">
                    
                        <div className="card" id='card-project'>
                            <img src={SwImg} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">SECRET WORD</h5>
                                <p className="card-text">Jogo em que você tem que adivinhar a palavra secreta letra por letra</p>
                                <Link to="secretword" className="btn botao">Veja</Link>
                                <a href="#" className="btn botao">GitHub</a>

                            </div>
                        </div>
                    </div>

                    <div className="col">
                    
                        <div className="card" id='card-project'>
                            <img src="" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor id perspiciatis eius! Deserunt ab impedit magnam enim odit fugit quidem quam pariatur voluptatibus provident. Rem rerum nulla pariatur aliquid non!</p>
                                <a href="#" className="btn botao">Go somewhere</a>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                    
                        <div className="card" id='card-project'>
                            <img src="" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ducimus fugit iure quam beatae. Nisi, voluptates! Laboriosam iusto, excepturi asperiores expedita velit distinctio odit officiis quam atque culpa dolorem numquam.</p>
                                <a href="#" className="btn botao">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <Footer />

    </div>
  )
}

export default ProjectsPage