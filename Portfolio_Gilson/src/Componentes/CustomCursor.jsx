// src/Componentes/CustomStarCursor.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../../public/style/customCursor.scss'; // Vamos criar este estilo novo

const CustomStarCursor = () => {
    // Referências para a cabeça e para as partículas da cauda
    const headRef = useRef(null);
    const trailRefs = useRef([]);
    // Estado para detetar hover em links
    const [isHovering, setIsHovering] = useState(false);

    // Configuração do rastro
    const numParticles = 12; // Número de segmentos na cauda
    const mousePos = useRef({ x: 0, y: 0 }); // Posição real do rato
    const particleHistory = useRef(Array(numParticles).fill({ x: 0, y: 0 })); // Histórico de posições das partículas

    useEffect(() => {
        // Função para atualizar a posição real do rato
        const onMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        // Função para detetar hover em elementos clicáveis
        const onMouseOver = (e) => {
            if (e.target.closest('a, button, .clickable, .nav-lang-minimal, .btn-filtro, .projeto-card')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        // LOOP DE ANIMAÇÃO DE ALTA PERFORMANCE (requestAnimationFrame)
        const animate = () => {
            // 1. Move a "cabeça" da estrela instantaneamente
            if (headRef.current) {
                headRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
            }

            // 2. Atualiza a cauda. Cada partícula segue a posição da partícula anterior
            let { x, y } = mousePos.current;

            particleHistory.current.forEach((particle, index) => {
                // Fator de suavização (atraso). Partículas do fim da cauda são mais lentas.
                const speed = 0.35 + (index * 0.05); 
                
                // Calcula a nova posição da partícula
                const nextX = particle.x + (x - particle.x) * speed;
                const nextY = particle.y + (y - particle.y) * speed;

                // Guarda a nova posição no histórico
                particleHistory.current[index] = { x: nextX, y: nextY };

                // Aplica a transformação no DOM
                const particleEl = trailRefs.current[index];
                if (particleEl) {
                    particleEl.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`;
                }

                // A próxima partícula vai seguir ESTA partícula
                x = nextX;
                y = nextY;
            });

            // Continua o loop no próximo frame
            requestAnimationFrame(animate);
        };

        // Inicia escutas de eventos e loop de animação
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);
        const animationId = requestAnimationFrame(animate);

        // Limpeza
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            {/* A Cabeça da Estrela Cadente */}
            <div ref={headRef} className={`star-head ${isHovering ? 'hover' : ''}`}>
                <div className="star-core"></div>
            </div>
            
            {/* As 12 Partículas que formam a Cauda */}
            {Array.from({ length: numParticles }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (trailRefs.current[i] = el)}
                    className={`star-tail-particle ${isHovering ? 'hover' : ''}`}
                    style={{
                        // O design da cauda é controlado aqui:
                        // As partículas do fim da cauda são mais pequenas, mais opacas e têm cores diferentes
                        '--index': i,
                        '--total': numParticles,
                        '--opacity': 1 - (i / numParticles),
                        '--scale': 1 - (i / numParticles) * 0.8,
                    }}
                ></div>
            ))}
        </>
    );
};

export default CustomStarCursor;