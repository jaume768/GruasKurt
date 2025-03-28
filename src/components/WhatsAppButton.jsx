import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const phoneNumber = '+34650744697';
  
  const handleWhatsAppClick = () => {
    const message = t('whatsapp.defaultMessage');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick} title={t('whatsapp.buttonTooltip')}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;
