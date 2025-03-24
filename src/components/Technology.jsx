import React from 'react';
import './css/Technology.css';

export default function Technology() {
  return (
    <main className="technology">
      <section className="technology-workflow">
        <div className="container">
          <h1 className="technology-title">Utilizamos tecnología de punta</h1>
          <p className="section-description">
            Nuestro proceso se ejecuta mediante EFI Asistencia, un software de gestión para servicios de auxilio en carretera y manejo de flota.
          </p>

          <div className="workflow-steps">
            <div className="workflow-timeline">
              <div className="step-point">1</div>
              <div className="step-line"></div>
              <div className="step-point">2</div>
              <div className="step-line"></div>
              <div className="step-point">3</div>
              <div className="step-line"></div>
              <div className="step-point">4</div>
            </div>

            <div className="workflow-details">
              <div className="workflow-step">
                <h3>Incidencia</h3>
                <p>El cliente se comunica con su aseguradora habitual.</p>
              </div>
              
              <div className="workflow-step">
                <h3>Notificación</h3>
                <p>La aseguradora asociada nos asigna el servicio a través de EFI Asistencia.</p>
              </div>
              
              <div className="workflow-step">
                <h3>Ubicación</h3>
                <p>Una vez asignado, uno de nuestros operadores se dirige al lugar del incidente.</p>
              </div>
              
              <div className="workflow-step">
                <h3>Acción</h3>
                <p>Enviamos el vehículo al destino que el cliente requiera.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Ventajas */}
      <section className="technology-advantages">
        <div className="container">
          <div className="advantages-content">
            <div className="advantages-image">
              <img src="/tech.png" alt="Transporte de camiones" />
            </div>
            
            <div className="advantages-info">
              <h2 className="section-title">Beneficios tecnológicos</h2>
              
              <div className="advantages-grid">
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h3>Confiabilidad</h3>
                  <p>Máxima seguridad para nuestros datos y la información vinculada a nuestros servicios.</p>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-gauge-high"></i>
                  </div>
                  <h3>Eficacia</h3>
                  <p>Manejo óptimo de nuestra flota y servicios accesible desde cualquier dispositivo.</p>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <h3>Profesionalismo</h3>
                  <p>Una imagen más organizada y profesional que se refleja en la calidad de nuestro servicio.</p>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <h3>Velocidad</h3>
                  <p>Comunicación inmediata con nuestros clientes principales y asignación automática de servicios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
