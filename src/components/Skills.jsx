import React, { useEffect, useState } from "react";
import Profile from "./Profile"; // 👈 importamos el perfil
import "../styles/habilidades.css";

function Skills() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const skills = [
    { name: "HTML", level: 70, color: "#e34c26", icon: "🌐" },
    { name: "CSS", level: 65, color: "#264de4", icon: "🎨" },
    { name: "JavaScript", level: 60, color: "#f0db4f", icon: "⚡" },
    { name: "React", level: 55, color: "#61dafb", icon: "⚛️" },
    { name: "Node.js", level: 50, color: "#68a063", icon: "🟢" },
    { name: "SQL / DB", level: 60, color: "#336791", icon: "🗄️" },
  ];

  return (
    <>
      {/* 👤 Perfil arriba */}
      <Profile />

      {/* Tarjeta informativa */}
      <div className="info-card mb-4 fade-in">
        <div className="info-icon">💡</div>
        <h5 className="info-title">Mi camino en la programación</h5>
        <p className="info-text">
          Inicié en el mundo de la programación en 2016 a través de cursos
          online y aprendizaje autodidacta. Con el tiempo adquirí experiencia en
          HTML, CSS y JavaScript, y me adentré en frameworks como React y
          Node.js.
        </p>
        <p className="info-text">
          Lo que más me apasiona es la posibilidad de crear soluciones útiles y{" "}
          <strong>automatizar procesos que faciliten el trabajo</strong>,
          evitando tareas repetitivas y mejorando la eficiencia.
        </p>
      </div>

      {/* Tarjeta de habilidades */}
      <div className="card-dark p-4 shadow-sm mb-4 fade-in" id="programacion">
        <h4 className="fw-bold mb-4">💻 Habilidades en Programación</h4>
        <div className="row g-3">
          {skills.map((skill, i) => (
            <div key={i} className="col-12">
              <div className="skill-mini">
                <span className="skill-mini-label">
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </span>

                <div className="skill-mini-progress">
                  <div
                    className="skill-bar"
                    style={{
                      width: loaded ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>

                <span className="skill-mini-level">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
