import React from 'react';
import './css/About.css';
import Partners from './Partners';
import ReacSection from './ReacSection';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>{t('about.title')}</h1>
          <p>
            {t('about.description')}
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon-about">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="feature-content">
                <h3>{t('about.feature1Title')}</h3>
                <p>
                  {t('about.feature1Description')}
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-about">
                <i className="fas fa-clock"></i>
              </div>
              <div className="feature-content">
                <h3>{t('about.feature2Title')}</h3>
                <p>
                  {t('about.feature2Description')}
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-about">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="feature-content">
                <h3>{t('about.feature3Title')}</h3>
                <p>
                  {t('about.feature3Description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-efficiency">
        <div className="about-efficiency-content">
          <div className="efficiency-text">
            <h2>{t('about.efficiency.title')}</h2>
            <p>
              {t('about.efficiency.description')}
            </p>
          </div>
          <div className="efficiency-image">
            <img src="/efficiency-image.png" alt={t('about.efficiency.imageAlt')} />
          </div>
        </div>
      </section>

      <section className="about-professionals">
        <div className="about-professionals-content">
          <div className="professionals-image">
            <img src="/professionals-image.jpeg" alt={t('about.professionals.imageAlt')} />
          </div>
          <div className="professionals-text">
            <h2>{t('about.professionals.title')}</h2>
            <p>
              {t('about.professionals.description')}
            </p>
          </div>
        </div>
      </section>
      <Partners />
      <ReacSection />
    </main>
  );
}
