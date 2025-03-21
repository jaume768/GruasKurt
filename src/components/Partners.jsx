import React from 'react';
import './css/Partners.css';

export default function Partners() {
  // Array of partner names to display
  const partners = [
    { name: 'RACC', logo: '/partners/logo-racc.png' },
    { name: 'Carset', logo: '/partners/logo-carset.png' },
    { name: 'Allianz Partners', logo: '/partners/logo-allianz.png' },
    { name: 'IMA Ibérica Asistencia', logo: '/partners/logo-ima.png' },
    { name: 'AXA', logo: '/partners/logo-axa.png' },
    { name: 'Mapfre', logo: '/partners/logo-mapfre.png' }
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
            {partners.map((partner, index) => (
              <div className="partner-logo" key={`partner-${index}`}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}

            {partners.map((partner, index) => (
              <div className="partner-logo" key={`partner-dup-${index}`}>
                <img src={partner.logo} alt={partner.name} />
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
