import React from 'react';
import './css/Coverage.css';

export default function Coverage() {
  return (
    <main className="coverage">
      <section className="coverage-map-section">
        <div className="container">
          <h1 className="coverage h1">Cobertura de servicios</h1>
          
          <div className="coverage-content">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197294.5397795598!2d2.6492430084040386!3d39.69589055329313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b8766606c129%3A0xb7eb9bff02d2ecc0!2sMallorca!5e0!3m2!1ses!2ses!4v1616500987228!5m2!1ses!2ses" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Mapa de cobertura en Mallorca"
              ></iframe>
            </div>
            
            <div className="coverage-info">
              <p className="coverage-description">
                Te mostramos todas las ubicaciones donde actuamos para gestionar todo tipo de servicios relacionados con la asistencia y auxilio en carretera en toda la isla de Mallorca:
              </p>
              
              <div className="coverage-locations">
                <ul className="locations-list">
                  <li>
                    <span className="location-dot"></span>
                    Mallorca
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    Manacor
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    Sóller
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    Santa Ponsa
                  </li>
                </ul>
                
                <ul className="locations-list">
                  <li>
                    <span className="location-dot"></span>
                    El Arenal
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    Cala d'Or
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    Campos
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    Cala Rajada
                  </li>
                </ul>
              </div>
              
              <div className="coverage-buttons">
                <a href="/contacto" className="btn btn-primary">Contáctanos</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
