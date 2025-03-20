import React from 'react';
import './css/ReacSection.css';

export default function ReacSection() {
  return (
    <section className="reac-section">
      <div className="reac-content">
        <div className="reac-logo">
          <img src="/reac-logo.png" alt="Logo REAC" />
        </div>
        <h2>Pertenecemos a REAC</h2>
        <a href="https://reac.es" target="_blank" rel="noopener noreferrer" className="reac-button">reac.es</a>
        <p>La mayor Red de Empresas de Auxilio en Carretera en España</p>
      </div>
    </section>
  );
}
