import React from 'react';
import '../../public/style/about.scss'; 
import fotoPerfil from '../../public/img/foto2.png';

const About = () => {
    return (
        <section id="sobre" className="about-section">

            <div className="about-content">
                <div className="about-title">
                    <h2>SOBRE <span>MIM</span></h2>
                    <div className="about-image-wrapper">
                        <div className="rocket-icon">🚀</div>
                        <img src={fotoPerfil} alt="Foto de Gilson Dias" />
                    </div>
                </div>
                <div className="about-text-area">
                    <p>
                        Sou estudante de Engenharia de Software, apaixonado por criar soluções tecnológicas que geram impacto real e facilitam o dia a dia das pessoas. 
                        Tenho forte interesse no desenvolvimento de aplicações web e em explorar a integração entre hardware e software.
                    </p>
                    <p>
                        Gosto de atuar em ambientes colaborativos onde posso unir <span>criatividade, lógica e liderança</span> para tirar ideias do papel e transformá-las em produtos funcionais.
                    </p>
                    
                    <div className="about-stats">
                        <div className="stat-card">
                            <h3>Engenharia de Software</h3>
                            <p>Graduação</p>
                        </div>
                        <div className="stat-card">
                            <h3>3º</h3>
                            <p>Ano</p>
                        </div>
                        <div className="stat-card">
                            <h3>Top 3</h3>
                            <p>FIAP - Next 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;