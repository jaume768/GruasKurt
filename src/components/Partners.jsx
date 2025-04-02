import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './css/Partners.css';

export default function Partners() {
  const { t } = useTranslation();
  
  // Array of partner names to display
  const partners = [
    { name: 'RACC', logo: '/partners/logo-racc.png' },
    { name: 'Allianz Partners', logo: '/partners/logo-allianz.png' },
    { name: 'AXA', logo: '/partners/logo-axa.png' },
    { name: 'ADA', logo: '/partners/logo-ada.png' },
    { name: 'ARAG', logo: '/partners/logo-arag.png' },
    { name: 'ASITUR', logo: '/partners/logo-asitur.png' },
    { name: 'EUROP', logo: '/partners/logo-europ.png' },
    { name: 'LIINEA DIRECTA', logo: '/partners/logo-lineadirecta.png' },
    { name: 'MUTUA AUTOCLUB', logo: '/partners/logo-mutua-autoclub.png' },
    { name: 'ADAC', logo: '/partners/logo-adac.png' }
  ];

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);

  // Función para actualizar el indicador activo
  const updateActiveIndicator = (index) => {
    setActiveIndex(index);
  };

  // Función para manejar el clic en un indicador
  const handleIndicatorClick = (index) => {
    updateActiveIndicator(index);
    // Calcular la posición de desplazamiento basada en el índice
    const logoWidth = 150 + 64; // ancho del logo + margen (2rem = 32px * 2)
    const offset = -index * logoWidth;
    
    if (carouselRef.current) {
      // Pausar la animación automática
      setAutoScrollPaused(true);
      carouselRef.current.style.animation = 'none';
      carouselRef.current.style.transform = `translateX(${offset}px)`;
      
      // Reanudar la animación después de un tiempo
      setTimeout(() => {
        setAutoScrollPaused(false);
        carouselRef.current.style.animation = '';
      }, 3000);
    }
  };

  // Funciones para el deslizamiento manual
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
    setAutoScrollPaused(true);
    
    if (carouselRef.current) {
      carouselRef.current.style.animation = 'none';
      // Obtener la posición actual de transformación
      const transform = window.getComputedStyle(carouselRef.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transform);
      setCurrentTranslate(matrix.m41); // m41 es la propiedad translateX de la matriz
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentPosition - startPosition;
    
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${currentTranslate + diff}px)`;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Reanudar la animación automática después de un tiempo
    setTimeout(() => {
      setAutoScrollPaused(false);
      if (carouselRef.current) {
        carouselRef.current.style.animation = '';
        carouselRef.current.style.transform = '';
      }
    }, 2000);
  };

  // Efecto para actualizar el indicador activo periódicamente
  useEffect(() => {
    if (autoScrollPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [partners.length, autoScrollPaused]);

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <h2>{t('partners.title')}</h2>
          <p>{t('partners.subtitle')}</p>
        </div>

        <div 
          className="partners-carousel-container"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div 
            className={`partners-carousel ${autoScrollPaused ? 'paused' : ''}`}
            ref={carouselRef}
          >
            {partners.map((partner, index) => (
              <div className="partner-logo" key={`partner-${index}`}>
                <img src={partner.logo} alt={`${t('partners.logoPrefix')} ${partner.name}`} />
              </div>
            ))}

            {partners.map((partner, index) => (
              <div className="partner-logo" key={`partner-dup-${index}`}>
                <img src={partner.logo} alt={`${t('partners.logoPrefix')} ${partner.name}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-indicators">
          {partners.map((_, index) => (
            <span
              key={`indicator-${index}`}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
