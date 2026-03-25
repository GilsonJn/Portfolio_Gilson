import React, { useState } from 'react';
import '../../public/style/about.scss'; 
import fotoPerfil from '../../public/img/foto2.png';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imagemAtual, setImagemAtual] = useState(0); // Estado para o carrossel

    const abrirModal = () => setIsModalOpen(true);
    const fecharModal = () => {
        setIsModalOpen(false);
        setImagemAtual(0); // Reseta o carrossel ao fechar
    };

    // Array com as imagens e placeholders do carrossel
    const imagensCarrossel = [
        { tipo: 'img', src: '/img/projetos/ancora.png', alt: 'Apresentação Rede Âncora' },
        { tipo: 'placeholder', text: 'FOTO_EQUIPE_G3.JPG' },
        { tipo: 'img', src: '/img/projetos/tekoa.png', alt: 'Projeto G3' } // Imagem extra de exemplo
    ];

    // Funções de navegação do carrossel
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
                    <h2>SOBRE <span>MIM</span></h2>
                    <div className="about-image-wrapper">
                        <div className="rocket-icon">🚀</div>
                        <img src={fotoPerfil} alt="Foto de Gilson Dias" />
                        <div className="star-icon">⭐</div>
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
                        <div className="stat-card clickable" onClick={abrirModal}>
                            <h3>Top 3</h3>
                            <p>FIAP - Next 2025</p>
                            <span className="click-hint">Clique para ver mais ❯</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL DA PREMIAÇÃO */}
            {isModalOpen && (
                <div className="about-modal-overlay" onClick={fecharModal}>
                    <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={fecharModal}>[ X ]</button>
                        
                        <h3 className="modal-title">PRÊMIO // NEXT 2025</h3>
                        
                        {/* NOVO CARROSSEL DE IMAGENS */}
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
                            
                            {/* PONTOS DE NAVEGAÇÃO (DOTS) */}
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
                                Conquista do <strong>3º lugar</strong> na feira de tecnologia "Next" da FIAP, 
                                competindo com diversos projetos de alto nível tecnológico.
                            </p>
                            <p>
                                Este prêmio foi o reconhecimento do trabalho árduo da <strong>equipe G3</strong> (junto com Gustavo e Jeferson) no desenvolvimento do projeto <em>"Peça Certa"</em> (App do Mecânico), uma solução inovadora construída em parceria com a <strong>Rede Ancora</strong> para otimizar a distribuição de autopeças.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;