import React from "react";
import "../styles/hobbies.css";

function Hobbies() {
  const hobbies = [
    {
      name: "Voleibol",
      icon: "🏐",
      desc: "Inicié en el voleibol en 2010. Me apasiona la estrategia en equipo y el juego en cancha.",
    },
    {
      name: "Running",
      icon: "🏃‍♂️",
      desc: "Practico running como hábito saludable. Me gusta correr en la costanera de Tacuarembó.",
    },
    {
      name: "Música",
      icon: "🎵",
      desc: "Escuchar música me inspira y me ayuda a concentrarme. Disfruto de varios géneros.",
    },
    {
      name: "Gimnasio",
      icon: "💪",
      desc: "Entrenar en el gimnasio me mantiene disciplinado y con energía para mis proyectos.",
    },
  ];

  return (
    <div className="card-dark p-4 shadow-sm mb-4 fade-in">
      {/* Título */}
      <div className="eyebrow">Hobbies</div>

      <div className="row g-3">
        {hobbies.map((hobby, i) => (
          <div key={i} className="col-6 col-md-3">
            <div className="hobby-card text-center p-3">
              <div className="hobby-icon">{hobby.icon}</div>
              <p className="mt-2 fw-bold">{hobby.name}</p>
              <small className="text-muted">{hobby.desc}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
