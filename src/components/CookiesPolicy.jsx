import React from 'react';
import './css/Legal.css';
import { useTranslation } from 'react-i18next';

const CookiesPolicy = () => {
  const { t } = useTranslation();
  
  return (
    <div className="legal-page">
      <div className="container">
        <h1 className="legal-title">{t('cookiesPolicy.title')}</h1>
        
        <div className="legal-content">
          <h2>{t('cookiesPolicy.infoTitle')}</h2>
          
          <p>
            {t('cookiesPolicy.infoText')}
          </p>
          
          <h3>{t('cookiesPolicy.whatAreTitle')}</h3>
          
          <p>
            {t('cookiesPolicy.whatAreText1')}
          </p>
          
          <p>
            {t('cookiesPolicy.whatAreText2')}
          </p>
          
          <h3>{t('cookiesPolicy.regulationTitle')}</h3>
          
          <p>
            {t('cookiesPolicy.regulationText')}
          </p>
          
          <h3>{t('cookiesPolicy.typesTitle')}</h3>
          
          <p>
            {t('cookiesPolicy.typesIntro')}
          </p>
          
          <ul>
            <li>{t('cookiesPolicy.typesList.item1')}</li>
            <li>{t('cookiesPolicy.typesList.item2')}</li>
            <li>{t('cookiesPolicy.typesList.item3')}</li>
            <li>{t('cookiesPolicy.typesList.item4')}</li>
            <li>{t('cookiesPolicy.typesList.item5')}</li>
          </ul>
          
          <h3>{t('cookiesPolicy.usedTitle')}</h3>
          
          <p>
            {t('cookiesPolicy.usedIntro')}
          </p>
          
          <ul>
            <li>{t('cookiesPolicy.usedList.item1')}</li>
            <li>{t('cookiesPolicy.usedList.item2')}</li>
            <li>{t('cookiesPolicy.usedList.item3')}</li>
          </ul>
          
          <h3>{t('cookiesPolicy.googleMapsTitle')}</h3>
          
          <p>
            {t('cookiesPolicy.googleMapsText1')}
          </p>
          
          <p>
            {t('cookiesPolicy.googleMapsText2')}
          </p>
          
          <p>
            {t('cookiesPolicy.googleMapsText3')}
          </p>
          
          <p>
            {t('cookiesPolicy.googlePrivacyInfo')} <a href="http://www.google.es/policies/privacy/" target="_blank" rel="noopener noreferrer">http://www.google.es/policies/privacy/</a>
          </p>
          
          <p>
            {t('cookiesPolicy.googleCookiesInfo')} <a href="http://www.google.com/policies/technologies/types/" target="_blank" rel="noopener noreferrer">http://www.google.com/policies/technologies/types/</a>
          </p>
          
          <h3>{t('cookiesPolicy.revokeTitle')}</h3>
          <h4>{t('cookiesPolicy.deleteTitle')}</h4>
          
          <h5>Chrome</h5>
          <ol>
            <li>{t('cookiesPolicy.chrome.step1')}</li>
            <li>{t('cookiesPolicy.chrome.step2')}</li>
            <li>{t('cookiesPolicy.chrome.step3')}</li>
            <li>{t('cookiesPolicy.chrome.step4')}</li>
            <li>{t('cookiesPolicy.chrome.step5')}</li>
            <li>{t('cookiesPolicy.chrome.step6')}</li>
            <li>{t('cookiesPolicy.chrome.step7')}</li>
            <li>{t('cookiesPolicy.chrome.step8')}</li>
          </ol>
          
          <p>
            {t('cookiesPolicy.chromeMoreInfo')} <a href="http://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">http://support.google.com/chrome/answer/95647?hl=es</a>
          </p>
          
          <h5>{t('cookiesPolicy.ieTitle')}</h5>
          <ol>
            <li>{t('cookiesPolicy.ie.step1')}</li>
            <li>{t('cookiesPolicy.ie.step2')}</li>
            <li>{t('cookiesPolicy.ie.step3')}</li>
            <li>{t('cookiesPolicy.ie.step4')}</li>
            <li>{t('cookiesPolicy.ie.step5')}</li>
            <li>{t('cookiesPolicy.ie.step6')}</li>
            <li>{t('cookiesPolicy.ie.step7')}</li>
            <li>{t('cookiesPolicy.ie.step8')}</li>
          </ol>
          
          <p>
            {t('cookiesPolicy.ieMoreInfo')} <a href="http://windows.microsoft.com/es-419/windows7/how-to-manage-cookies-in-internet-explorer-9" target="_blank" rel="noopener noreferrer">http://windows.microsoft.com/es-419/windows7/how-to-manage-cookies-in-internet-explorer-9</a>
          </p>
          
          <h5>{t('cookiesPolicy.firefoxTitle')}</h5>
          <ol>
            <li>{t('cookiesPolicy.firefox.step1')}</li>
            <li>{t('cookiesPolicy.firefox.step2')}</li>
            <li>{t('cookiesPolicy.firefox.step3')}</li>
            <li>{t('cookiesPolicy.firefox.step4')}</li>
            <li>{t('cookiesPolicy.firefox.step5')}</li>
            <li>{t('cookiesPolicy.firefox.step6')}</li>
          </ol>
          
          <p>
            {t('cookiesPolicy.firefoxPreferences')}
          </p>
          
          <p>
            {t('cookiesPolicy.firefoxMoreInfo')} <a href="https://www.mozilla.org/es-ES/privacy/websites/#cookies" target="_blank" rel="noopener noreferrer">https://www.mozilla.org/es-ES/privacy/websites/#cookies</a>
          </p>
          
          <h5>{t('cookiesPolicy.safariTitle')}</h5>
          <ol>
            <li>{t('cookiesPolicy.safari.step1')}</li>
            <li>{t('cookiesPolicy.safari.step2')}</li>
            <li>{t('cookiesPolicy.safari.step3')}</li>
            <li>{t('cookiesPolicy.safari.step4')}</li>
          </ol>
          
          <p>
            {t('cookiesPolicy.safariMoreInfo')} <a href="http://support.apple.com/kb/PH5042" target="_blank" rel="noopener noreferrer">http://support.apple.com/kb/PH5042</a>
          </p>
          
          <h5>Opera</h5>
          <p>
            {t('cookiesPolicy.operaSteps')}
          </p>
          
          <p>
            {t('cookiesPolicy.operaMoreInfo')} <a href="http://help.opera.com/Linux/10.60/es-ES/cookies.html" target="_blank" rel="noopener noreferrer">http://help.opera.com/Linux/10.60/es-ES/cookies.html</a>
          </p>
          
          <h5>{t('cookiesPolicy.otherTitle')}</h5>
          <p>
            {t('cookiesPolicy.otherText')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
