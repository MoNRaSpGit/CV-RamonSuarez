import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'                       // 🔹 import del componente principal
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap global
import './styles/global.css'                  // Tu CSS global

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
