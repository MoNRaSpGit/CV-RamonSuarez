import { useState } from "react";
import "../colores/navmobile.css";

export default function NavMobile() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="nav-mobile">
      <div className="nav-top">
        <a href="#inicio" className="nav-logo">Ramón Suárez</a>

        <button
          className="nav-burger"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      <nav className="nav-links">
        <a href="#proyectos">Proyectos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#experiencia">Experiencia</a>
      </nav>

      {menuAbierto && (
        <div className="nav-menu">
          <a href="#sobre-mi" onClick={() => setMenuAbierto(false)}>Sobre mí</a>
          <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
        </div>
      )}
    </header>
  );
}
