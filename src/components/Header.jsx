import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header>
      <div className="container-header">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}><img src="/gruas-perello.jpg" alt="Logo" className="logo" /></Link>
        
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        
        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}><b>Inicio</b></Link></li>
            <li><Link to="/la-empresa" className={location.pathname === '/la-empresa' ? 'active' : ''} onClick={() => setMenuOpen(false)}><b>La Empresa</b></Link></li>
            <li><Link to="/servicios" className={location.pathname === '/servicios' ? 'active' : ''} onClick={() => setMenuOpen(false)}><b>Servicios</b></Link></li>
            {/* <li><Link to="/flota" className={location.pathname === '/flota' ? 'active' : ''} onClick={() => setMenuOpen(false)}><b>Flota</b></Link></li> */}
            <li><Link to="/tecnologia" className={location.pathname === '/tecnologia' ? 'active' : ''} onClick={() => setMenuOpen(false)}><b>Tecnología</b></Link></li>
            <li><Link to="/cobertura" className={location.pathname === '/cobertura' ? 'active' : ''} onClick={() => setMenuOpen(false)}><b>Cobertura</b></Link></li>
            <li><Link to="/contacto" className={location.pathname === '/contacto' ? 'active' : ''} onClick={() => setMenuOpen(false)}><b>Contacto</b></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
