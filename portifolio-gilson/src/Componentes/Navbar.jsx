import { useState, useEffect } from "react";
import '../../public/style/navbar.scss';

function Navbar() {

  // Estado para saber se a página rolou para baixo
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            {/* Adicionado o onClick para fechar o menu mobile ao clicar num link */}
            <li><a href="#sobre" onClick={() => setOpen(false)}>Sobre mim</a></li>
            <li><a href="#projetos" onClick={() => setOpen(false)}>Projetos</a></li>
            <li><a href="#habilidades" onClick={() => setOpen(false)}>Habilidades</a></li>
            <li><a href="#contato" onClick={() => setOpen(false)}>Contato</a></li>
          </div>
        </ul>

        {/* ESPAÇADOR INVISÍVEL: Empurra o menu para a esquerda e o idioma para a direita */}
        <div className="nav-spacer" />

        {/* SELETOR DE IDIOMA */}
        <div className="nav-lang">
          <span>ENG ⌄</span>
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