import React, { useEffect, useRef, useState } from 'react';
import '../../public/style/customCursor.scss';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            const { clientX, clientY } = e;

            // Move o ponto e a aura diretamente
            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${clientX}px`;
                cursorDotRef.current.style.top = `${clientY}px`;
            }
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.left = `${clientX}px`;
                cursorOutlineRef.current.style.top = `${clientY}px`;
            }
        };

        const onMouseOver = (e) => {
            // Se passar por cima de qualquer elemento clicável
            if (e.target.closest('a, button, .clickable, .nav-lang-minimal, .btn-filtro, .projeto-card')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return (
        <>
            <div ref={cursorDotRef} className={`cursor-dot ${isHovering ? 'hover' : ''}`}></div>
            <div ref={cursorOutlineRef} className={`cursor-outline ${isHovering ? 'hover' : ''}`}></div>
        </>
    );
};

export default CustomCursor;