import React from 'react';
import './css/Home.css';

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Servicio de Grúas en Mallorca</h1>
          <p>Asistencia vial 24 horas los 365 días del año</p>
          <button className="btn">Solicitar Asistencia</button>
        </div>
      </section>
      
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Asistencia en Carretera</h3>
              <p>Servicio rápido y eficiente para cualquier emergencia vial.</p>
            </div>
            <div className="service-card">
              <h3>Traslado de Vehículos</h3>
              <p>Transporte seguro de su vehículo a cualquier punto de la isla.</p>
            </div>
            <div className="service-card">
              <h3>Rescates Especiales</h3>
              <p>Equipamiento especializado para situaciones complejas.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
