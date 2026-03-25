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
                    <h1><span>Gilson Dias</span></h1>
                    <h2>{t('hero.role')}</h2>
                    <p className="impact-phrase">
                       {t('hero.description')}
                    </p>
                    <div className="button">
                        {/* Substituímos o <button> por um <a>. 
                          O atributo 'download' força o navegador a baixar o ficheiro 
                          em vez de o tentar abrir num novo separador.
                        */}
                        <a 
                            href="/docs/Gilson_CV.pdf" 
                            download="Gilson_CV.pdf" 
                            className="btn-cv"
                        >
                            <span>{t('hero.cv')}</span>
                        </a>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Hero;