import React from 'react';
import './Connectivity.css';
import AnimatedSection from '../../ui/AnimatedSection';

const Connectivity = () => {
  const integrations = [
    {
      name: "Google Classroom",
      icon: "https://img.icons8.com/color/96/google-classroom.png",
      description: "Sincroniza automáticamente tus clases y tareas",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      name: "Google Drive",
      icon: "https://img.icons8.com/color/96/google-drive--v1.png",
      description: "Accede y comparte recursos desde la nube",
      gradient: "from-green-500 to-green-700"
    },
    {
      name: "Microsoft Teams",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
      description: "Colabora en tiempo real con tu equipo",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      name: "Zoom",
      icon: "https://img.icons8.com/color/96/zoom.png",
      description: "Integra clases virtuales sin problemas",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Slack",
      icon: "https://img.icons8.com/color/96/slack-new.png",
      description: "Mantén comunicación fluida con estudiantes",
      gradient: "from-pink-500 to-pink-700"
    },
    {
      name: "Dropbox",
      icon: "https://img.icons8.com/color/96/dropbox.png",
      description: "Almacena y organiza contenido educativo",
      gradient: "from-indigo-500 to-indigo-700"
    }
  ];

  return (
    <section id='ecosistema' className="connectivity-section">
      <div className="connectivity-container">
        {/* Header */}
        <AnimatedSection className="connectivity-header">
          <div className="connectivity-badge">
            <span className="connectivity-badge-text">Ecosistema</span>
          </div>
          <h2 className="connectivity-title">
            Conectado a tu 
            <span className="connectivity-title-gradient"> Ecosistema</span>
          </h2>
          <p className="connectivity-description">
            Lerna se integra sin esfuerzo con las plataformas que ya usas, 
            centralizando tu flujo de trabajo y ahorrándote tiempo.
          </p>
        </AnimatedSection>

        {/* Integration Grid */}
        <AnimatedSection delay={200} className="connectivity-grid">
          {integrations.map((integration, index) => (
            <div 
              key={integration.name} 
              className="integration-card"
              style={{ '--delay': `${index * 100}ms` }}
            >
              <div className="integration-card-inner">
                <div className="integration-icon-wrapper">
                  <div className={`integration-icon-bg bg-gradient-to-br ${integration.gradient}`}></div>
                  <img 
                    src={integration.icon} 
                    alt={integration.name}
                    className="integration-icon"
                  />
                </div>
                <div className="integration-content">
                  <h3 className="integration-name">{integration.name}</h3>
                  <p className="integration-description">{integration.description}</p>
                </div>
                <div className="integration-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* More integrations */}
        <AnimatedSection delay={400} className="connectivity-more">
          <div className="connectivity-more-card">
            <div className="connectivity-more-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="5" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="19" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="connectivity-more-title">+25 integraciones más</h3>
            <p className="connectivity-more-text">
              Canvas, Moodle, Blackboard, OneDrive y muchas más...
            </p>
          </div>
        </AnimatedSection>

        {/* Background decorations */}
        <div className="connectivity-bg-decoration">
          <div className="connectivity-circle connectivity-circle-1"></div>
          <div className="connectivity-circle connectivity-circle-2"></div>
          <div className="connectivity-circle connectivity-circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Connectivity;