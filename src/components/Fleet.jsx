import React from 'react';
import './css/Fleet.css';

export default function Fleet() {
  return (
    <main className="fleet">
      <h2>Nuestra Flota</h2>
      <div className="vehicle-list">
        <div className="vehicle-card">
          <h3>Grúas Plataforma</h3>
          <p>Capacidad de carga hasta 40 toneladas</p>
        </div>
        <div className="vehicle-card">
          <h3>Camiones Remolque</h3>
          <p>Para transporte de vehículos accidentados</p>
        </div>
      </div>
    </main>
  );
}
