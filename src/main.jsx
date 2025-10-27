import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./colores/fondo.css";
import "./colores/base.css"; // si está vacío, no pasa nada

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
