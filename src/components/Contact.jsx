import React from 'react';
import './css/Contact.css';

export default function Contact() {
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

              <form className="contact-form-contacto">
                <div className="form-group-contacto">
                  <input type="text" className="form-input-contacto" placeholder="Nombre o Empresa" required />
                </div>

                <div className="form-group-contacto">
                  <input type="email" className="form-input-contacto" placeholder="Email" required />
                </div>

                <div className="form-group-contacto">
                  <input type="tel" className="form-input-contacto" placeholder="Teléfono" />
                </div>

                <div className="form-group-contacto">
                  <textarea className="form-textarea-contacto" placeholder="¿Qué necesitas?" rows="4" required></textarea>
                </div>

                <div className="privacy-policy-contacto">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">Acepto la política de privacidad de este sitio web.</label>
                </div>

                <button type="submit" className="submit-button-contacto">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
