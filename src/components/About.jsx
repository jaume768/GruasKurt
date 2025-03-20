import React from 'react';
import './css/About.css';
import Partners from './Partners';
import ReacSection from './ReacSection';

export default function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Sobre nosotros</h1>
          <p>Somos <strong>Grúas Mallorca</strong>, una empresa dedicada al auxilio en carretera en las Islas Baleares desde 1986</p>
          
          <div className="about-hero-image">
            <img src="/about-hero.jpg" alt="Equipo de Grúas Mallorca" />
          </div>
          
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="feature-content">
                <h3>Experiencia contrastada</h3>
                <p>Llevamos más de 30 años en el sector de la movilidad y asistencia en carretera</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="feature-content">
                <h3>Servicio 24h</h3>
                <p>Operamos en la isla de Mallorca las 24 horas del día los 365 días del año</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="feature-content">
                <h3>Mallorca es nuestra</h3>
                <p>Nuestras zonas de actuaciones se extienden por toda la isla de Mallorca en cualquier punto</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-efficiency">
        <div className="about-efficiency-content">
          <div className="efficiency-text">
            <h2>Eficientes</h2>
            <p>Gestionamos los servicios de manera eficiente gracias a nuestro equipo de trabajadores profesionales.</p>
          </div>
          <div className="efficiency-image">
            <img src="/efficiency-image.jpg" alt="Profesionales en acción" />
          </div>
        </div>
      </section>
      
      <section className="about-professionals">
        <div className="about-professionals-content">
          <div className="professionals-image">
            <img src="/professionals-image.jpg" alt="Equipo profesional" />
          </div>
          <div className="professionals-text">
            <h2>Profesionales</h2>
            <p>Todos nuestros gruistas y profesionales formamos el mejor equipo trabajo para una rapidez en la gestión de servicios.</p>
          </div>
        </div>
      </section>
      <Partners />
      <ReacSection />
    </main>
  );
}
