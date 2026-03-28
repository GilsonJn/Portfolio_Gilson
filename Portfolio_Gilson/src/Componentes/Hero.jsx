import React from 'react';
import '../../public/style/hero.scss';
import AnimaçãoOvini from './AnimaçãoOvini';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {

    const { t } = useLanguage();

    return (
        <section id="hero" className="hero">


            <div className="hero-content">
                <div className="text-section">
                    {/* NOVA ESTRUTURA PARA ABDUÇÃO */}
                    <div className="abduction-container">
                        <AnimaçãoOvini />
                        <h1><span>Gilson Dias</span></h1>
                    </div>
                    <h2>{t('hero.role')}</h2>
                </div>
            </div>

        </section >
    )
}

export default Hero;