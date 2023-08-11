import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../assets/img/logo2.png';
import './TestNavbar.css'
import { Link }  from 'react-router-dom';
const TestNavbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar ${isNavbarFixed ? 'fixed-top' : ''}`;
  
  return (
    <div>
    <div>
      <header id="header" className={navbarClasses}>
        <div className="container d-flex salign-items-center justify-content-between">
          <div className="logo">
            <a href="/"><img src={Logo} alt="" className="img-fluid" /></a>
          </div>
          <nav id="navbar">
            {/* ... */}
            <ul>
                    <li><Link className="nav-link scrollto" to="/">Home</Link></li>
                    <li><a className="nav-link scrollto" href="/#about">SOBRE</a></li>
                    <li><a className="nav-link scrollto" href="/#languages">LINGUAGENS</a></li>
                    <li><a className="nav-link scrollto " href="/#projects">PROJETOS</a></li>
                    <li><a className="nav-link scrollto" href="/#contact">CONTATO</a></li>
         
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      </div>
    </div>
  )
}

export default TestNavbar;
