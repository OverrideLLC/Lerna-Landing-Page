import React, { useState, useEffect, useRef } from 'react';
// Asegúrate de que la ruta al archivo CSS sea correcta
import '../styles/Hero.css';

const Hero = ({ appName, videos }) => {
    // Si no hay videos, no renderizar nada para evitar errores.
    if (!videos || videos.length === 0) {
        return null;
    }

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const videoRef = useRef(null);
    const hasTriggeredTransition = useRef(false);

    // Función para manejar cuando el video está listo para reproducirse
    const handleVideoReady = () => {
        setTimeout(() => {
            setIsVideoVisible(true);
        }, 100);
    };

    // Función para manejar el progreso del video
    const handleTimeUpdate = () => {
        if (videoRef.current && !hasTriggeredTransition.current) {
            const video = videoRef.current;
            const timeRemaining = video.duration - video.currentTime;
            
            // Solo si el video tiene duración válida y quedan menos de 2 segundos
            if (video.duration && timeRemaining <= 2 && timeRemaining > 0) {
                hasTriggeredTransition.current = true;
                setIsVideoVisible(false); // Inicia el blur
                
                // Cambiar al siguiente video después de 1 segundo (mitad de la transición)
                setTimeout(() => {
                    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
                }, 1000);
            }
        }
    };

    // Función de respaldo cuando el video termina (por si acaso)
    const handleVideoEnd = () => {
        if (!hasTriggeredTransition.current) {
            setIsVideoVisible(false);
            setTimeout(() => {
                setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
            }, 1000);
        }
    };

    // Effect para resetear estado cuando cambia el video
    useEffect(() => {
        setIsVideoVisible(false);
        hasTriggeredTransition.current = false;
        
        // Si el video ya está cargado, activar visibilidad
        const video = videoRef.current;
        if (video && video.readyState >= 3) {
            handleVideoReady();
        }
    }, [currentVideoIndex]);

    return (
        <section className="hero-section">
            <div className="hero-video-container">
                <video
                    ref={videoRef}
                    key={videos[currentVideoIndex]}
                    className={`hero-video ${isVideoVisible ? 'is-playing' : ''}`}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={handleVideoReady}
                    onCanPlay={handleVideoReady}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleVideoEnd}
                    onLoadStart={() => {
                        hasTriggeredTransition.current = false;
                    }}
                    onError={(e) => {
                        console.error('Error loading video:', e);
                        setTimeout(() => {
                            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
                        }, 1000);
                    }}
                >
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                    Su navegador no soporta el elemento de video.
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">{appName}</h1>
                <p className="hero-subtitle">
                    Mejora tu productividad como profesor,<br />
                    da un paso hacia el futuro.
                </p>
                <button 
                    className="hero-button"
                    onClick={() => window.location.href = 'https://app.lerna.override.com.mx'}
                >
                    Comenzar con {appName}
                </button>
                <p className="hero-notice">Consultar términos y condiciones.</p>
            </div>
        </section>
    );
};

export default Hero;