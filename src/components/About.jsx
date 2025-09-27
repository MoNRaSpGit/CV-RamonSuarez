import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../styles/cards.css"

function About() {
  const data = [
    { name: "Descanso", value: 8 },
    { name: "Trabajo / Estudio", value: 8 },
    { name: "Entrenamiento / Desarrollo Personal", value: 4 },
    { name: "Distracciones", value: 4 },
  ];
  const COLORS = ["#0d6efd", "#495057", "#6c757d", "#adb5bd"];

  return (
    <>
      {/* Sobre mí + Intenciones */}
      <div className="card-dark p-4 shadow-sm mb-4 fade-in">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="info-card">
              <div className="info-icon">👨‍💻</div>
              <h6 className="info-title">Sobre mí</h6>
              <p className="info-text">
                Mi nombre es <strong>Ramón Suárez</strong>, soy de Tacuarembó, Uruguay. 
                Desde joven trabajé en el negocio familiar, donde desarrollé habilidades 
                de atención al público y organización. 
              </p>
              <p className="info-text">
                En 2016 descubrí mi pasión por la informática, iniciando con cursos online 
                y YouTube. Más tarde me formé en el <strong>Instituto BIOS</strong> como 
                Programador PHP y MySQL, y actualmente curso la carrera de 
                <strong> Analista en Tecnologías de la Información</strong> en la 
                Universidad ORT (desde 2022).
              </p>
              <p className="info-text">
                Mi primera experiencia formal en informática fue en <strong>Marfrig</strong>, 
                donde trabajé en soporte técnico. Luego seguí desarrollándome como programador 
                independiente, creando páginas web y soluciones a medida. 
                Hoy combino mis estudios con proyectos freelance, buscando crecer día a día.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h6 className="info-title">Intenciones profesionales</h6>
              <p className="info-text">
                Mi meta es crecer como <strong>informático integral</strong>, 
                aportando soluciones tecnológicas y facilitando el trabajo de las personas. 
                Me apasiona la <strong>automatización de procesos</strong>, el desarrollo web, 
                el soporte técnico y la ciberseguridad. 
              </p>
              <p className="info-text">
                Busco trabajar con buenas prácticas, en equipo y con aprendizaje constante, 
                contribuyendo al progreso tecnológico de cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Distribución horaria */}
      <div className="card-dark p-4 shadow-sm mb-4 fade-in">
        <div className="eyebrow">Distribución horaria</div>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default About;
