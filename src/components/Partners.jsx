import React from 'react';
import './css/Partners.css';

export default function Partners() {
  // Array of partner names to display
  const partners = [
    { name: 'RACC', logo: '/logo-racc.png' },
    { name: 'Carset', logo: '/logo-carset.png' },
    { name: 'Allianz Partners', logo: '/logo-allianz.png' },
    { name: 'IMA Ibérica Asistencia', logo: '/logo-ima.png' },
    { name: 'AXA', logo: '/logo-axa.png' },
    { name: 'Mapfre', logo: '/logo-mapfre.png' }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <h2>Nuestras compañías</h2>
          <p>Estas son las diferentes compañías con las que trabajamos</p>
        </div>
        
        <div className="partners-carousel-container">
          <div className="partners-carousel">
            {/* First set of logos for the continuous loop effect */}
            {partners.map((partner, index) => (
              <div className="partner-logo" key={`partner-${index}`}>
                <div className="partner-placeholder">{partner.name}</div>
              </div>
            ))}
            
            {/* Duplicate logos for seamless infinite scroll effect */}
            {partners.map((partner, index) => (
              <div className="partner-logo" key={`partner-dup-${index}`}>
                <div className="partner-placeholder">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="partners-indicators">
          {partners.map((_, index) => (
            <span 
              key={`indicator-${index}`} 
              className={`indicator ${index === 0 ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
