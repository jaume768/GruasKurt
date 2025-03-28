import React from 'react';
import './css/Legal.css';
import { useTranslation } from 'react-i18next';

const LegalNotice = () => {
  const { t } = useTranslation();
  
  return (
    <div className="legal-page">
      <div className="container">
        <h1 className="legal-title">{t('legal.title')}</h1>
        
        <div className="legal-content">
          <p>
            {t('legal.intro')}
          </p>
          
          <div className="company-info">
            <p><strong>{t('legal.companyInfo.identification')}:</strong> {t('legal.companyInfo.name')}</p>
            <p><strong>{t('legal.companyInfo.cif')}:</strong> </p>
            <p><strong>{t('legal.companyInfo.address')}:</strong> {t('legal.companyInfo.addressValue')}</p>
            <p><strong>{t('legal.companyInfo.phone')}:</strong> {t('legal.companyInfo.phoneValue')}</p>
            <p><strong>{t('legal.companyInfo.email')}:</strong> {t('legal.companyInfo.emailValue')}</p>
          </div>
          
          <p>
            {t('legal.usage')}
          </p>
          
          <p>
            {t('legal.copyright')}
          </p>
          
          <p>
            {t('legal.properUsage')}
          </p>
          
          <p>
            {t('legal.prohibitedUse1')}
          </p>
          
          <p>
            {t('legal.prohibitedUse2')}
          </p>
          
          <p>
            {t('legal.prohibitedUse3')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
