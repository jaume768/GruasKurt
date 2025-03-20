import React from 'react';
import './css/ServiceFeatures.css';

export default function ServiceFeatures() {
  return (
    <section className="service-features" id="features">
      <div className="features-container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-regular fa-clock"></i>
            </div>
            <h3>Servicio 24h</h3>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h3>Eficientes</h3>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-user-gear"></i>
            </div>
            <h3>Expertos</h3>
          </div>
        </div>

        <div className="island-info">
          <div className="info-content">
            <h2>Operamos en la isla de Mallorca</h2>
            <p>
              Ofrecemos diferentes servicios como asistencia en carretera, asistencia en garajes, 
              rescate por accidentes, traslados de vehículos, cambio de ruedas, pérdida de llaves, 
              servicios urgentes, conexión de pinzas, cesión entre concesionarios, etc.
            </p>
            <button className="btn-action">Ver zonas de actuación</button>
          </div>
        </div>
      </div>
    </section>
  );
}
