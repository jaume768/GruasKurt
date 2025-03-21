import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/Contact.css';

export default function Contact() {
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
      to_email: 'jaumefernandezsunyer10@gmail.com',
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('CORRECTO!', response.status, response.text);
        setFormStatus({
          submitting: false,
          success: 'Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.',
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
          error: 'Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
        });
      });
  };

  return (
    <main className="contact">
      <h1 className="contact h1">Contacto</h1>

      <section className="contact-info-cards-contacto">
        <div className="container-contacto">
          <div className="info-cards-wrapper-contacto">
            <div className="info-card-contacto">
              <div className="icon-contacto">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <h3 className="info-title-contacto">Gruasperello@gmail.com</h3>
              <p className="info-subtitle-contacto">Escríbenos sin compromiso</p>
            </div>

            <div className="info-card-contacto">
              <div className="icon-contacto">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h3 className="info-title-contacto">(+34) 971 58 12 60</h3>
              <p className="info-subtitle-contacto">¡Llámanos para lo que necesites!</p>
            </div>

            <div className="info-card-contacto">
              <div className="icon-contacto">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="info-title-contacto">Carrera Herba Sana, 4,<br />07110, Baleares</h3>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.6990423560064!2d2.64989851583596!3d39.57374397946742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b9c457a44d2b%3A0x3c812ce1e4c94e1a!2sCarrer%20Herba%20Sana%2C%204%2C%2007110%20Bunyola%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1614525289630!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Nuestra ubicación en Mallorca"
              ></iframe>
            </div>

            <div className="form-wrapper-contacto">
              <h2 className="form-title-contacto">Contáctanos</h2>
              <p className="form-subtitle-contacto">Envíanos tus datos en el siguiente formulario y contactaremos contigo lo antes posible.</p>

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
                    placeholder="Nombre o Empresa" 
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
                    placeholder="Email" 
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
                    placeholder="Teléfono" 
                  />
                </div>

                <div className="form-group-contacto">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea-contacto" 
                    placeholder="¿Qué necesitas?" 
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
                  <label htmlFor="privacy">Acepto la política de privacidad de este sitio web.</label>
                </div>

                <button 
                  type="submit" 
                  className="submit-button-contacto"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
