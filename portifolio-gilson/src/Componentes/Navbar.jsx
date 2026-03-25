import { useState, useEffect } from "react";
import '../../public/style/navbar.scss';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {

  // Estado para saber se a página rolou para baixo
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { language, toggleLanguage, t } = useLanguage();

  // Efeito para detetar o scroll da página e ativar o "Vidro"
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

  // Fecha o menu ao redimensionar a tela / mudar a orientação do telemóvel
  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-wrap">

        {/* LISTA DE LINKS */}
        <ul className={`nav-links ${open ? "is-open" : ""}`}>
          <div className="fundo">
            {/* SUBSTITUIR OS TEXTOS PELA FUNÇÃO t() */}
            <li><a href="#sobre" onClick={() => setOpen(false)}>{t('nav.about')}</a></li>
            <li><a href="#projetos" onClick={() => setOpen(false)}>{t('nav.projects')}</a></li>
            <li><a href="#habilidades" onClick={() => setOpen(false)}>{t('nav.skills')}</a></li>
            <li><a href="#contato" onClick={() => setOpen(false)}>{t('nav.contact')}</a></li>
          </div>
        </ul>

        {/* ESPAÇADOR INVISÍVEL: Empurra o menu para a esquerda e o idioma para a direita */}
        <div className="nav-spacer" />

        {/* SELETOR DE IDIOMA */}
        <div className="nav-lang-minimal" onClick={toggleLanguage} aria-label="Mudar idioma">
            <span className={language === 'pt' ? 'active' : ''}>PT</span>
            <span className="separator">/</span>
            <span className={language === 'en' ? 'active' : ''}>EN</span>
        </div>

        {/* BOTÃO HAMBÚRGUER (Apenas Mobile) */}
        <button
          className="burger"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

      </nav>
    </header>
  );
}

export default Navbar;