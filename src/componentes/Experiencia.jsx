import "../colores/experiencia.css";

export default function Experiencia() {
  const experiencias = [
    {
      cargo: "Desarrollador Web",
      empresa: "Proyectos personales / clientes locales",
      periodo: "2023 - Actualidad",
      descripcion:
        "Diseño y desarrollo de aplicaciones web con React, Node.js y MySQL. Implementación de interfaces responsivas, gestión de base de datos y despliegues en servidores.",
      tecnologias: ["React", "Node.js", "MySQL", "Git", "Render"]
    },
    {
      cargo: "Técnico de soporte informático",
      empresa: "Frigorífico Tacuarembó",
      periodo: "Febrero - Agosto 2025",
      descripcion:
        "Mantenimiento de PCs, redes y periféricos. Atención al usuario, resolución de incidencias y soporte a nivel de hardware y software.",
      tecnologias: ["Windows", "Redes", "Atención al usuario"]
    },
    {
      cargo: "Atención al cliente y gestión",
      empresa: "Comercio propio",
      periodo: "2010 - 2020",
      descripcion:
        "Gestión de inventario, cobros y atención al cliente. Introducción al manejo de sistemas de control y registro de ventas.",
      tecnologias: ["Excel", "Gestión de stock", "Comunicación"]
    }
  ];

  return (
    <section id="experiencia" className="sec experiencia">
      <h2 className="t2">Experiencia</h2>

      <div className="exp-lista">
        {experiencias.map((exp, i) => (
          <div key={i} className="exp-item">
            <div className="exp-header">
              <h3>{exp.cargo}</h3>
              <span className="exp-periodo">{exp.periodo}</span>
            </div>
            <h4 className="exp-empresa">{exp.empresa}</h4>
            <p className="exp-descripcion">{exp.descripcion}</p>
            <ul className="exp-tecnologias">
              {exp.tecnologias.map((tec, j) => (
                <li key={j}>{tec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
