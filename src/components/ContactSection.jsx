import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/ContactSection.css';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    policy: false
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: null, error: null });

    const serviceId = 'service_z04ihuq';
    const templateId = 'template_u2gbd7f';
    const publicKey = '9cgVf8auM-uTGrWOI';

    const templateParams = {
      to_email: 'gruasperello@gmail.com',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('CORRECTO!', response.status, response.text);
        setFormStatus({
          submitting: false,
          success: t('contactSection.messages.success'),
          error: null
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          policy: false
        });
      })
      .catch((err) => {
        console.log('ERROR...', err);
        setFormStatus({
          submitting: false,
          success: null,
          error: t('contactSection.messages.error')
        });
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>{t('contactSection.title')}</h2>
          <p>
            {t('contactSection.description')}
          </p>
          <div className="contact-image">
            <img src="/contact-image.png" alt={t('contactSection.imageAlt')} />
          </div>
        </div>

        <div className="contact-form-container">
          <h3>{t('contactSection.formTitle')}</h3>
          
          {formStatus.success && (
            <div className="form-success-message">
              <p>{formStatus.success}</p>
            </div>
          )}

          {formStatus.error && (
            <div className="form-error-message">
              <p>{formStatus.error}</p>
            </div>
          )}
          
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t('contact.placeholders.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t('contact.placeholders.email')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t('contact.placeholders.phone')}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder={t('contact.placeholders.message')}
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                name="policy"
                id="policy"
                checked={formData.policy}
                onChange={handleChange}
                required
              />
              <label htmlFor="policy">
                {t('contact.privacyCheck')}
              </label>
            </div>

            <button 
              type="submit" 
              className="btn-submit"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? t('contact.sending') : t('contact.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
