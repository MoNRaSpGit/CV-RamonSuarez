import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Navbar({ setActiveSection }) {
  const [showContact, setShowContact] = useState(false);

  const handleShow = () => setShowContact(true);
  const handleClose = () => setShowContact(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <a className="navbar-brand fw-bold" href="#">
          CV Ramón Suárez
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Contacto */}
            <li className="nav-item me-2">
              <Button
                variant="success"
                className="fw-bold"
                onClick={handleShow}
              >
                📞 Contacto
              </Button>
            </li>

            {/* Perfil */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setActiveSection("perfil")}
              >
                Perfil
              </button>
            </li>

            {/* Experiencia */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setActiveSection("experiencia")}
              >
                Experiencia
              </button>
            </li>

            {/* Educación */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setActiveSection("educacion")}
              >
                Educación
              </button>
            </li>

            {/* Documentación */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setActiveSection("documentacion")}
              >
                Documentación
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Modal de Contacto */}
      <Modal show={showContact} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>📞 Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Email:</strong> ju4nrsuarez@gmail.com</p>
          <p><strong>Celular:</strong> 092 945 696</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbar;
