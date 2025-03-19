import React from 'react';
import './css/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Grúas Mallorca</h3>
            <p>Asistencia y Auxilio en carretera 1986. Servicio de grúas en Palma de Mallorca.</p>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>(+34) 971 43 18 40</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>info@gruasmallorca.es</p>
            </div>
          </div>
          <div className="footer-column">
            <h3>Miembros de REAC</h3>
            <p>Pertenecemos a la mayor Red de Empresas de Auxilio en Carretera</p>
            <div className="reac-link">
              <a href="https://reac.es" target="_blank" rel="noopener noreferrer">reac.es</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Desarrollado por <a href="#" className="developer-link">Lambda Automotive</a> | 2025 Grúas Mallorca. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="/aviso-legal">Aviso legal</a>
            <a href="/politica-privacidad">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
