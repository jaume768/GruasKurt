import React from 'react';
import './css/Fleet.css';

export default function Fleet() {
  const fleetImages = [
    { id: 1, src: '/fleet/fleet1.jpg', alt: 'Grúa plataforma', span: 'horizontal' },
    { id: 2, src: '/fleet/fleet2.jpg', alt: 'Camión de transporte', span: 'vertical' },
    { id: 3, src: '/fleet/fleet3.jpg', alt: 'Grúa en servicio', span: 'horizontal' },
    
    { id: 4, src: '/fleet/fleet4.jpg', alt: 'Vehículo de asistencia', span: 'vertical' },
    { id: 5, src: '/fleet/fleet5.jpg', alt: 'Plataforma con vehículo', span: 'horizontal' },
    { id: 6, src: '/fleet/fleet6.jpg', alt: 'Góndola en transporte', span: 'vertical-medium' },
    
    { id: 7, src: '/fleet/fleet7.jpg', alt: 'Camión grúa', span: 'horizontal' },
    { id: 8, src: '/fleet/fleet8.jpg', alt: 'Plataforma especial', span: 'horizontal-small' },
    { id: 9, src: '/fleet/fleet9.jpg', alt: 'Vehículo de asistencia rápida', span: 'vertical' },
    
    { id: 10, src: '/fleet/fleet10.jpg', alt: 'Grúa con vehículo', span: 'horizontal-small' },
    { id: 11, src: '/fleet/fleet11.jpg', alt: 'Camión en operación', span: 'vertical-small' },
    { id: 12, src: '/fleet/fleet12.jpg', alt: 'Grúa en ruta', span: 'horizontal-small' },
  ];

  return (
    <main className="fleet">
      <section className="fleet-hero">
        <div className="fleet-hero-content">
          <h1>Nuestra flota</h1>
          <div className="underline"></div>
          <p>
            Tenemos todo tipo de vehículos para la asistencia en carretera.
            <br />
            Desde grúas plataformas hasta góndolas.
          </p>
        </div>
      </section>
      
      <section className="fleet-gallery">
        <div className="masonry-grid">
          {fleetImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`gallery-item ${image.span}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="fleet-image"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
