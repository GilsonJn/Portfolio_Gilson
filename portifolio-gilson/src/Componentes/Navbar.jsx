import { useState, useEffect } from "react";
import '../../public/style/navbar.scss';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { language, toggleLanguage, t } = useLanguage();

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

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-wrap">

        {/* LISTA DE LINKS */}
        <ul className={`nav-links ${open ? "is-open" : ""}`}>
          <div className="fundo">
            <li><a href="#sobre" onClick={() => setOpen(false)}>{t('nav.about')}</a></li>
            <li><a href="#projetos" onClick={() => setOpen(false)}>{t('nav.projects')}</a></li>
            <li><a href="#habilidades" onClick={() => setOpen(false)}>{t('nav.skills')}</a></li>
            <li><a href="#contato" onClick={() => setOpen(false)}>{t('nav.contact')}</a></li>
          </div>
        </ul>

        {/* ESPAÇADOR INVISÍVEL */}
        <div className="nav-spacer" />

        {/* SELETOR DE IDIOMA */}
        <div className="nav-lang-minimal" onClick={toggleLanguage} aria-label="Mudar idioma">
          <span className={language === 'pt' ? 'active' : ''}>PT</span>
          <span className="separator">/</span>
          <span className={language === 'en' ? 'active' : ''}>EN</span>
        </div>

        {/* BOTÃO CV (COM A NOVA CLASSE nav-cv-btn) */}
        <div className="button nav-cv-btn">
          <a
            href="/docs/Gilson_CV.pdf"
            download="Gilson_CV.pdf"
            className="btn-cv"
          >
            {/* Como adicionou o botão de CV aqui, certifique-se que tem 'nav.cv' no seu translations.js! */}
            <span>{t('nav.cv')}</span>
          </a>
        </div>

        {/* BOTÃO HAMBÚRGUER */}
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