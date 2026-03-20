import React, { useRef, useState, useEffect } from 'react';
import '../../public/style/projects.scss';
import { projetosLista } from '../../public/data/projetosData';

const Projects = () => {
    const carrosselRef = useRef(null);
    const [filtroAtual, setFiltroAtual] = useState('Todos');
    const [projetoSelecionado, setProjetoSelecionado] = useState(null);

    // Estados para o controlo do arrasto manual (Mouse Drag)
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftPos, setScrollLeftPos] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const categorias = ['Todos', 'Frontend', 'Backend', 'IoT & Dados'];

    // Filtra os projetos consoante a categoria
    const projetosFiltrados = filtroAtual === 'Todos' ? projetosLista : projetosLista.filter(projeto => projeto.categoria === filtroAtual);

    // Se estiver em "Todos", duplicamos a lista para o loop infinito funcionar perfeitamente
    const displayProjetos = (filtroAtual === 'Todos' && !isMobile) ? [...projetosFiltrados, ...projetosFiltrados] : projetosFiltrados;

    /* --- MOTOR DE AUTO-SCROLL (Apenas Desktop) --- */
    useEffect(() => {
        let animationFrameId;
        const scrollStep = () => {
            // Adicionado !isMobile para garantir que não roda no telemóvel
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

    /* --- EVENTOS DE RATO (Apenas ativados se não for mobile) --- */
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
        // Se já for um link de embed, retorna ele mesmo
        if (url.includes('/embed/')) return url;
        
        // Expressão regular para encontrar o ID do vídeo (funciona com youtu.be, watch?v=, etc)
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        
        // Se encontrou o ID (que tem sempre 11 caracteres), monta o link certinho
        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}`;
        }
        return url; // Retorna o original se falhar
    };

    return (
        <section id="projetos" className="projetos-section">
            <div className="projetos-content">
                <div className="projetos-header">
                    <div className="projetos-title">
                        <h2>Meus <span>Projetos</span></h2>
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
                                <div className="projeto-imagem">
                                    
                                    {/* 1. O PLACEHOLDER FICA SEMPRE AQUI (Fica por trás da imagem se ela existir) */}
                                    <div className="img-placeholder">
                                        <span className="texto-piscar">Sinal Perdido ) :</span>
                                    </div>

                                    {/* 2. A IMAGEM REAL (No desktop começa invisível e aparece no hover, no mobile já aparece) */}
                                    {projeto.imagemCard && (
                                        <img src={projeto.imagemCard} alt={projeto.titulo} className="img-card-real" />
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
                                            // Lógica final: Só abre o modal se NÃO estiver a arrastar
                                            onClick={(e) => {
                                                if (isDragging) {
                                                    e.preventDefault();
                                                } else {
                                                    setProjetoSelecionado(projeto);
                                                }
                                            }} 
                                            className="btn-primary" 
                                            style={{width: '100%'}}
                                        >
                                            Saiba mais
                                        </button>
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
                            {categoria}
                        </button>
                    ))}
                </div>
            </div>

            {/* MODAL HUD */}
            {projetoSelecionado && (
                <div className="modal-overlay" onClick={fecharPainel}>
                    <div className="modal-hud" onClick={(e) => e.stopPropagation()}>
                        
                        <div className="hud-header">
                            <span className="hud-status">● CONEXÃO ESTABELECIDA // ID_PROJETO: {Math.floor(Math.random() * 9000) + 1000}</span>
                            <button className="btn-fechar" onClick={fecharPainel}>[ ENCERRAR ]</button>
                        </div>

                        <div className="hud-body">
                            <div className="hud-titulo-wrapper">
                                <h2 className="hud-titulo">{projetoSelecionado.titulo}</h2>
                                <span className="hud-categoria-tag">{projetoSelecionado.categoria}</span>
                            </div>
                            
                            {/* RENDERIZAÇÃO DINÂMICA DO VÍDEO (YOUTUBE) OU IMAGEM NO MODAL */}
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
                                    <p className="sinal-alerta">SEM SINAL DE VÍDEO // AGUARDANDO UPLOAD</p>
                                )}
                            </div>

                            <div className="hud-specs">
                                <div className="spec-item">
                                    <span className="spec-label">/// CICLO</span>
                                    <span className="spec-value">{projetoSelecionado.ano}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">/// STATUS_ATUAL</span>
                                    <span className="spec-value">{projetoSelecionado.status}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">/// OPERADORES</span>
                                    <span className="spec-value">{projetoSelecionado.equipe}</span>
                                </div>
                            </div>

                            <div className="hud-dados">
                                <p className="texto-tecnico"> REGISTRO_DE_DADOS: {projetoSelecionado.detalhesCompletos}</p>
                                
                                <div className="hud-acoes">
                                    <a href={projetoSelecionado.linkGithub} target="_blank" rel="noreferrer" className="btn-hud-secundario">
                                        [ REPOSITÓRIO_GIT ]
                                    </a>
                                    <a href={projetoSelecionado.linkDeploy} target="_blank" rel="noreferrer" className="btn-acessar-sistema">
                                        INICIAR SISTEMA ❯
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;