import React, { useState, useMemo } from 'react';
import './Features.css'; // Asegúrate de que la ruta sea correcta
import { toolsData } from './Fetures-data'

const Features = () => {
  // --- LÓGICA DE ESTADO ---
  // El estado inicial ahora es más robusto para evitar errores si los datos cambian
  const [selectedLevel, setSelectedLevel] = useState(toolsData[0].level);
  
  const getInitialSubCategory = (level) => {
      const levelData = toolsData.find(d => d.level === level);
      return levelData?.subCategories[0]?.name || '';
  };

  const [selectedSubCategory, setSelectedSubCategory] = useState(getInitialSubCategory(selectedLevel));

  const currentSubCategories = useMemo(() => {
    return toolsData.find(d => d.level === selectedLevel)?.subCategories || [];
  }, [selectedLevel]);

  const currentData = useMemo(() => {
    // Si la subcategoría seleccionada no existe en la nueva lista, selecciona la primera
    if (!currentSubCategories.find(sc => sc.name === selectedSubCategory)) {
        setSelectedSubCategory(currentSubCategories[0]?.name || '');
    }
    return currentSubCategories.find(sc => sc.name === selectedSubCategory);
  }, [selectedSubCategory, currentSubCategories]);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setSelectedSubCategory(getInitialSubCategory(level));
  };


  return (
    <section id="features" className="features-section">
      <div className="features-container">
        {/* Header (se mantiene el original) */}
        <div className="features-header">
          <h2 className="features-title">
            Herramientas para cada necesidad,<br/>
            un universo de posibilidades
          </h2>
          <p className="features-subtitle">
            Muchas de estas herramientas son de código abierto y están disponibles para que las uses en tus clases. Aunque no todas se encuentran disponibles por el momento, se irán agregando más con el tiempo
          </p>
        </div>

        {/* --- NUEVA SECCIÓN DE SELECTORES Y CARRUSEL --- */}
        <div className="interactive-tools-container">
          {/* Selectores de Nivel Educativo */}
          <div className="level-selectors">
            {toolsData.map(data => (
              <button
                key={data.level}
                onClick={() => handleLevelSelect(data.level)}
                className={`selector-btn ${selectedLevel === data.level ? 'active' : ''}`}
              >
                {data.level}
              </button>
            ))}
          </div>

          {/* Selectores de Carrera / Grado */}
          <div className="subcategory-selectors">
            {currentSubCategories.map(sc => (
              <button
                key={sc.name}
                onClick={() => setSelectedSubCategory(sc.name)}
                className={`selector-btn ${selectedSubCategory === sc.name ? 'active' : ''}`}
              >
                {sc.name}
              </button>
            ))}
          </div>
          
          {/* Contenido y Carrusel de Herramientas */}
          {currentData && (
            <div className="tools-display">
              <p className="tools-description">{currentData.description}</p>
              <div className="tools-carousel">
                {currentData.tools.map((tool) => (
                  <div key={tool.title} className="tool-card">
                    <div className="tool-icon">{tool.icon}</div>
                    <h3 className="tool-title">{tool.title}</h3>
                    <p className="tool-description-card">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
