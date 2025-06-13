import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds, offset = 80) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observers = [];
        
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                // Ajustamos el umbral para considerar una sección como activa
                if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: `-${offset}px 0px -50% 0px`, // Ajusta el área de observación teniendo en cuenta el header
            threshold: [0.2, 0.5, 0.8] // Múltiples umbrales para mejor precisión
        };

        // Crear un observer para cada sección
        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                const observer = new IntersectionObserver(observerCallback, observerOptions);
                observer.observe(element);
                observers.push(observer);
            }
        });

        // Limpieza
        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [sectionIds, offset]);

    return activeSection;
};

export default useActiveSection;
