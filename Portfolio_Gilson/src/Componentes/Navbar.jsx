import { useState, useEffect } from "react";
import '../../public/style/navbar.scss';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  // ESTADOS DO EFEITO DE VELOCIDADE DA LUZ
  const [isWarping, setIsWarping] = useState(false);
  const [stars, setStars] = useState([]);

  const { language, toggleLanguage, t } = useLanguage();

  // Gera as coordenadas das estrelas ao carregar
  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map(() => ({
      angle: Math.random() * 360,
      delay: Math.random() * 0.2, // Atraso na largada
      distance: Math.random() * 50 + 20 // Distância do centro
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // FUNÇÃO DE TELETRANSPORTE SEGURO
  const handleWarpJump = (e, targetId) => {
    e.preventDefault(); // Impede o salto duro padrão
    setOpen(false); // Fecha o menu
    setIsWarping(true); // Acende as luzes e as estrelas

    setTimeout(() => {
      // Procura a secção pelo ID (ex: "#sobre")
      const section = document.querySelector(targetId);
      if (section) {
        // Calcula a posição exata descontando a altura da Navbar (80px)
        const topPosition = section.getBoundingClientRect().top + window.scrollY - 80;
        
        // Pula instantaneamente enquanto o ecrã está cego pela luz
        window.scrollTo({
          top: topPosition,
          behavior: 'instant' 
        });
      }
    }, 400); // 400ms é o momento do clarão máximo

    // Desliga a simulação após 1 segundo
    setTimeout(() => {
      setIsWarping(false);
    }, 1000);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-wrap">

          {/* LISTA DE LINKS COM O SALTO APLICADO */}
          <ul className={`nav-links ${open ? "is-open" : ""}`}>
            <div className="fundo">
              <li><a href="#sobre" onClick={(e) => handleWarpJump(e, '#sobre')}>{t('nav.about')}</a></li>
              <li><a href="#projetos" onClick={(e) => handleWarpJump(e, '#projetos')}>{t('nav.projects')}</a></li>
              <li><a href="#habilidades" onClick={(e) => handleWarpJump(e, '#habilidades')}>{t('nav.skills')}</a></li>
              <li><a href="#contato" onClick={(e) => handleWarpJump(e, '#contato')}>{t('nav.contact')}</a></li>
            </div>
          </ul>

          <div className="nav-spacer" />

          <div className="nav-lang-minimal" onClick={toggleLanguage} aria-label="Mudar idioma">
            <span className={language === 'pt' ? 'active' : ''}>PT</span>
            <span className="separator">/</span>
            <span className={language === 'en' ? 'active' : ''}>EN</span>
          </div>

          <div className="button nav-cv-btn">
            <a href="/docs/Gilson_CV.pdf" download="Gilson_CV.pdf" className="btn-cv">
              <span>{t('nav.cv')}</span>
            </a>
          </div>

          <button className="burger" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
            <span />
            <span />
            <span />
          </button>

        </nav>
      </header>

      {/* RENDERIZAÇÃO DO EFEITO HIPERESPAÇO */}
      <div className={`warp-container ${isWarping ? 'active' : ''}`}>
        <div className="warp-center">
          {stars.map((star, i) => (
            <div
              key={i}
              className="star-line"
              style={{
                '--angle': `${star.angle}deg`,
                '--delay': `${star.delay}s`,
                '--dist': `${star.distance}px`
              }}
            ></div>
          ))}
        </div>
        <div className="warp-flash"></div>
      </div>
    </>
  );
}

export default Navbar;