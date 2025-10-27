// src/componentes/Habilidades.jsx
import "../colores/habilidadesCV.css";

export default function Habilidades() {
  return (
    <section id="habilidades" className="sec habilidades">
      <h2 className="t2">Habilidades</h2>

      <div className="hab-grid">
        <div>
          <h3>💻 Técnicas</h3>
          <ul>
            <li>HTML, CSS</li>
            <li>JS, C#</li>
            <li>Node.js, React</li>
            <li>MySQL, SQL Server</li>
            <li>Git, Render</li>
          </ul>
        </div>

        <div>
          <h3>🤝 Blandas</h3>
          <ul>
            <li>Trabajo en equipo</li>
            <li>Atención al cliente</li>
            <li>Resolución de problemas</li>
            <li>Aprendizaje continuo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
