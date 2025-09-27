import React from "react";
import Profile from "./Profile"; // 👈 mantenemos el perfil arriba

function Educacion() {
  return (
    <>
      {/* Perfil siempre arriba */}
      <Profile />

      {/* Sección Educación */}
      <div className="card-dark p-4 shadow-sm mb-4 fade-in" id="educacion">
        <h4 className="fw-bold mb-4">🎓 Educación</h4>

        {/* Bachillerato */}
        <div className="info-card mb-3">
          <h6 className="info-title">2009 - 2013 · Bachillerato Diversificado</h6>
          <p className="info-text">
            Culminé el <strong>Bachillerato completo</strong> en 2013, dentro de
            la orientación común. Esta etapa me permitió adquirir una base
            sólida en distintas áreas del conocimiento y desarrollar hábitos de{" "}
            <strong>disciplina y estudio constante</strong>.
          </p>
        </div>

        {/* Curso de Programación */}
        <div className="info-card mb-3">
          <h6 className="info-title">2016 · Curso de Programación PHP & MySQL</h6>
          <p className="info-text">
            Realicé un curso intensivo de{" "}
            <strong>Programación en PHP y bases de datos MySQL</strong> en el
            Instituto BIOS. Este fue mi primer acercamiento formal al desarrollo
            de software y marcó el inicio de mi camino en la{" "}
            <strong>programación web</strong>.
          </p>
        </div>

        {/* Universidad ORT */}
        <div className="info-card mb-3">
          <h6 className="info-title">2022 - Actualidad · Universidad ORT Uruguay</h6>
          <p className="info-text">
            Actualmente curso la carrera de{" "}
            <strong>Analista en Tecnologías de la Información</strong> en la
            Universidad ORT. Este proceso me ha permitido ampliar mis
            conocimientos en <em>desarrollo de software, bases de datos,
            ciberseguridad y trabajo en equipo</em>, con una visión más integral
            de la informática como profesión.
          </p>
        </div>
      </div>
    </>
  );
}

export default Educacion;
