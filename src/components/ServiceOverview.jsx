import React from 'react';
import { Link } from 'react-router-dom';
import './css/ServiceOverview.css';

export default function ServiceOverview() {
  return (
    <section className="service-overview" id="services">
      <div className="service-container">
        <div className="service-header">
          <h2>Nuestros servicios</h2>
          <p>Ofrecemos todo tipo de asistencia.</p>
        </div>
        
        <div className="service-cards">
          <div className="service-card">
            <div className="service-image">
              <img src="/professionals-image.jpeg" alt="Asistencia en carretera" />
            </div>
            <div className="service-info">
              <h3>Asistencia en carretera</h3>
              <p>Ofrecemos asistencia y auxilio en carretera para cualquier vehículo así como remolcarlo a cualquier medio de nuestra flota.</p>
              <Link to="/servicios" className="btn-service">Saber más</Link>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src="/servicio-traslado.png" alt="Traslado de vehículos" />
            </div>
            <div className="service-info">
              <h3>Traslado de vehículos</h3>
              <p>Trasladamos grandes flotas de vehículos en nuestras plataformas de forma segura a cualquier punto estés donde estés.</p>
              <Link to="/servicios" className="btn-service">Saber más</Link>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src="/servicio-ris.png" alt="RIS" />
            </div>
            <div className="service-info">
              <h3>RIS</h3>
              <p>Ante cualquier incidente con tu vehículo, tenemos todos los medios y herramientas necesarios para reparar el vehículo in situ.</p>
              <Link to="/servicios" className="btn-service">Saber más</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
