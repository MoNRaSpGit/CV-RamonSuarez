// src/componentes/Contacto.jsx
import "../colores/contacto.css";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="sec contacto">
      <h2 className="t2">Contacto</h2>

      <p className="contacto-texto">
        Si querés comunicarte conmigo,
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
          href="https://www.linkedin.com/in/ram%C3%B3n-suarez-833b83188/"
          className="contacto-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
          <span>LinkedIn / Ramón Suárez</span>
        </a>
      </div>

      <p className="contacto-final">💬 ¡Saludos!</p>
    </section>
  );
}
