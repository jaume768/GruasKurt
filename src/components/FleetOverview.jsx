import React from 'react';
import { Link } from 'react-router-dom';
import './css/FleetOverview.css';
import { useTranslation } from 'react-i18next';

export default function FleetOverview() {
  const { t } = useTranslation();
  
  return (
    <section className="fleet-overview" id="fleet">
      <div className="fleet-container">
        <div className="fleet-grid">
          <div className="fleet-image">
            <img src="/foto-gruas-perello4.png" alt={t('fleet.imageAlt')} />
          </div>
          <div className="fleet-content">
            <h2>{t('fleet.title')}</h2>
            <p>{t('fleet.description')}</p>
            
            <div className="fleet-features">
              <div className="features-column">
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>{t('fleet.features.item1')}</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>{t('fleet.features.item2')}</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>{t('fleet.features.item3')}</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>{t('fleet.features.item4')}</span>
                </div>
              </div>
              
              <div className="features-column">
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>{t('fleet.features.item5')}</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>{t('fleet.features.item6')}</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>{t('fleet.features.item7')}</span>
                </div>
                <div className="feature-item-inicio">
                  <span className="feature-dot"></span>
                  <span>{t('fleet.features.item8')}</span>
                </div>
              </div>
            </div>
            
            <Link to="/servicios" className="btn-fleet">{t('fleet.viewFullFleet')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
