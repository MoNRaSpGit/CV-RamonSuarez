import React, { useState } from "react";
import "../styles/documentacion.css";

function Documentacion() {
  const docs = [
    { name: "Título", file: "titulo.jpeg" },
    { name: "Cédula (frente)", file: "cedula1.jpeg" },
    { name: "Cédula (dorso)", file: "cedula2.jpeg" },
    { name: "Licencia (frente)", file: "libreta1.jpeg" },
    { name: "Licencia (dorso)", file: "libreta2.jpeg" },
    { name: "Marfrig", file: "marfrig.jpeg", special: "landscape" },
    { name: "ORT", file: "ort.jpeg" },
  ];

  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <div className="card-dark p-4 shadow-sm mb-4 fade-in" id="documentacion">
      <h4 className="fw-bold mb-4">📑 Documentación</h4>
      <div className="row g-3">
        {docs.map((doc, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <div className="doc-card p-3 text-center">
              <img
                src={`${import.meta.env.BASE_URL}${doc.file}`}
                alt={doc.name}
                className={`doc-thumb mb-2 ${doc.special || ""}`}
                onClick={() => setSelectedDoc(doc)}
              />
              <p className="mb-0">{doc.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para ampliar */}
      {selectedDoc && (
        <div className="modal-overlay" onClick={() => setSelectedDoc(null)}>
          <div className="modal-content">
            <img
              src={`${import.meta.env.BASE_URL}${selectedDoc.file}`}
              alt={selectedDoc.name}
              className="modal-img"
            />
            <p className="mt-2">{selectedDoc.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Documentacion;
