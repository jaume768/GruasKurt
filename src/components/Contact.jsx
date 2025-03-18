import React from 'react';
import './css/Contact.css';

export default function Contact() {
  return (
    <main className="contact">
      <h2>Contacto</h2>
      <form>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea rows="4"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
