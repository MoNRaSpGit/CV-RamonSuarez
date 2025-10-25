import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/navbar.css";

function Navbar({ setActiveSection }) {
  const [showContact, setShowContact] = useState(false);

  const handleShow = () => setShowContact(true);
  const handleClose = () => setShowContact(false);

  // 🔹 Cierra el menú colapsado en móvil tras hacer clic
  const closeMenu = () => {
    const collapse = document.getElementById("navbarNav");
    if (collapse && collapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(collapse, { toggle: true });
      bsCollapse.hide();
    }
  };

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

            {/* 🔹 HABILIDADES (Primero, con submenú) */}
            <li className="nav-item dropdown">
              <button
                className="nav-link btn btn-link dropdown-toggle fw-bold text-info"
                id="habilidadesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Habilidades
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="habilidadesDropdown"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      setActiveSection("programacion");
                      closeMenu();
                    }}
                  >
                    💻 Programación
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      setActiveSection("soporte");
                      closeMenu();
                    }}
                  >
                    🛠️ Soporte Técnico
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      setActiveSection("atencion");
                      closeMenu();
                    }}
                  >
                    🤝 Atención al Público
                  </button>
                </li>
              </ul>
            </li>

            {/* Perfil */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  setActiveSection("perfil");
                  closeMenu();
                }}
              >
                Perfil
              </button>
            </li>

            {/* Experiencia */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  setActiveSection("experiencia");
                  closeMenu();
                }}
              >
                Experiencia
              </button>
            </li>

            {/* Educación */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  setActiveSection("educacion");
                  closeMenu();
                }}
              >
                Educación
              </button>
            </li>

            {/* Documentación */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  setActiveSection("documentacion");
                  closeMenu();
                }}
              >
                Documentación
              </button>
            </li>

            {/* 📞 Contacto (abre modal) */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  handleShow();
                  closeMenu();
                }}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Modal de Contacto */}
      <Modal show={showContact} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>📞 Información de Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Nombre:</strong> Ramón Suárez</p>
          <p><strong>Email:</strong> ju4nrsuarez@gmail.com</p>
          <p><strong>Teléfono:</strong> 092 945 696</p>
          <p><strong>Ubicación:</strong> Tacuarembó, Uruguay</p>
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
