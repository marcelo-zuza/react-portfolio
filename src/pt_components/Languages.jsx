import Reactico from '../assets/img/icons/atom.png'
import HtmlIcon from '../assets/img/icons/html-5.png'
import ApiIcon from '../assets/img/icons/api.png'
import CssIcon from '../assets/img/icons/css.png'
import GitIcon from '../assets/img/icons/git.png'
import JsIcon from '../assets/img/icons/js.png'
import MysqlIcon from '../assets/img/icons/mysql2.png'
import PostgreIcon from '../assets/img/icons/postgre.png'
import PythonIcon from '../assets/img/icons/python.png'
import DjangoIcon from '../assets/img/icons/django2.png'
import NodeIcon from '../assets/img/icons/nodejs.png'
import TSIcon from '../assets/img/icons/Typescript_logo.png'
import BTIcont from '../assets/img/icons/bootstrap.png'



const Languages = () => {
  return (
    <div>
        <div className='container'>
            <section className="section" id='languages'>
            <div className="container text-center">
            <div className="section-title" data-aos="fade-up">
                    <h2>LINGUAGENS</h2>
                    <p>Minhas ferramentas</p>
                </div>
                <div className="row" id="languages-style">
                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="http://www.javascript.com/" target="_blank" rel="noopener noreferrer"><img src={JsIcon} alt="javascript" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">JAVASCRIPT</h6>
                    </div>
                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={Reactico} alt="reactjs" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">REACT JS</h6>
                    </div>

                    
                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer"><img src={NodeIcon} alt="python" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">NODE.JS</h6>
                    </div> 

                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img src={HtmlIcon} alt="htmlico" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">HTML</h6>
                  
                    </div>

                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img src={CssIcon} alt="cssicon" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">CSS</h6>
                    </div>

                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img src={BTIcont} alt="apirest" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">BOOTSTRAP</h6>
                    </div>

                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><img src={MysqlIcon} alt="mysql" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">MySQL</h6>
                    </div>

                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img src={PostgreIcon} alt="postgre" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">PostgreSQL</h6>
                    </div>
                    
                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img src={GitIcon} alt="git" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">GIT</h6>
                    </div>

                    <div className="col-lg-4 language-icons">
                        <div className="mb-3"><a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer"><img src={TSIcon} alt="django" height={100} width={100} /></a> </div>
                        <h6 className="title mb-3">TYPESCRIPT</h6>
                    </div>

                </div>
            </div>
        </section>

        </div>


    </div>
  )
}

export default Languages