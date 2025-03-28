import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/Contact.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
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
          success: t('contact.messages.success'),
          error: null
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          privacy: false
        });
      })
      .catch((err) => {
        console.log('ERROR...', err);
        setFormStatus({
          submitting: false,
          success: null,
          error: t('contact.messages.error')
        });
      });
  };

  return (
    <main className="contact">
      <h1 className="contact h1">{t('contact.title')}</h1>

      <section className="contact-info-cards-contacto">
        <div className="container-contacto">
          <div className="info-cards-wrapper-contacto">
            <div className="info-card-contacto">
              <div className="icon-contacto">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <h3 className="info-title-contacto">{t('contact.emailAddress')}</h3>
              <p className="info-subtitle-contacto">{t('contact.emailSubtitle')}</p>
            </div>

            <div className="info-card-contacto">
              <div className="icon-contacto">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h3 className="info-title-contacto">{t('contact.phoneNumber')}</h3>
              <p className="info-subtitle-contacto">{t('contact.phoneSubtitle')}</p>
            </div>

            <div className="info-card-contacto">
              <div className="icon-contacto">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="info-title-contacto">{t('contact.addressText')}</h3>
              <p className="info-subtitle-contacto"></p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section-contacto">
        <div className="container-contacto">
          <div className="contact-form-wrapper-contacto">
            <div className="map-wrapper-contacto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.730897193549!2d3.1534486!3d39.4754077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12964db7508341b1%3A0xbe401ac4b0c7e3d8!2sAutomoviles%20Y%20Gruas%20Perell%C3%B3%20SL!5e0!3m2!1ses!2ses!4v1742807806748!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={t('contact.mapTitle')}
              ></iframe>
            </div>

            <div className="form-wrapper-contacto">
              <h2 className="form-title-contacto">{t('contact.title')}</h2>
              <p className="form-subtitle-contacto">{t('contact.subtitle')}</p>

              {formStatus.success && (
                <div className="form-success-message">
                  <i className="fa-solid fa-check-circle"></i>
                  <p>{formStatus.success}</p>
                </div>
              )}

              {formStatus.error && (
                <div className="form-error-message">
                  <i className="fa-solid fa-exclamation-circle"></i>
                  <p>{formStatus.error}</p>
                </div>
              )}

              <form ref={form} className="contact-form-contacto" onSubmit={handleSubmit}>
                <div className="form-group-contacto">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input-contacto" 
                    placeholder={t('contact.placeholders.name')} 
                    required 
                  />
                </div>

                <div className="form-group-contacto">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input-contacto" 
                    placeholder={t('contact.placeholders.email')} 
                    required 
                  />
                </div>

                <div className="form-group-contacto">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-contacto" 
                    placeholder={t('contact.placeholders.phone')} 
                  />
                </div>

                <div className="form-group-contacto">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea-contacto" 
                    placeholder={t('contact.placeholders.message')} 
                    rows="4" 
                    required
                  ></textarea>
                </div>

                <div className="privacy-policy-contacto">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required 
                  />
                  <label htmlFor="privacy">{t('contact.privacyCheck')}</label>
                </div>

                <button 
                  type="submit" 
                  className="submit-button-contacto"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? t('contact.sending') : t('contact.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
