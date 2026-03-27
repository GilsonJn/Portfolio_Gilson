import React, { useState } from 'react';
import { createPortal } from 'react-dom'; 
import '../../public/style/about.scss'; 
import fotoPerfil from '../../public/img/foto2.png';
import { useLanguage } from '../context/LanguageContext'; // IMPORTAR O HOOK

const About = () => {
    const { t } = useLanguage(); // EXTRAIR A FUNÇÃO DE TRADUÇÃO
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imagemAtual, setImagemAtual] = useState(0);

    const abrirModal = () => setIsModalOpen(true);
    const fecharModal = () => {
        setIsModalOpen(false);
        setImagemAtual(0);
    };

    const imagensCarrossel = [
        { tipo: 'img', src: '/img/top3/1.jpg' },
        { tipo: 'img', src: '/img/top3/2.jpg' },
        { tipo: 'img', src: '/img/projetos/ancora.png', alt: 'Apresentação Rede Âncora' },
        { tipo: 'placeholder', text: 'FOTO_EQUIPE_G3.JPG' }
    ];

    const proximaImagem = () => {
        setImagemAtual((prev) => (prev === imagensCarrossel.length - 1 ? 0 : prev + 1));
    };

    const imagemAnterior = () => {
        setImagemAtual((prev) => (prev === 0 ? imagensCarrossel.length - 1 : prev - 1));
    };

    return (
        <section id="sobre" className="about-section">
            <div className="about-content">
                <div className="about-title">
                    {/* TÍTULO TRADUZIDO */}
                    <h2>{t('about.title1')} <span>{t('about.title2')}</span></h2>
                    <div className="about-image-wrapper">
                        <div className="rocket-icon">🚀</div>
                        <img src={fotoPerfil} alt="Foto de Gilson Dias" />
                        <div className="star-icon">⭐</div>
                    </div>
                </div>
                <div className="about-text-area">
                    {/* PARÁGRAFOS TRADUZIDOS */}
                    <p>{t('about.p1')}</p>
                    <p>
                        {t('about.p2Start')}
                        <span>{t('about.p2Highlight')}</span>
                        {t('about.p2End')}
                    </p>
                    
                    <div className="about-stats">
                        {/* CARTÕES TRADUZIDOS */}
                        <div className="stat-card">
                            <h3>{t('about.stats.course')}</h3>
                            <p>{t('about.stats.degree')}</p>
                        </div>
                        <div className="stat-card">
                            <h3>{t('about.stats.yearNum')}</h3>
                            <p>{t('about.stats.yearText')}</p>
                        </div>
                        <div className="stat-card clickable" onClick={abrirModal}>
                            <h3>{t('about.stats.awardTitle')}</h3>
                            <p>{t('about.stats.awardSub')}</p>
                            <span className="click-hint">{t('about.stats.clickHint')}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL TRADUZIDO */}
            {isModalOpen && createPortal(
                <div className="about-modal-overlay" onClick={fecharModal}>
                    <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={fecharModal}>[ X ]</button>
                        
                        <h3 className="modal-title">{t('about.modal.title')}</h3>
                        
                        <div className="modal-carrossel">
                            <button className="btn-carrossel prev" onClick={imagemAnterior}>&#10094;</button>

                            <div className="carrossel-track" style={{ transform: `translateX(-${imagemAtual * 100}%)` }}>
                                {imagensCarrossel.map((item, index) => (
                                    <div className="carrossel-slide" key={index}>
                                        {item.tipo === 'img' ? (
                                            <img src={item.src} alt={item.alt} className="modal-img" />
                                        ) : (
                                            <div className="placeholder-team">
                                                <div className="scanline"></div>
                                                <span>{item.text}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <button className="btn-carrossel next" onClick={proximaImagem}>&#10095;</button>
                            
                            <div className="carrossel-dots">
                                {imagensCarrossel.map((_, index) => (
                                    <span 
                                        key={index} 
                                        className={`dot ${imagemAtual === index ? 'ativo' : ''}`}
                                        onClick={() => setImagemAtual(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-text">
                            <p>
                                {/* Misturando texto normal com negrito via código */}
                                {t('about.modal.text1').split('3º lugar').length > 1 ? (
                                    <>Conquista do <strong>3º lugar</strong> na feira de tecnologia "Next" da FIAP, competindo com diversos projetos de alto nível tecnológico.</>
                                ) : (
                                    <>Achieved <strong>3rd place</strong> at the FIAP "Next" technology fair, competing against several high-level technological projects.</>
                                )}
                            </p>
                            <p>
                                {t('about.modal.text2Start')}
                                <strong>{t('about.modal.teamG3')}</strong>
                                {t('about.modal.text2Mid')}
                                <em>{t('about.modal.projectName')}</em>
                                {t('about.modal.text2End')}
                                <strong>{t('about.modal.partner')}</strong>
                                {t('about.modal.text2Final')}
                            </p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default About;