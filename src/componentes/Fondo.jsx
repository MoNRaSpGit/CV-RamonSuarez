import React, { useEffect } from "react";
import "../colores/fondo.css";

export default function Fondo() {
  // 👁️ efecto linterna (sigue el mouse)
  useEffect(() => {
    const handleMove = (e) => {
      document.body.style.setProperty("--mx", `${e.clientX}px`);
      document.body.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div className="fondo-general" />;
}
