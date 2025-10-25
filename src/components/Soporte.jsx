import React from "react";
import "../styles/soporte.css";

function Soporte() {
  return (
    <>
      {/* 🔧 Habilidades primero */}
      <div className="card-dark p-4 shadow-sm mb-4 fade-in" id="soporte">
        <h4 className="fw-bold mb-4">🔧 Habilidades en Soporte Técnico</h4>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="support-item">
              <span className="icon">💻</span>
              <span>Mantenimiento y reparación de PCs</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="support-item">
              <span className="icon">🖨️</span>
              <span>Configuración y reparación de impresoras</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="support-item">
              <span className="icon">⚙️</span>
              <span>Instalación de software y sistemas operativos</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="support-item">
              <span className="icon">📊</span>
              <span>Manejo de planillas Excel administrativas</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="support-item">
              <span className="icon">🔒</span>
              <span>Comunicación con áreas de seguridad informática</span>
            </div>
          </div>
        </div>
      </div>

      {/* 💡 Texto descriptivo debajo */}
      <div className="info-card mb-4 fade-in">
        <div className="info-icon">🛠️</div>
        <h5 className="info-title">Mi experiencia en Soporte Técnico</h5>
        <p className="info-text">
          El soporte técnico no estaba en mis planes iniciales, pero tuve la
          oportunidad de trabajar en una gran empresa como <strong>Marfrig</strong>.
          Allí descubrí este oficio, al que con el tiempo le tomé mucho cariño.
        </p>
        <p className="info-text">
          Me di cuenta de la enorme importancia que tiene dentro de una empresa:
          los equipos fallan, las impresoras se bloquean y los sistemas necesitan
          mantenimiento constante. Aprendí a resolver esos problemas y a valorar
          lo esencial que es este rol para que todo funcione correctamente.
        </p>
      </div>
    </>
  );
}

export default Soporte;
