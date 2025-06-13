import { useState, useEffect, useRef } from 'react';

// Hook personalizado para detectar cuando un elemento está en el viewport
const useOnScreen = (options) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Cuando el elemento es visible, actualiza el estado
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Deja de observar una vez que es visible para no repetir la animación
                observer.unobserve(entry.target);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};

export default useOnScreen;
