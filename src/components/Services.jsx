import React from 'react';
import './css/Services.css';
import ReacSection from './ReacSection';
import ContactSection from './ContactSection';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  
  return (
    <main className="services">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>{t('services.title')}</h1>
          <p>{t('services.subtitle')}</p>
        </div>
      </section>

      <section className="services-list">
        <div className="services-container">
          {/* Servicio de Asistencia Vial */}
          <div className="service-item">
            <div className="service-content">
              <div className="service-text">
                <h2>{t('services.roadAssistance.title')}</h2>
                <p>
                  {t('services.roadAssistance.description')}
                </p>
                <ul className="service-features-specific">
                  <li><span className="dot"></span> {t('services.roadAssistance.feature1')}</li>
                  <li><span className="dot"></span> {t('services.roadAssistance.feature2')}</li>
                  <li><span className="dot"></span> {t('services.roadAssistance.feature3')}</li>
                </ul>
                <a href="#contact" className="contact-button">{t('common.contactUs')}</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-asistencia.png" alt={t('services.roadAssistance.imageAlt')} />
            </div>
          </div>

          {/* Servicio de Traslados */}
          <div className="service-item reverse">
            <div className="service-content">
              <div className="service-text">
                <h2>{t('services.transfers.title')}</h2>
                <p>
                  {t('services.transfers.description')}
                </p>
                <a href="#contact" className="contact-button">{t('common.contactUs')}</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-traslado.png" alt={t('services.transfers.imageAlt')} />
            </div>
          </div>

          {/* Servicio de Rescates */}
          <div className="service-item">
            <div className="service-content">
              <div className="service-text">
                <h2>{t('services.rescues.title')}</h2>
                <p>
                  {t('services.rescues.description')}
                </p>
                <a href="#contact" className="contact-button">{t('common.contactUs')}</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/servicio-ris.png" alt={t('services.rescues.imageAlt')} />
            </div>
          </div>

          {/* Servicio RIS */}
          <div className="service-item reverse">
            <div className="service-content">
              <div className="service-text">
                <h2>{t('services.RIS.title')}</h2>
                <p>
                  {t('services.RIS.description')}
                </p>
                <a href="#contact" className="contact-button">{t('common.contactUs')}</a>
              </div>
            </div>
            <div className="service-image-specific">
              <img src="/professionals-image.jpeg" alt={t('services.RIS.imageAlt')} />
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
