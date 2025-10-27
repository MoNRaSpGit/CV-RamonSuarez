// src/componentes/SobreMi.jsx
import "../colores/sobremi.css";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="sec sobremi">
      <h2 className="t2">Sobre mì</h2>

      <p>
        Inicié en el mundo de la informática en <strong>2016</strong>, aprendiendo de forma
        autodidacta a través de videos de YouTube y cursos online. En esa etapa
        adquirí las bases de <strong>HTML, CSS y JavaScript</strong>, y descubrí
        mi interés por el desarrollo web.
      </p>

      <p>
        Más adelante, completé un curso de un año en el <strong>Instituto BIOS</strong>,
        donde aprendí <strong>PHP y MySQL</strong>, comprendiendo por primera vez el
        ciclo completo del desarrollo web: el <em>frontend</em> visual y la lógica
        de <em>backend</em> con bases de datos.
      </p>

      <p>
        En <strong>2022</strong> comencé la carrera de <strong>Analista en Tecnologías de la Información </strong>
        en  <strong>Universidad ORT Uruguay</strong>, la cual sigo cursando actualmente (2022 – 2025).
        Allí reforcé mis conocimientos previos y aprendí nuevas herramientas como <strong>POO con C# .NET</strong>,
        además de incorporar buenas prácticas de programación, eficiencia en algoritmos
        y conceptos de <strong>despliegue web</strong> con <strong>Git</strong> y <strong>Render</strong>.
      </p>


      <p>
        Actualmente desarrollo proyectos web de forma independiente,
        al mismo tiempo que sigo aprendiendo y explorando nuevas tecnologías
        del mundo informático, incluyendo temas como la <strong>ciberseguridad </strong>
        y las tendencias emergentes en desarrollo web.
      </p>


      <div className="timeline">
        <div><strong>2023-Actualidad</strong> – Desarrollador Web </div>
        <div><strong>2022–Actualidad</strong> – Estudiante de Analista en TI | Universidad ORT Uruguay</div>
        <div><strong>2016-217</strong> – Programador PHP Y MQSL | Instituto Bios </div>

      </div>
    </section>
  );
}
