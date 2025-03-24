import React from 'react';
import './css/About.css';
import Partners from './Partners';
import ReacSection from './ReacSection';

export default function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Quiénes somos</h1>
          <p>
            Somos <strong>Grúas Perello</strong>, una compañía especializada en asistencia vial en las Islas Baleares.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon-about">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="feature-content">
                <h3>Años de experiencia</h3>
                <p>
                  Con más de 30 años de trayectoria en el sector de la movilidad y el auxilio en carretera.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-about">
                <i className="fas fa-clock"></i>
              </div>
              <div className="feature-content">
                <h3>Atención continua</h3>
                <p>
                  Brindamos servicio en Mallorca a toda hora, los 365 días del año.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-about">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="feature-content">
                <h3>Mallorca, nuestra casa</h3>
                <p>
                  Cubrimos toda la isla de Mallorca, actuando en cada rincón.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-efficiency">
        <div className="about-efficiency-content">
          <div className="efficiency-text">
            <h2>Ágiles</h2>
            <p>
              Organizamos nuestros servicios de forma óptima, gracias a nuestro equipo de profesionales comprometidos.
            </p>
          </div>
          <div className="efficiency-image">
            <img src="/efficiency-image.png" alt="Expertos en acción" />
          </div>
        </div>
      </section>

      <section className="about-professionals">
        <div className="about-professionals-content">
          <div className="professionals-image">
            <img src="/professionals-image.jpeg" alt="Equipo de expertos" />
          </div>
          <div className="professionals-text">
            <h2>Especialistas</h2>
            <p>
              Nuestro equipo de gruistas y especialistas se destaca por su rapidez y eficacia en la gestión de cada servicio.
            </p>
          </div>
        </div>
      </section>
      <Partners />
      <ReacSection />
    </main>
  );
}
