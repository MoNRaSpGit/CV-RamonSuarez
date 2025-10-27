import { useEffect, useState } from "react";
import SobreMi from "./SobreMi";
import Experiencia from "./Experiencia";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import { Mail, Instagram, Phone } from "lucide-react";
import "../colores/layoutCV.css";
import "../colores/sidebar.css";
import "../colores/videoModal.css";
import NavMobile from "./NavMobile";

export default function LayoutCV() {
  const [active, setActive] = useState("#sobre-mi");

  // 👁️ Detecta la sección activa al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = `#${section.getAttribute("id")}`;
        }
      });
      if (current && current !== active) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <>
      {/* === NAVBAR MÓVIL (solo visible en pantallas chicas) === */}
      <NavMobile />

      <div className="cv-wrap">
        {/* === SIDEBAR (solo visible en pantallas grandes) === */}
        <aside className="cv-aside">
          <div className="cv-brand">
            <a href="#sobre-mi" className="cv-name">
              Ramón Suárez
            </a>
            <p className="cv-role">Desarrollador Web</p>
          </div>

          {/* === NAV === */}
          <nav className="cv-nav">
            <a
              href="#sobre-mi"
              className={active === "#sobre-mi" ? "active" : ""}
              onClick={() => setActive("#sobre-mi")}
            >
              Sobre mí
            </a>
            <a
              href="#proyectos"
              className={active === "#proyectos" ? "active" : ""}
              onClick={() => setActive("#proyectos")}
            >
              Proyectos
            </a>
            <a
              href="#experiencia"
              className={active === "#experiencia" ? "active" : ""}
              onClick={() => setActive("#experiencia")}
            >
              Experiencia
            </a>
            <a
              href="#habilidades"
              className={active === "#habilidades" ? "active" : ""}
              onClick={() => setActive("#habilidades")}
            >
              Habilidades
            </a>
            <a
              href="#contacto"
              className={active === "#contacto" ? "active" : ""}
              onClick={() => setActive("#contacto")}
            >
              Contacto
            </a>
          </nav>

          {/* === FOOTER === */}
          <div className="cv-footer">
            <a
              href="mailto:ju4nrsuarez@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Correo"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/59892945696"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://www.instagram.com/monra_suarez"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </aside>

        {/* === CONTENIDO PRINCIPAL === */}
        <main className="cv-main">
          <SobreMi />
          <Experiencia />
          <Habilidades />
          <Proyectos />
          <Contacto />
        </main>
      </div>
    </>
  );
}
