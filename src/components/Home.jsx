import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';
import ServiceFeatures from './ServiceFeatures';
import FleetOverview from './FleetOverview';
import ServiceOverview from './ServiceOverview';
import Statistics from './Statistics';
import Partners from './Partners';
import ContactSection from './ContactSection';
import CookieConsent from './CookieConsent';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>{t('home.hero.title')}</h1>
          <p>{t('home.hero.subtitle')}</p>
          <div className="hero-buttons">
            <Link to="/la-empresa" className="btn btn-primary">{t('home.hero.buttons.aboutUs')}</Link>
            <Link to="/servicios" className="btn btn-secondary">{t('home.hero.buttons.services')}</Link>
          </div>
        </div>
      </section>
      
      <ServiceFeatures />
      <FleetOverview />
      <ServiceOverview />
      <Statistics />
      <Partners />
      <ContactSection />
      <CookieConsent />
    </main>
  );
}
