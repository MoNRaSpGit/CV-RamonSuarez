import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Soporte from "./components/Soporte";
import Atencion from "./components/Atencion";
import Hobbies from "./components/Hobbies";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import Documentacion from "./components/Documentacion";

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
      case "experiencia":
        return <Experiencia />;
      case "educacion":
        return <Educacion />;
      case "documentacion":
        return <Documentacion />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="container-fluid">
      <Navbar setActiveSection={setActiveSection} />

      {/* 🔹 Eliminamos Sidebar, centramos el contenido */}
      <div className="row mt-4 justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">{renderSection()}</div>
      </div>
    </div>
  );
}

export default App;
