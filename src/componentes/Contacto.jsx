// src/componentes/Contacto.jsx
import "../colores/contacto.css";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="sec contacto">
      <h2 className="t2">Contacto</h2>
      <p className="contacto-texto">
        Si querés comunicarte conmigo para consultas, colaboraciones o proyectos,
        podés hacerlo a través de los siguientes medios:
      </p>

      <div className="contacto-links">
        <a
          href="mailto:ju4nrsuarez@gmail.com"
          className="contacto-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={20} />
          <span>ju4nrsuarez@gmail.com</span>
        </a>

        <a
          href="https://wa.me/59892945696"
          className="contacto-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone size={20} />
          <span>+598 92 945 696</span>
        </a>

        <a
          href="https://www.instagram.com/monra_suarez"
          className="contacto-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={20} />
          <span>@monra_suarez</span>
        </a>
      </div>

      <p className="contacto-final">💬 ¡Gracias por visitar mi portafolio!</p>
    </section>
  );
}
