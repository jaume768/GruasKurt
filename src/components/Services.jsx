import React from 'react';
import './css/Services.css';
import ReacSection from './ReacSection';
import ContactSection from './ContactSection';

export default function Services() {
  return (
    <main className="services">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Nuestros Servicios</h1>
          <p>Ofrecemos servicios profesionales de asistencia y auxilio en carretera en Mallorca</p>
        </div>
      </section>
      
      <section className="services-list">
        <div className="services-container">
          {/* Roadside Assistance Service */}
          <div className="service-item">
            <div className="service-content">
              <div className="service-text">
                <h2>Asistencia en carretera</h2>
                <p>Ofrecemos asistencia y auxilio en carretera para reparar in situ cualquier vehículo así como remolcarlo a cualquier medio de nuestra flota:</p>
                <ul className="service-features-specific">
                  <li><span className="dot"></span> Coche taller</li>
                  <li><span className="dot"></span> Grúas</li>
                  <li><span className="dot"></span> Plataformas especiales</li>
                </ul>
                <a href="#contact" className="contact-button">Contáctanos</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-asistencia.jpg" alt="Servicio de asistencia en carretera" />
            </div>
          </div>
          
          {/* Transportation Service */}
          <div className="service-item reverse">
            <div className="service-content">
              <div className="service-text">
                <h2>Traslados</h2>
                <p>Trasladamos grandes flotas de vehículos en nuestras plataformas de forma segura a cualquier punto estés donde estés.</p>
                <a href="#contact" className="contact-button">Contáctanos</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-traslado.jpg" alt="Servicio de traslados" />
            </div>
          </div>
          
          {/* Rescue Service */}
          <div className="service-item">
            <div className="service-content">
              <div className="service-text">
                <h2>Rescates</h2>
                <p>Somos especialistas en rescates ante cualquier incidente o accidente con tu vehículo o moto por desfiladeros, quedarse encerrados en vehículo, etc.</p>
                <a href="#contact" className="contact-button">Contáctanos</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-ris.jpg" alt="Servicio de rescates" />
            </div>
          </div>
          
          {/* RIS Service */}
          <div className="service-item reverse">
            <div className="service-content">
              <div className="service-text">
                <h2>RIS</h2>
                <p>Ante cualquier incidente con tu vehículo, tenemos todos los medios y herramientas necesarias para reparar el vehículo in situ.</p>
                <a href="#contact" className="contact-button">Contáctanos</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-ris.jpg" alt="Servicio de RIS" />
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <ReacSection />
    </main>
  );
}
