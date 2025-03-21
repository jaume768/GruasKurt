import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';
import ServiceFeatures from './ServiceFeatures';
import FleetOverview from './FleetOverview';
import ServiceOverview from './ServiceOverview';
import Statistics from './Statistics';
import Partners from './Partners';
import ContactSection from './ContactSection';

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Grúas Perello</h1>
          <p>Asistencia y Auxilio en carretera desde 1986</p>
          <div className="hero-buttons">
            <Link to="/la-empresa" className="btn btn-primary">Sobre nosotros</Link>
            <Link to="/servicios" className="btn btn-secondary">Nuestros servicios</Link>
          </div>
        </div>
      </section>
      
      <ServiceFeatures />
      <FleetOverview />
      <ServiceOverview />
      <Statistics />
      <Partners />
      <ContactSection />
    </main>
  );
}
