import React from 'react';
import './css/Footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer>
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Grúas Perello</h3>
            <p>{t('footer.description')}</p>
            <div className="contact-item">
              <p><i className="fas fa-phone"></i>{t('contact.phoneNumber')}</p>
            </div>
            <div className="contact-item">
              <p><i className="fas fa-envelope"></i>{t('contact.emailAddress')}</p>
            </div>
          </div>
          <div className="footer-column">
            <h3>{t('footer.memberTitle')}</h3>
            <p>{t('footer.memberDescription')}</p>
            <div className="reac-link">
              <a href="https://reac.es" target="_blank" rel="noopener noreferrer">reac.es</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.developedBy')} <a href="https://corsoft.es" className="developer-link" target="_blank" rel="noopener noreferrer">Corsoft</a> | {t('footer.rights')}</p>
          <div className="footer-legal">
            <Link to="/aviso-legal">{t('footer.legal')}</Link>
            <Link to="/politica-privacidad">{t('footer.privacy')}</Link>
            <Link to="/politica-cookies">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
