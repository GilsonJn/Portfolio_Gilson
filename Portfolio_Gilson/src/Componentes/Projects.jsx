import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // 1. NOVA IMPORTAÇÃO AQUI!
import '../../public/style/projects.scss';
import { projetosLista } from '../../public/data/projetosData';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { language, t } = useLanguage();
    const carrosselRef = useRef(null);
    const [filtroAtual, setFiltroAtual] = useState('Todos');
    const [projetoSelecionado, setProjetoSelecionado] = useState(null);

    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftPos, setScrollLeftPos] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const sectionRef = useRef(null); 

    // Deteta se o utilizador está a olhar para os projetos
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsSectionVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Atualize o useEffect da animação do carrossel para respeitar o isSectionVisible
    useEffect(() => {
        let animationFrameId;
        const scrollStep = () => {
            // O CARROSSEL AGORA SÓ RODA SE A SECÇÃO ESTIVER NA TELA (isSectionVisible)
            if (isSectionVisible && carrosselRef.current && filtroAtual === 'Todos' && !isHovered && !isDragging && !isMouseDown && !isMobile) {
                carrosselRef.current.scrollLeft += 0.5;
                if (carrosselRef.current.scrollLeft >= carrosselRef.current.scrollWidth / 2) {
                    carrosselRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scrollStep);
        };
        animationFrameId = requestAnimationFrame(scrollStep);
        return () => cancelAnimationFrame(animationFrameId);
    }, [filtroAtual, isHovered, isDragging, isMouseDown, isMobile, isSectionVisible]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const categorias = ['Todos', 'Frontend', 'Backend', 'IoT & Dados'];

    const projetosDoIdioma = projetosLista[language] || projetosLista.pt;

    const projetosFiltrados = filtroAtual === 'Todos'
        ? projetosDoIdioma
        : projetosDoIdioma.filter(projeto => projeto.categoria === filtroAtual);

    const displayProjetos = (filtroAtual === 'Todos' && !isMobile) ? [...projetosFiltrados, ...projetosFiltrados] : projetosFiltrados;

    useEffect(() => {
        let animationFrameId;
        const scrollStep = () => {
            if (carrosselRef.current && filtroAtual === 'Todos' && !isHovered && !isDragging && !isMouseDown && !isMobile) {
                carrosselRef.current.scrollLeft += 0.5;
                if (carrosselRef.current.scrollLeft >= carrosselRef.current.scrollWidth / 2) {
                    carrosselRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scrollStep);
        };
        animationFrameId = requestAnimationFrame(scrollStep);
        return () => cancelAnimationFrame(animationFrameId);
    }, [filtroAtual, isHovered, isDragging, isMouseDown, isMobile]);

    const handleMouseDown = (e) => {
        if (isMobile) return;
        setIsMouseDown(true);
        setIsDragging(false);
        setStartX(e.pageX - carrosselRef.current.offsetLeft);
        setScrollLeftPos(carrosselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        setIsMouseDown(false);
        setIsDragging(false);
        setIsHovered(false);
    };

    const handleMouseUp = () => {
        if (isMobile) return;
        setIsMouseDown(false);
        setTimeout(() => setIsDragging(false), 50);
    };

    const handleMouseMove = (e) => {
        if (isMobile || !isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - carrosselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 5) setIsDragging(true);
        carrosselRef.current.scrollLeft = scrollLeftPos - walk;
    };

    const fecharPainel = () => setProjetoSelecionado(null);

    const getYouTubeEmbedUrl = (url) => {
        if (!url) return null;
        if (url.includes('/embed/')) return url;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}`;
        }
        return url;
    };

    return (
        <section id="projetos" className="projetos-section" ref={sectionRef}>
            <div className="projetos-content">
                <div className="projetos-header">
                    <div className="projetos-title">
                        <h2>{t('projects.title1')} <span>{t('projects.title2')}</span></h2>
                    </div>
                </div>

                <div className="carrossel-wrapper">
                    <div
                        className={`projetos-container ${!isMobile ? 'modo-carrossel' : 'modo-grid'} ${isDragging ? 'arrastando' : ''}`}
                        ref={carrosselRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                    >
                        {displayProjetos.map((projeto, index) => (
                            <div className="projeto-card" key={`${projeto.titulo}-${index}`}>

                                <div className="borda-animada"></div>
                                <div className="card-inner">

                                    <div className="projeto-imagem">
                                        <div className="img-placeholder">
                                            <div className="scanline"></div>
                                            <span className="texto-piscar">{t('projects.noSignal')} </span>
                                        </div>
                                        {projeto.imagemCard && (
                                            <img
                                                src={projeto.imagemCard}
                                                alt={projeto.titulo}
                                                className="img-card-real"
                                                loading="lazy"
                                                width="400"
                                                height="250" />
                                        )}
                                    </div>

                                    <div className="projeto-info">
                                        <h3>{projeto.titulo}</h3>
                                        <p className="desc-mobile">{projeto.descricao}</p>
                                        <div className="projeto-techs">
                                            {projeto.tecnologias.map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="projeto-links">
                                            <button
                                                onClick={(e) => {
                                                    if (isDragging) e.preventDefault();
                                                    else setProjetoSelecionado(projeto);
                                                }}
                                                className="btn-primary"
                                                style={{ width: '100%' }}
                                            >
                                                {t('projects.learnMore')}
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="projetos-filtros">
                    {categorias.map(categoria => (
                        <button
                            key={categoria}
                            className={`btn-filtro ${filtroAtual === categoria ? 'ativo' : ''}`}
                            onClick={() => {
                                setFiltroAtual(categoria);
                                if (carrosselRef.current) carrosselRef.current.scrollLeft = 0;
                            }}
                        >
                            {categoria === 'Todos' ? t('projects.filterAll') : categoria}
                        </button>
                    ))}
                </div>
            </div>

            {/* 2. O CREATE PORTAL APLICADO À SUA MODAL HUD AQUI! */}
            {projetoSelecionado && createPortal(
                <div className="modal-overlay" onClick={fecharPainel}>
                    <div className="modal-hud" onClick={(e) => e.stopPropagation()}>

                        <div className="hud-header">
                            <span className="hud-status">
                                {isMobile ? ` ${t('projects.statusMobile')}` : `${t('projects.statusDesktop')} ${Math.floor(Math.random() * 9000) + 1000}`}
                            </span>
                            <button className="btn-fechar" onClick={fecharPainel}>
                                {isMobile ? '[ X ]' : t('projects.closeBtn')}
                            </button>
                        </div>

                        <div className="hud-body">
                            <div className="hud-titulo-wrapper">
                                <h2 className="hud-titulo">{projetoSelecionado.titulo}</h2>
                                <span className="hud-categoria-tag">{projetoSelecionado.categoria}</span>
                            </div>

                            <div className="hud-display-midia">
                                <div className="scanline"></div>
                                {projetoSelecionado.videoModal ? (
                                    <iframe
                                        src={getYouTubeEmbedUrl(projetoSelecionado.videoModal)}
                                        title={projetoSelecionado.titulo}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="midia-hud"
                                    ></iframe>
                                ) : projetoSelecionado.imagemCard ? (
                                    <img src={projetoSelecionado.imagemCard} alt={projetoSelecionado.titulo} className="midia-hud" />
                                ) : (
                                    <p className="sinal-alerta">{t('projects.noVideo')}</p>
                                )}
                            </div>

                            <div className="hud-specs">
                                <div className="spec-item">
                                    <span className="spec-label">{t('projects.cycle')}</span>
                                    <span className="spec-value">{projetoSelecionado.ano}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">{t('projects.currentStatus')}</span>
                                    <span className="spec-value">{projetoSelecionado.status}</span>
                                </div>
                            </div>

                            <div className="hud-dados">
                                <p className="texto-tecnico"> {t('projects.dataLog')} {projetoSelecionado.detalhesCompletos}</p>

                                <div className="hud-acoes">
                                    {projetoSelecionado.linkGithub !== "#" && (
                                        <a href={projetoSelecionado.linkGithub} target="_blank" rel="noreferrer" className="btn-hud-secundario">
                                            {t('projects.repoBtn')}
                                        </a>
                                    )}
                                    {projetoSelecionado.linkDeploy !== "#" && (
                                        <a href={projetoSelecionado.linkDeploy} target="_blank" rel="noreferrer" className="btn-acessar-sistema">
                                            {t('projects.viewBtn')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>,
                document.body // Injeta a modal direto na base da página!
            )}
        </section>
    );
};

export default Projects;