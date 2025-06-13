import React, { useState, useEffect } from 'react';
// Asegúrate de que la ruta al archivo CSS sea correcta.
import '../styles/CustomCursor.css';

const CustomCursor = () => {
    // Estado para la posición del cursor
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // Estado para el tipo de cursor (default, pointer, text)
    const [cursorType, setCursorType] = useState('default');

    useEffect(() => {
        // Función para actualizar la posición del cursor
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        // Función para detectar sobre qué tipo de elemento se está
        const handleMouseOver = (e) => {
            const target = e.target;
            // Si el elemento es un enlace, un botón o tiene el atributo 'data-cursor-pointer'
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('[data-cursor-pointer]')
            ) {
                setCursorType('pointer');
            } 
            // Si el elemento es de tipo texto
            else if (
                target.tagName.toLowerCase() === 'p' ||
                target.tagName.toLowerCase() === 'h1' ||
                target.tagName.toLowerCase() === 'h2' ||
                target.tagName.toLowerCase() === 'h3' ||
                target.tagName.toLowerCase() === 'h4' ||
                target.tagName.toLowerCase() === 'h5' ||
                target.tagName.toLowerCase() === 'h6' ||
                target.tagName.toLowerCase() === 'span' ||
                target.tagName.toLowerCase() === 'input' ||
                target.tagName.toLowerCase() === 'textarea'
            ) {
                setCursorType('text');
            } 
            // Si no, es el cursor por defecto
            else {
                setCursorType('default');
            }
        };

        // Añade los listeners al montar el componente
        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseover', handleMouseOver);

        // Limpieza: elimina los listeners al desmontar el componente
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${cursorType}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default CustomCursor;

