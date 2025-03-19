import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';

export default function Header() {
  const location = useLocation();
  
  return (
    <header>
      <div className="container-header">
        <h1 className="logo">Grúas Perello</h1>
        <nav>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link></li>
            <li><Link to="/la-empresa" className={location.pathname === '/la-empresa' ? 'active' : ''}>La Empresa</Link></li>
            <li><Link to="/servicios" className={location.pathname === '/servicios' ? 'active' : ''}>Servicios</Link></li>
            <li><Link to="/flota" className={location.pathname === '/flota' ? 'active' : ''}>Flota</Link></li>
            <li><Link to="/tecnologia" className={location.pathname === '/tecnologia' ? 'active' : ''}>Tecnología</Link></li>
            <li><Link to="/cobertura" className={location.pathname === '/cobertura' ? 'active' : ''}>Cobertura</Link></li>
            <li><Link to="/contacto" className={location.pathname === '/contacto' ? 'active' : ''}>Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
