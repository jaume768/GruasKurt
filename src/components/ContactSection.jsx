import React, { useState } from 'react';
import './css/ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    policy: false
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
    console.log('Form data submitted:', formData);
    alert('Mensaje enviado. Gracias por contactar con nosotros.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      policy: false
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contacta con nosotros</h2>
          <p>
            Ya seas un particular, empresa o compañía y necesitas algunos
            de nuestros, no dudes en contactarnos sin compromiso.
          </p>
          <div className="contact-image">
            <img src="/contact-image.jpg" alt="Contact" />
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Envíanos tus datos</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre o Empresa"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="¿Qué necesitas?"
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
                Acepto la política de privacidad de este sitio web.
              </label>
            </div>

            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
