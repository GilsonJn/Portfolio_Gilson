import { useState, useEffect } from "react";
import '../../public/style/navbar.scss';

function Navbar() {

  const [open, setOpen] = useState(false);

  // Fecha o menu ao redimensionar / mudar orientação
  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="navbar">
      <nav className="nav-wrap">

        <ul className={`nav-links ${open ? "is-open" : ""}`}>
          <div className="fundo">
            <li><a href="#sobre">Sobre mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contato">Contato</a></li>
          </div>
        </ul>

        <div className="nav-spacer" />

        <div className="nav-lang">
          <span>ENG ⌄</span>
        </div>

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