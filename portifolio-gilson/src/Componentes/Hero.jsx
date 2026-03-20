import React from 'react';
import '../../public/style/hero.scss';
import fotoPerfil from "../../public/img/foto1.svg";
import AnimaçãoOvini from './AnimaçãoOvini';

const Hero = () => {
    return (
        <section id="hero" className="hero">

            <div className="hero-content">
                <div className="text-section">
                    <h1>Gilson Dias</h1>
                    <h2>Desenvolvedor Full-Stack</h2>
                    <p className="impact-phrase">
                        Explorando o universo do código para criar interfaces imersivas e sistemas robustos.
                    </p>
                    <div className="button">
                        <button className="btn-cv"><span>Download CV</span></button>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Hero;