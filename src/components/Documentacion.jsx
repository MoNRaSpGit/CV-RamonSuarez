import React from "react";
import "../styles/documentacion.css";

function Documentacion() {
  return (
    <div className="card-dark p-4 shadow-sm mb-4 fade-in" id="documentacion">
      <h4 className="fw-bold mb-4">📄 Documentación</h4>
      <div className="row g-3">
        <div className="col-6 col-md-4">
          <img
            src={`${import.meta.env.BASE_URL}titulo.jpeg`}
            alt="Título"
            className="doc-img"
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src={`${import.meta.env.BASE_URL}cedula1.jpeg`}
            alt="Cédula frente"
            className="doc-img"
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src={`${import.meta.env.BASE_URL}cedula2.jpeg`}
            alt="Cédula dorso"
            className="doc-img"
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src={`${import.meta.env.BASE_URL}licencia1.jpeg`}
            alt="Licencia frente"
            className="doc-img"
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src={`${import.meta.env.BASE_URL}licencia2.jpeg`}
            alt="Licencia dorso"
            className="doc-img"
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src={`${import.meta.env.BASE_URL}marfrig.jpeg`}
            alt="Marfrig"
            className="doc-img"
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src={`${import.meta.env.BASE_URL}ort.jpeg`}
            alt="ORT"
            className="doc-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Documentacion;
