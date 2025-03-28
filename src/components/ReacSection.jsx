import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/ReacSection.css';

export default function ReacSection() {
  const { t } = useTranslation();
  
  return (
    <section className="reac-section">
      <div className="reac-content">
        <div className="reac-logo">
          <img src="/reac-logo.png" alt={t('reacSection.logoAlt')} />
        </div>
        <h2>{t('reacSection.title')}</h2>
        <a href="https://reac.es" target="_blank" rel="noopener noreferrer" className="reac-button">reac.es</a>
        <p>{t('reacSection.description')}</p>
      </div>
    </section>
  );
}
