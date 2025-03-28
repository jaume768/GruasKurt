import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './css/ServiceOverview.css';

export default function ServiceOverview() {
  const { t } = useTranslation();
  
  return (
    <section className="service-overview" id="services">
      <div className="service-container">
        <div className="service-header">
          <h2>{t('serviceOverview.title')}</h2>
          <p>{t('serviceOverview.subtitle')}</p>
        </div>
        
        <div className="service-cards">
          <div className="service-card">
            <div className="service-image">
              <img src="/professionals-image.jpeg" alt={t('serviceOverview.roadside.imageAlt')} />
            </div>
            <div className="service-info">
              <h3>{t('serviceOverview.roadside.title')}</h3>
              <p>{t('serviceOverview.roadside.description')}</p>
              <Link to="/servicios" className="btn-service">{t('common.learnMore')}</Link>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src="/servicio-traslado.png" alt={t('serviceOverview.vehicleTransfer.imageAlt')} />
            </div>
            <div className="service-info">
              <h3>{t('serviceOverview.vehicleTransfer.title')}</h3>
              <p>{t('serviceOverview.vehicleTransfer.description')}</p>
              <Link to="/servicios" className="btn-service">{t('common.learnMore')}</Link>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src="/servicio-ris.png" alt={t('serviceOverview.ris.imageAlt')} />
            </div>
            <div className="service-info">
              <h3>{t('serviceOverview.ris.title')}</h3>
              <p>{t('serviceOverview.ris.description')}</p>
              <Link to="/servicios" className="btn-service">{t('common.learnMore')}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
