import React, { useState, useEffect } from "react";
import "../styles/profile.css";

function Profile() {
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-dark text-center p-4 shadow-sm mb-4 fade-in">
      <div className={`profile-container ${flipping ? "flipping" : ""}`}>
        <div className="flip-inner">
          {/* Cara frontal */}
          <img
            src={`${import.meta.env.BASE_URL}fotoFormal.PNG`}
            alt="Foto formal"
            className="profile-img formal"
          />
          {/* Cara trasera */}
          <img
            src={`${import.meta.env.BASE_URL}fotoCasual.jpeg`}
            alt="Foto casual"
            className="profile-img casual"
          />
        </div>
      </div>

      <h2 className="fw-bold mt-3">Ramón Suárez</h2>
      <p>
        <span className="icon-fixed">💻</span>{" "}
        <span className="profile-subtitle">Programador</span> {" | "}
        <span className="icon-fixed">🛠️</span>{" "}
        <span className="profile-subtitle">Soporte Técnico</span>
      </p>
    </div>
  );
}

export default Profile;
