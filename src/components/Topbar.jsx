import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/Topbar.css';

export default function Topbar() {
  const { t } = useTranslation();
  
  return (
    <div className="topbar">
      <div className="container-topbar">
        <div className="contact-info-topbar">
          <span><i className="fas fa-phone"></i> (+34) 971 58 12 60</span>
          <span><i className="fas fa-envelope"></i> Gruasperello@gmail.com </span>
        </div>
        <div className="reac-info">
          <span>{t('topbar.reacInfo')}</span>
        </div>
      </div>
    </div>
  );
}
