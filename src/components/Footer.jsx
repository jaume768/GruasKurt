import React from 'react';
import './css/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contacto 24 horas</h3>
            <p>Teléfono: 971 000 000</p>
            <p>Email: info@gruasperello.com</p>
          </div>
          <div className="footer-links">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-address">
            <h3>Dirección</h3>
            <p>Calle Ejemplo, 123</p>
            <p>07001 Palma, Mallorca</p>
          </div>
        </div>
        <div className="copyright">
          <p> 2024 Grúas Perello - Servicio de grúas las 24 horas</p>
        </div>
      </div>
    </footer>
  );
}
