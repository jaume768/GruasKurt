import React from 'react';
import './css/Coverage.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Coverage() {
  const { t } = useTranslation();
  
  return (
    <main className="coverage">
      <section className="coverage-map-section">
        <div className="container">
          <h1 className="coverage h1">{t('coverage.title')}</h1>
          
          <div className="coverage-content">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197294.5397795598!2d2.6492430084040386!3d39.69589055329313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b8766606c129%3A0xb7eb9bff02d2ecc0!2sMallorca!5e0!3m2!1ses!2ses!4v1616500987228!5m2!1ses!2ses" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title={t('coverage.mapTitle')}
              ></iframe>
            </div>
            
            <div className="coverage-info">
              <p className="coverage-description">
                {t('coverage.description')}
              </p>
              
              <div className="coverage-locations">
                <ul className="locations-list">
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location1')}
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location2')}
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location3')}
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location4')}
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location9')}
                  </li>
                </ul>
                
                <ul className="locations-list">
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location5')}
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location6')}
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location7')}
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location8')}
                  </li>
                  <li>
                    <span className="location-dot"></span>
                    {t('coverage.locations.location10')}
                  </li>
                </ul>
              </div>
              
              <div className="coverage-buttons">
                <Link to="/contacto" className="btn btn-primary">{t('common.contactUs')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
