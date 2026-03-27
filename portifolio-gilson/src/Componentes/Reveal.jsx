// src/Componentes/Reveal.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../../public/style/reveal.scss'; // Ajuste o caminho consoante a sua estrutura

const Reveal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // Cria o observador que vigia a rolagem da tela
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Se a secção entrar na tela (intersecting)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Desliga o observador depois de aparecer (para animar apenas uma vez)
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // A animação dispara quando 15% da secção aparecer na tela
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Limpeza
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`reveal-wrapper ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

export default Reveal;