import React from 'react';
import './css/Technology.css';

export default function Technology() {
  return (
    <main className="technology">
      {/* Workflow Section */}
      <section className="technology-workflow">
        <div className="container">
          <h2 className="section-title">Trabajamos con la última tecnología</h2>
          <p className="section-description">
            Nuestro flujo de trabajo es llevado a cabo a través de EFI Asistencia,
            una solución software para gestión de servicios de asistencia en
            carretera y gestión de flota.
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
                <h3>Incidente</h3>
                <p>El usuario llama a su aseguradora habitual.</p>
              </div>
              
              <div className="workflow-step">
                <h3>Contacto</h3>
                <p>La aseguradora con la que trabajamos, nos encomienda el servicio por EFI Asistencia.</p>
              </div>
              
              <div className="workflow-step">
                <h3>Localización</h3>
                <p>Una vez recibimos el servicio, uno de nuestros grúistas se desplaza hacia el punto de ubicación del incidente.</p>
              </div>
              
              <div className="workflow-step">
                <h3>Gestión</h3>
                <p>Desplegamos el vehículo a donde desee el usuario.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="technology-advantages">
        <div className="container">
          <div className="advantages-content">
            <div className="advantages-image">
              <img src="/tech.jpg" alt="Truck Transport" />
            </div>
            
            <div className="advantages-info">
              <h2 className="section-title">Ventajas tecnológicas</h2>
              
              <div className="advantages-grid">
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h3>Fiabilidad</h3>
                  <p>Total seguridad en nuestros datos y en la información asociada a nuestros servicios.</p>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-gauge-high"></i>
                  </div>
                  <h3>Eficiencia</h3>
                  <p>Gestión eficiente de nuestra flota y servicios con cualquier dispositivo.</p>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <h3>Profesionalidad</h3>
                  <p>Mayor calidad de servicio con una imagen más profesional y ordenada.</p>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <h3>Rapidez</h3>
                  <p>Comunicación directa con nuestros principales clientes y recepción automática de nuestros servicios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
