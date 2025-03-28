import React from 'react';
import './css/Legal.css';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  
  return (
    <div className="legal-page">
      <div className="container">
        <h1 className="legal-title">{t('privacy.title')}</h1>
        
        <div className="legal-content">
          <p>
            {t('privacy.intro')}
          </p>
          
          <h2>{t('privacy.identification.title')}</h2>
          <p>
            {t('privacy.identification.text')}
          </p>
          
          <div className="company-info">
            <p><strong>{t('privacy.company.identification')}:</strong> {t('privacy.company.name')}</p>
            <p><strong>{t('privacy.company.cif')}:</strong> {t('privacy.company.cifValue')}</p>
            <p><strong>{t('privacy.company.address')}:</strong> {t('privacy.company.addressValue')}</p>
            <p><strong>{t('privacy.company.phone')}:</strong> {t('privacy.company.phoneValue')}</p>
            <p><strong>{t('privacy.company.email')}:</strong> {t('privacy.company.emailValue')}</p>
          </div>
          
          <h2>{t('privacy.dataOrigin.title')}</h2>
          <p>
            {t('privacy.dataOrigin.text')}
          </p>
          <ul>
            <li>{t('privacy.dataOrigin.list.item1')}</li>
            <li>{t('privacy.dataOrigin.list.item2')}</li>
            <li>{t('privacy.dataOrigin.list.item3')}</li>
            <li>{t('privacy.dataOrigin.list.item4')}</li>
            <li>{t('privacy.dataOrigin.list.item5')}</li>
          </ul>
          <p>
            {t('privacy.dataOrigin.disclaimer')}
          </p>
          
          <h2>{t('privacy.purpose.title')}</h2>
          <h3>{t('privacy.purpose.registeredUsers.title')}</h3>
          <p>
            {t('privacy.purpose.registeredUsers.text')}
          </p>
          
          <h3>{t('privacy.purpose.newsletter.title')}</h3>
          <p>
            {t('privacy.purpose.newsletter.text')}
          </p>
          
          <h2>{t('privacy.duration.title')}</h2>
          <p>
            {t('privacy.duration.text')}
          </p>
          
          <h3>{t('privacy.duration.webClients.title')}</h3>
          <p>
            {t('privacy.duration.webClients.text')}
          </p>
          
          <h3>{t('privacy.duration.registeredUsers.title')}</h3>
          <p>
            {t('privacy.duration.registeredUsers.text')}
          </p>
          
          <h2>{t('privacy.legitimation.title')}</h2>
          <p>
            {t('privacy.legitimation.text1')}
          </p>
          <p>
            {t('privacy.legitimation.text2')}
          </p>
          <p>
            {t('privacy.legitimation.text3')}
          </p>
          <p>
            {t('privacy.legitimation.text4')}
          </p>
          <p>
            {t('privacy.legitimation.text5')}
          </p>
          
          <h2>{t('privacy.decisions.title')}</h2>
          <p>
            {t('privacy.decisions.subtitle')}
          </p>
          <p>
            {t('privacy.decisions.text')}
          </p>
          
          <h2>{t('privacy.recipients.title')}</h2>
          <p>{t('privacy.recipients.question')}</p>
          <ul>
            <li>{t('privacy.recipients.list.item1')}</li>
            <li>{t('privacy.recipients.list.item2')}</li>
            <li>{t('privacy.recipients.list.item3')}</li>
            <li>{t('privacy.recipients.list.item4')}</li>
            <li>{t('privacy.recipients.list.item5')}</li>
          </ul>
          
          <h2>{t('privacy.rights.title')}</h2>
          <p>{t('privacy.rights.intro')}</p>
          <ul>
            <li>{t('privacy.rights.list.item1')}</li>
            <li>{t('privacy.rights.list.item2')}</li>
            <li>{t('privacy.rights.list.item3')}</li>
            <li>{t('privacy.rights.list.item4')}</li>
            <li>{t('privacy.rights.list.item5')}</li>
            <li>{t('privacy.rights.list.item6')}</li>
          </ul>
          <p>
            {t('privacy.rights.limitations')}
          </p>
          <p>
            {t('privacy.rights.withdrawConsent')}
          </p>
          <p>
            {t('privacy.rights.exercise')}
          </p>
          <p>
            {t('privacy.rights.communicationTitle')}
          </p>
          <ul>
            <li>{t('privacy.rights.communicationList.item1')}</li>
            <li>{t('privacy.rights.communicationList.item2')}</li>
          </ul>
          
          <h2>{t('privacy.security.title')}</h2>
          <p>
            {t('privacy.security.text')}
          </p>
          
          <h2>{t('privacy.cookies.title')}</h2>
          <p>
            {t('privacy.cookies.text')}
          </p>
          
          <h2>{t('privacy.modifications.title')}</h2>
          <p>
            {t('privacy.modifications.text')}
          </p>
          
          <h2>{t('privacy.legislation.title')}</h2>
          <p>
            {t('privacy.legislation.text')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
