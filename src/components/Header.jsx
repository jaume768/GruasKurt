import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/la-empresa">La Empresa</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/flota">Flota</Link></li>
          <li><Link to="/tecnologia">Tecnología</Link></li>
          <li><Link to="/cobertura">Cobertura</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
