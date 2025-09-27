import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../styles/documentacion.css";

function Documentacion() {
  const docs = [
    { name: "Diploma", img: "/titulo.jpeg" },
    { name: "Cédula (Frente)", img: "/cedula1.jpeg" },
    { name: "Cédula (Dorso)", img: "/cedula2.jpeg" },
    { name: "Licencia de Conducir (Frente)", img: "/libreta1.jpeg" },
    { name: "Licencia de Conducir (Dorso)", img: "/libreta2.jpeg" },
    { name: "Constancia Marfrig", img: "/marfrig.jpeg" },
    { name: "Universidad ORT", img: "/ort.jpeg" },
  ];

  const [show, setShow] = useState(false);
  const [activeDoc, setActiveDoc] = useState(null);

  const handleShow = (doc) => {
    setActiveDoc(doc);
    setShow(true);
  };

  return (
    <div className="card-dark p-4 shadow-sm mb-4 fade-in" id="documentacion">
      <h4 className="fw-bold mb-4">📄 Documentación</h4>
      <div className="row g-3">
        {docs.map((doc, i) => (
          <div
            key={i}
            className="col-6 col-md-4"
            style={{ cursor: "pointer" }}
            onClick={() => handleShow(doc)}
          >
            <div className="doc-card text-center p-2">
              <img
                src={doc.img}
                alt={doc.name}
                className="img-fluid rounded doc-thumb"
              />
              <p className="mt-2">{doc.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para ampliar documento */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        {activeDoc && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{activeDoc.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                src={activeDoc.img}
                alt={activeDoc.name}
                className="img-fluid rounded"
              />
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Documentacion;
