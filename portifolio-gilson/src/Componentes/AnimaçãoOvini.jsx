import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import OviniIcon from '../../public/img/ovini.svg'; // Importe o seu SVG como componente
import '../../public/style/animacaoOvini.scss';

// REGISTRE O PLUGIN DO GSAP
gsap.registerPlugin(MotionPathPlugin, useGSAP);

const AnimaçãoOvini = () => {
    const oviniRef = useRef(null);

    useGSAP(() => {
        // DEFINIMOS A ANIMAÇÃO AQUI
        gsap.to(oviniRef.current, {
            duration: 25, // VELOCIDADE: Um valor alto (ex: 20s, 25s) faz com que ele se mova lentamente
            
            motionPath: {
                // TRAJETO DINÂMICO: Uma série de pontos Bezier que o óvini segue.
                // Ajuste os valores de x e y para mudar o caminho.
                // Começa em x: 0, y: 0 (posição inicial definida no CSS).
                path: [
                    { x: 100, y: 0 },
                    { x: 250, y: -100 }, // Sobe e vai pra direita
                    { x: 400, y: 50 },   // Desce
                    { x: 550, y: -40 },  // Sobe de leve
                    { x: 700, y: 70 },   // Desce mais
                    { x: 850, y: -90 },  // Sobe muito
                    { x: 1000, y: 0 },  // Volta pro centro vertical, no fim da tela
                ],
                // 'autoRotate' gira o óvini automaticamente para seguir a curva.
                // Como é um óvini clássico, não queremos que ele rotacione, apenas flutue, então deixamos 'false'.
                autoRotate: false,
                // 'type: "cubic"' ou 'type: "thru"' cria curvas suaves entre os pontos.
                type: "thru", 
            },

            // REPETIÇÃO E SUAVIZAÇÃO
            repeat: -1, // Loop infinito
            yoyo: true,  // Faz o óvini voltar pelo mesmo caminho ao invés de pular pro início
            ease: "power1.inOut", // Suavização elegante: começa e termina devagar, rápido no meio da viagem.
        });
    });

    return (
        <div className="section-ovini">
            <div className="ovini-wrapper" ref={oviniRef}>
                {/* O seu SVG ícone sendo renderizado */}
                <img src={OviniIcon} alt="" className="ovini-icon" />
            </div>
        </div>
    );
};

export default AnimaçãoOvini;