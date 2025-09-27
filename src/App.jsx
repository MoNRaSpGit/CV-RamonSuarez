import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Soporte from "./components/Soporte";
import Atencion from "./components/Atencion";
import Hobbies from "./components/Hobbies"; // 👈 importamos Hobbies
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion"; // 👈 nuevo
import Documentacion from "./components/Documentacion"; // 👈 importamos documentación


function App() {
  const [activeSection, setActiveSection] = useState("perfil");

  const renderSection = () => {
    switch (activeSection) {
      case "perfil":
        return (
          <>
            <Profile />
            <About />
            <Hobbies />
          </>
        );
      case "programacion":
        return <Skills />;
      case "soporte":
        return <Soporte />;
      case "atencion":
        return <Atencion />;
      case "experiencia":   // 👈 nuevo
        return <Experiencia />;
      case "educacion": // 👈 agregamos educación  
      return <Educacion />;    
      case "documentacion":   // 👈 nuevo
        return <Documentacion />        
      default:
        return <Profile />;
    }
  };

  return (
    <div className="container-fluid">
      <Navbar setActiveSection={setActiveSection} />


      <div className="row mt-4">
        {/* Sidebar a la izquierda */}
        <div className="col-md-4">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

        </div>

        {/* Contenido dinámico a la derecha */}
        <div className="col-md-8">{renderSection()}</div>
      </div>
    </div>
  );
}

export default App;
