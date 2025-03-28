import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/ServiceFeatures.css';

export default function ServiceFeatures() {
  const { t } = useTranslation();
  
  return (
    <section className="service-features" id="features">
      <div className="features-container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-regular fa-clock"></i>
            </div>
            <h3>{t('serviceFeatures.service24h')}</h3>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h3>{t('serviceFeatures.efficient')}</h3>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-user-gear"></i>
            </div>
            <h3>{t('serviceFeatures.experts')}</h3>
          </div>
        </div>

        <div className="island-info">
          <div className="info-content">
            <h2>{t('serviceFeatures.islandInfo.title')}</h2>
            <p>
              {t('serviceFeatures.islandInfo.description')}
            </p>
            <button className="btn-action">{t('serviceFeatures.islandInfo.actionButton')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
