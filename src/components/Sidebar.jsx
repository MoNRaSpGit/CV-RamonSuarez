import React from "react";
import "../styles/sidebar.css"; // CSS moderno

function Sidebar({ activeSection, setActiveSection }) {
  const sections = [
    { key: "programacion", icon: "💻", label: "Programación" },
    { key: "soporte", icon: "🛠️", label: "Soporte Técnico" },
    { key: "atencion", icon: "🤝", label: "Atención al Público" },
  ];

  return (
    <div className="sidebar-card p-3 shadow-sm sidebar-sticky">
      <h5 className="sidebar-title">📚 Habilidades</h5>
      <ul className="list-unstyled">
        {sections.map((sec) => (
          <li key={sec.key} className="mb-2">
            <button
              className={`sidebar-btn w-100 ${
                activeSection === sec.key ? "active" : ""
              }`}
              onClick={() => setActiveSection(sec.key)}
            >
              <span className="icon">{sec.icon}</span>
              <span className="label">{sec.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
