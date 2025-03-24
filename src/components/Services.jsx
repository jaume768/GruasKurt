import React from 'react';
import './css/Services.css';
import ReacSection from './ReacSection';
import ContactSection from './ContactSection';

export default function Services() {
  return (
    <main className="services">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Servicios que ofrecemos</h1>
          <p>Brindamos asistencia vial y auxilio profesional en carretera en Mallorca</p>
        </div>
      </section>

      <section className="services-list">
        <div className="services-container">
          {/* Servicio de Asistencia Vial */}
          <div className="service-item">
            <div className="service-content">
              <div className="service-text">
                <h2>Auxilio en carretera</h2>
                <p>
                  Proporcionamos asistencia en carretera, reparando el vehículo en el lugar o remolcándolo mediante cualquiera de nuestros medios disponibles:
                </p>
                <ul className="service-features-specific">
                  <li><span className="dot"></span> Taller móvil</li>
                  <li><span className="dot"></span> Grúas</li>
                  <li><span className="dot"></span> Plataformas especializadas</li>
                </ul>
                <a href="#contact" className="contact-button">Contáctanos</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-asistencia.png" alt="Auxilio en carretera" />
            </div>
          </div>

          {/* Servicio de Traslados */}
          <div className="service-item reverse">
            <div className="service-content">
              <div className="service-text">
                <h2>Traslados</h2>
                <p>
                  Movilizamos grandes flotas en nuestras plataformas de forma segura, llevándolas a cualquier destino sin importar dónde te encuentres.
                </p>
                <a href="#contact" className="contact-button">Contáctanos</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-traslado.png" alt="Servicio de traslados" />
            </div>
          </div>

          {/* Servicio de Rescates */}
          <div className="service-item">
            <div className="service-content">
              <div className="service-text">
                <h2>Rescates</h2>
                <p>
                  Contamos con amplia experiencia en rescates, atendiendo incidentes y accidentes de vehículos o motos, ya sea en desfiladeros o en situaciones de encierro.
                </p>
                <a href="#contact" className="contact-button">Contáctanos</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-ris.png" alt="Servicio de rescates" />
            </div>
          </div>

          {/* Servicio RIS */}
          <div className="service-item reverse">
            <div className="service-content">
              <div className="service-text">
                <h2>RIS</h2>
                <p>
                  Para cualquier inconveniente, contamos con los recursos y herramientas necesarios para reparar tu vehículo en el mismo lugar.
                </p>
                <a href="#contact" className="contact-button">Contáctanos</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/professionals-image.jpeg" alt="Servicio de RIS" />
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
