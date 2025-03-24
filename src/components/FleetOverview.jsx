import React from 'react';
import { Link } from 'react-router-dom';
import './css/FleetOverview.css';

export default function FleetOverview() {
  return (
    <section className="fleet-overview" id="fleet">
      <div className="fleet-container">
        <div className="fleet-grid">
          <div className="fleet-image">
            <img src="/foto-gruas-perello4.png" alt="Grúa de Mallorca" />
          </div>
          <div className="fleet-content">
            <h2>Flota totalmente equipada</h2>
            <p>Disponemos de todo tipo de medios para cualquier servicio que se nos ofrezca</p>
            
            <div className="fleet-features">
              <div className="features-column">
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>Plataformas</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>Patrol</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>Plataformas grúas</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>Camiones</span>
                </div>
              </div>
              
              <div className="features-column">
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>Coche taller</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>Plataformas especiales</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>Taxis</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>Grúas parking</span>
                </div>
              </div>
            </div>
            
            <Link to="/servicios" className="btn-fleet">Ver flota completa</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
