import React from 'react';
import '../styles/Feedback.css';

const FeedbackSection = () => {
  return (
    <section id="eva" className="feedback-section">
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">EVA</h2>
          <p className="section-subtitle">
            Tu asistente de IA integral que revoluciona la educación. Automatiza tareas, personaliza el aprendizaje y potencia tu productividad docente.
          </p>
        </div>

        <div className="content-grid">
          <div className="content-left">
            <div className="feedback-grid">
              <div className="feedback-category">
                <h3 className="category-title">Evaluación Inteligente</h3>
                <ul className="feedback-list">
                  <li className="feedback-item">
                    <div className="feedback-icon evaluation"></div>
                    <span className="feedback-text">Corrección automática de exámenes con precisión del 95%</span>
                  </li>
                  <li className="feedback-item">
                    <div className="feedback-icon analysis"></div>
                    <span className="feedback-text">Análisis predictivo del rendimiento estudiantil</span>
                  </li>
                  <li className="feedback-item">
                    <div className="feedback-icon feedback"></div>
                    <span className="feedback-text">Feedback personalizado e instantáneo</span>
                  </li>
                </ul>
              </div>

              <div className="feedback-category">
                <h3 className="category-title">Creación de Contenido</h3>
                <ul className="feedback-list">
                  <li className="feedback-item">
                    <div className="feedback-icon content"></div>
                    <span className="feedback-text">Generación automática de planes de lección</span>
                  </li>
                  <li className="feedback-item">
                    <div className="feedback-icon quiz"></div>
                    <span className="feedback-text">Creación de exámenes adaptativos por tema</span>
                  </li>
                  <li className="feedback-item">
                    <div className="feedback-icon materials"></div>
                    <span className="feedback-text">Materiales didácticos personalizados por nivel</span>
                  </li>
                </ul>
              </div>

              <div className="feedback-category">
                <h3 className="category-title">Gestión Administrativa</h3>
                <ul className="feedback-list">
                  <li className="feedback-item">
                    <div className="feedback-icon schedule"></div>
                    <span className="feedback-text">Optimización automática de horarios</span>
                  </li>
                  <li className="feedback-item">
                    <div className="feedback-icon reports"></div>
                    <span className="feedback-text">Reportes de progreso automatizados para padres</span>
                  </li>
                  <li className="feedback-item">
                    <div className="feedback-icon attendance"></div>
                    <span className="feedback-text">Control de asistencia con QR</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="content-right">
            <div className="demo-container">
              <div className="demo-header">
                <div className="demo-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <span className="demo-title">Dashboard EVA - Productividad Docente</span>
              </div>

              <div className="analytics-grid">
                <div className="metric-card primary">
                  <div className="metric-icon">📊</div>
                  <div className="metric-content">
                    <div className="metric-label">Exámenes Procesados</div>
                    <div className="metric-value">1,247</div>
                    <div className="metric-change positive">+23% este mes</div>
                  </div>
                </div>
                <div className="metric-card secondary">
                  <div className="metric-icon">⏰</div>
                  <div className="metric-content">
                    <div className="metric-label">Tiempo Ahorrado</div>
                    <div className="metric-value">156h</div>
                    <div className="metric-change positive">+89% eficiencia</div>
                  </div>
                </div>
                <div className="metric-card accent">
                  <div className="metric-icon">🎯</div>
                  <div className="metric-content">
                    <div className="metric-label">Precisión IA</div>
                    <div className="metric-value">95.2%</div>
                    <div className="metric-change neutral">Estable</div>
                  </div>
                </div>
                <div className="metric-card success">
                  <div className="metric-icon">📈</div>
                  <div className="metric-content">
                    <div className="metric-label">Mejora Promedio</div>
                    <div className="metric-value">+18%</div>
                    <div className="metric-change positive">Rendimiento</div>
                  </div>
                </div>
              </div>

              <div className="progress-section">
                <h4 className="progress-title">Funcionalidades Activas</h4>
                <div className="progress-item">
                  <span className="progress-label">
                    <span className="progress-icon">🤖</span>
                    Corrección Automática
                  </span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ '--progress-width': '95%', '--progress-color': '#10b981' }}></div>
                  </div>
                  <span className="progress-percentage">95%</span>
                </div>
                <div className="progress-item">
                  <span className="progress-label">
                    <span className="progress-icon">📝</span>
                    Generación de Contenido
                  </span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ '--progress-width': '88%', '--progress-color': '#3b82f6' }}></div>
                  </div>
                  <span className="progress-percentage">88%</span>
                </div>
                <div className="progress-item">
                  <span className="progress-label">
                    <span className="progress-icon">📊</span>
                    Análisis Predictivo
                  </span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ '--progress-width': '76%', '--progress-color': '#a855f7' }}></div>
                  </div>
                  <span className="progress-percentage">76%</span>
                </div>
                <div className="progress-item">
                  <span className="progress-label">
                    <span className="progress-icon">🎯</span>
                    Personalización
                  </span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ '--progress-width': '92%', '--progress-color': '#f59e0b' }}></div>
                  </div>
                  <span className="progress-percentage">92%</span>
                </div>
              </div>

              <div className="ai-insights">
                <div className="insight-item">
                  <div className="insight-icon">💡</div>
                  <div className="insight-text">
                    <strong>Insight EVA:</strong> Los estudiantes muestran 23% más engagement con contenido personalizado por IA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeedbackSection;