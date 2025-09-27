import React from "react";
import Profile from "./Profile"; // 👈 importamos el perfil
import "../styles/atencion.css";

function Atencion() {
  return (
    <>
      {/* Perfil arriba */}
      <Profile />

      {/* Tarjeta informativa */}
      <div className="info-card mb-4 fade-in">
        <div className="info-icon">🤝</div>
        <h5 className="info-title">Mi experiencia en Atención al Público</h5>
        <p className="info-text">
          Desde joven trabajé en el negocio familiar, donde desarrollé mis
          primeras habilidades de atención al público. Esa experiencia me dio
          una base sólida en el trato con personas, independientemente del rol:
          ya sea en un almacén, en soporte técnico o como programador.
        </p>
        <p className="info-text">
          Gracias a ello aprendí la importancia de la amabilidad, la empatía y
          la buena comunicación. También entendí que no todos los usuarios son
          técnicos, y que explicar con claridad y respeto hace toda la
          diferencia.
        </p>
      </div>

      {/* Tarjeta de habilidades */}
      <div className="card-dark p-4 shadow-sm mb-4 fade-in" id="atencion">
        <h4 className="fw-bold mb-4">🙋‍♂️ Habilidades en Atención al Público</h4>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="atencion-item">
              <span className="icon">🤝</span>
              <span>Atención personalizada al cliente</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="atencion-item">
              <span className="icon">🛒</span>
              <span>Manejo de caja y ventas</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="atencion-item">
              <span className="icon">📦</span>
              <span>Control de stock e inventario</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="atencion-item">
              <span className="icon">📋</span>
              <span>Organización de productos</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="atencion-item">
              <span className="icon">⚡</span>
              <span>Resolución rápida de problemas</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Atencion;
