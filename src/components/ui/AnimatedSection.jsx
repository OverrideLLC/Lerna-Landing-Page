/* === ARCHIVO: src/components/ui/AnimatedSection.jsx === */
import React from 'react';
import useOnScreen from '../../hooks/useOnScreen';

// Componente para animar secciones al hacer scroll
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const transitionDelay = `${delay}ms`;

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay }}
        >
            {children}
        </div>
    );
};
export default AnimatedSection;
