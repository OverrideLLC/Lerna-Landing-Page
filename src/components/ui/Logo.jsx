import React from 'react';
// Asegúrate de que la ruta al archivo CSS sea correcta
import '../styles/Logo.css'; 

// El componente ahora acepta una prop para controlar qué texto mostrar
const Logo = ({ showLerna }) => (
    <div className="logo-container">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
            </defs>

            {/* Texto "Override" - Se muestra si showLerna es falso */}
            <text
                className={`logo-text override-text ${!showLerna ? 'visible' : ''}`}
                x="0"
                y="35"
                fontFamily="Cookie, sans-serif"
                fontSize="40"
                fontWeight="500"
                fill="url(#logoGradient)"
            >
                Override
            </text>

            {/* Texto "Lerna" - Se muestra si showLerna es verdadero */}
            <text
                className={`logo-text lerna-text ${showLerna ? 'visible' : ''}`}
                x="0"
                y="35"
                fontFamily="Cookie, sans-serif"
                fontSize="40"
                fontWeight="500"
                fill="url(#logoGradient)"
            >
                Lerna
            </text>
        </svg>
    </div>
);

export { Logo };
