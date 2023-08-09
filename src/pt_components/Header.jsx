import React from 'react'
import { Link, animatedScroll as scroll } from 'react-scroll'
import Logo from '../assets/img/logo2.png'


const Header = () => {
    const scrollToTop = () => {
        scroll.scrollToTop()
    }
  return (
    <div>
         <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <a href="index.html"><img src={Logo} alt="" className="img-fluid" /></a>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">SOBRE</a></li>
                    <li><a className="nav-link scrollto" href="#languages">LINGUAGENS</a></li>
                    <li><a className="nav-link scrollto " href="#projects">PROJETOS</a></li>
                    <li><a className="nav-link scrollto" href="#contact">CONTATO</a></li>
         
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header