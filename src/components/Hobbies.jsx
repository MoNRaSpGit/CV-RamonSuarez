import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/hobbies.css";

function Hobbies() {
  const hobbies = [
    {
      name: "Voleibol",
      icon: "🏐",
      desc: "Inicié en el voleibol en 2010. Me apasiona la estrategia en equipo y el juego en cancha.",
      img: "https://source.unsplash.com/400x250/?volleyball",
    },
    {
      name: "Running",
      icon: "🏃‍♂️",
      desc: "Practico running como hábito saludable. Me gusta correr en la costanera de Tacuarembó.",
      img: "https://source.unsplash.com/400x250/?running",
    },
    {
      name: "Música",
      icon: "🎵",
      desc: "Escuchar música me inspira y me ayuda a concentrarme. Disfruto de varios géneros.",
      img: "https://source.unsplash.com/400x250/?music",
    },
    {
      name: "Gimnasio",
      icon: "💪",
      desc: "Entrenar en el gimnasio me mantiene disciplinado y con energía para mis proyectos.",
      img: "https://source.unsplash.com/400x250/?gym",
    },
  ];

  const [show, setShow] = useState(false);
  const [activeHobby, setActiveHobby] = useState(null);

  const handleShow = (hobby) => {
    setActiveHobby(hobby);
    setShow(true);
  };

  return (
    <div className="card-dark p-4 shadow-sm mb-4 fade-in">
      {/* Nuevo estilo para el título */}
      <div className="eyebrow">Hobbies</div>

      <div className="row g-3">
        {hobbies.map((hobby, i) => (
          <div
            key={i}
            className="col-6 col-md-3"
            onClick={() => handleShow(hobby)}
            style={{ cursor: "pointer" }}
          >
            <div className="hobby-card text-center p-3">
              <div className="hobby-icon">{hobby.icon}</div>
              <p className="mt-2">{hobby.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        {activeHobby && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                {activeHobby.icon} {activeHobby.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={activeHobby.img}
                alt={activeHobby.name}
                className="img-fluid rounded mb-3"
              />
              <p>{activeHobby.desc}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Hobbies;
