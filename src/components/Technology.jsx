import React from 'react';
import './css/Technology.css';
import { useTranslation } from 'react-i18next';

export default function Technology() {
  const { t } = useTranslation();
  
  return (
    <main className="technology">
      <section className="technology-workflow">
        <div className="container">
          <h1 className="technology-title">{t('technology.mainTitle')}</h1>
          <p className="section-description">
            {t('technology.description')}
          </p>

          <div className="workflow-steps">
            <div className="workflow-timeline">
              <div className="step-point">1</div>
              <div className="step-line"></div>
              <div className="step-point">2</div>
              <div className="step-line"></div>
              <div className="step-point">3</div>
              <div className="step-line"></div>
              <div className="step-point">4</div>
            </div>

            <div className="workflow-details">
              <div className="workflow-step" data-step="1">
                <h3>{t('technology.workflow.step1Title')}</h3>
                <p>{t('technology.workflow.step1')}</p>
              </div>
              
              <div className="workflow-step" data-step="2">
                <h3>{t('technology.workflow.step2Title')}</h3>
                <p>{t('technology.workflow.step2')}</p>
              </div>
              
              <div className="workflow-step" data-step="3">
                <h3>{t('technology.workflow.step3Title')}</h3>
                <p>{t('technology.workflow.step3')}</p>
              </div>
              
              <div className="workflow-step" data-step="4">
                <h3>{t('technology.workflow.step4Title')}</h3>
                <p>{t('technology.workflow.step4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Ventajas */}
      <section className="technology-advantages">
        <div className="container">
          <div className="advantages-content">
            <div className="advantages-image">
              <img src="/tech.png" alt={t('technology.imageAlt')} />
            </div>
            
            <div className="advantages-info">
              <h2 className="section-title">{t('technology.advantages.title')}</h2>
              
              <div className="advantages-grid">
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h3>{t('technology.advantages.reliability')}</h3>
                  <p>{t('technology.advantages.reliabilityText')}</p>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-gauge-high"></i>
                  </div>
                  <h3>{t('technology.advantages.efficiency')}</h3>
                  <p>{t('technology.advantages.efficiencyText')}</p>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <h3>{t('technology.advantages.professionalism')}</h3>
                  <p>{t('technology.advantages.professionalismText')}</p>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <h3>{t('technology.advantages.speed')}</h3>
                  <p>{t('technology.advantages.speedText')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
