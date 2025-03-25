import React, { useState, useEffect } from 'react';
import './css/CookieConsent.css';

const CookieConsent = () => {
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
        <h3>Política de Cookies</h3>
        <p>
          Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle 
          publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
        </p>
        <div className="cookie-buttons">
          <button className="btn-accept" onClick={handleAccept}>
            Aceptar
          </button>
          <button className="btn-reject" onClick={handleReject}>
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
