import React from "react";


function Experiencia() {
  return (
    <>
    

      {/* Experiencia laboral */}
      <div className="card-dark p-4 shadow-sm mb-4 fade-in" id="experiencia">
        <h4 className="fw-bold mb-4">💼 Experiencia Laboral</h4>

        {/* 🧊 Frigorífico Tacuarembó */}
        <div className="info-card mb-3">
          <h6 className="info-title">
            Ene 2025 - Ago 2025 · Soporte Técnico · Frigorífico Tacuarembó (Grupo Marfrig)
          </h6>
          <p className="info-text">
            Desempeñé tareas de <strong>mantenimiento y reparación</strong> de
            PCs, impresoras y sistemas. Brindé atención directa a usuarios,
            garantizando que la producción no se detuviera.
          </p>
          <p className="info-text">
            También estuve a cargo de tareas administrativas mediante{" "}
            <strong>planillas Excel</strong>, llevando control de usuarios,
            contraseñas, periféricos y recursos tecnológicos.
          </p>
          <p className="info-text">
            Este trabajo me enseñó a{" "}
            <strong>trabajar bajo presión</strong>, ya que cualquier falla podía
            detener la producción, y la{" "}
            <strong>importancia del trabajo en equipo</strong>, porque resolver
            problemas críticos en conjunto siempre resultaba más efectivo que
            hacerlo en solitario.
          </p>
          <p className="info-text">
            Gracias a esta experiencia aprendí a valorar aún más el{" "}
            <strong>rol del soporte técnico</strong> dentro de una empresa y me
            abrió las puertas al mundo de la{" "}
            <strong>seguridad informática</strong>, despertando mi interés por
            explorar esa área en el futuro.
          </p>
        </div>

        {/* 🌐 Desarrollo web freelance */}
        <div className="info-card mb-3">
          <h6 className="info-title">2022 - Actualidad · Desarrollo Web</h6>
          <p className="info-text">
            Desarrollo de <strong>aplicaciones y páginas web a medida</strong>{" "}
            como programador freelance. Creación de soluciones modernas con
            tecnologías como <em>React, Node.js y SQL</em>. Aprendí la
            importancia de la <strong>automatización de procesos</strong> para
            reducir tareas repetitivas y mejorar la eficiencia de negocios
            locales.
          </p>
        </div>

        {/* 🏪 Atención al público */}
        <div className="info-card mb-3">
          <h6 className="info-title">2010 - 2022 · Atención al Público</h6>
          <p className="info-text">
            Atención al público en un <strong>almacén local</strong>. Durante
            más de una década desarrollé habilidades clave en el{" "}
            <strong>trato con clientes</strong>, gestión de ventas y
            administración de caja. Esta etapa me permitió adquirir una base
            sólida en comunicación, amabilidad y organización, que sigo aplicando
            en todos mis roles profesionales.
          </p>
        </div>
      </div>
    </>
  );
}

export default Experiencia;
