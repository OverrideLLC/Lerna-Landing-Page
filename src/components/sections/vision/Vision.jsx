import React from 'react';
import './Vision.css'; // Importamos los estilos CSS

const VisionSection = () => {
  return (
    <section id="vision" className="future-section">
      <div className="future-content">
        <h2 className="future-title">
          Visión de Futuro
        </h2>
        <p className="future-description">
          Actualmente estamos perfeccionando la experiencia web y de escritorio. Nuestro próximo gran paso es llevar el poder de Lerna a tus manos con aplicaciones móviles nativas.
        </p>
        <button className="future-cta-button">
          Ayudanos a Mejorar!
        </button>
      </div>
    </section>
  );
};


export default VisionSection;
