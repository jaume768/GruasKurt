import React, { useState, useEffect } from 'react';
import './css/CookieConsent.css';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario ya ha aceptado o rechazado las cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    // Si no hay registro, mostrar el popup
    if (!cookieConsent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <h3>{t('cookies.title')}</h3>
        <p>
          {t('cookies.description')}
        </p>
        <div className="cookie-buttons">
          <button className="btn-accept" onClick={handleAccept}>
            {t('cookies.accept')}
          </button>
          <button className="btn-reject" onClick={handleReject}>
            {t('cookies.reject')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
