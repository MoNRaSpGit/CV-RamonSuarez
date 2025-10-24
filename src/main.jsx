import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";                        // 🔹 Componente principal
import "bootstrap/dist/css/bootstrap.min.css";  // ✅ Estilos de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Lógica de Bootstrap (hamburguesa)
import "./styles/global.css";                   // Tu CSS global

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
