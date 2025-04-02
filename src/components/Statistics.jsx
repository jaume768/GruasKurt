import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './css/Statistics.css';

export default function Statistics() {
  const { t } = useTranslation();
  const [counterValues, setCounterValues] = useState({
    services: 0,
    satisfaction: 0,
    years: 0
  });

  const statsRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;
          startCounterAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const startCounterAnimation = () => {
    // Set final values
    const finalValues = {
      services: 25,
      satisfaction: 98,
      years: 25
    };

    // Duration in milliseconds
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounterValues({
        services: Math.floor(progress * finalValues.services),
        satisfaction: Math.floor(progress * finalValues.satisfaction),
        years: Math.floor(progress * finalValues.years)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounterValues(finalValues);
      }
    }, interval);
  };

  return (
    <section className="statistics-section" ref={statsRef}>
      <div className="statistics-container">
        <div className="statistic-card">
          <div className="statistic-number">
            <span className="number">{counterValues.services}</span>
            <span className="highlight">k</span>
          </div>
          <h3>{t('statistics.servicesPerYear.title')}</h3>
          <p>{t('statistics.servicesPerYear.description')}</p>
        </div>

        <div className="statistic-card">
          <div className="statistic-number">
            <span className="number">{counterValues.satisfaction}</span>
            <span className="highlight">%</span>
          </div>
          <h3>{t('statistics.satisfiedClients.title')}</h3>
          <p>{t('statistics.satisfiedClients.description')}</p>
        </div>

        <div className="statistic-card">
          <div className="statistic-number">
            <span className="number">{counterValues.years}</span>
            <span className="highlight">+</span>
          </div>
          <h3>{t('statistics.yearsInSector.title')}</h3>
          <p>{t('statistics.yearsInSector.description')}</p>
        </div>
      </div>
    </section>
  );
}
