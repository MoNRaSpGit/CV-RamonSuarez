// src/componentes/Proyectos.jsx
import "../colores/proyectos.css";

export default function Proyectos() {
  const proyectos = [
    {
      nombre: "Tienda Web",
      descripcion:
        "Sistema de gestión de ventas desarrollado para un almacén local. Permite visualizar productos, realizar pedidos, gestionar stock y administrar ventas en tiempo real.",
      sitio: "https://monraspgit.github.io/E-commerce/#/login",
    },
    {
      nombre: "Sitio web jurídico",
      descripcion:
        "Desarrollo de un sitio web informativo y responsive para una abogada independiente. Presenta sus servicios, datos de contacto y una imagen profesional.",
      sitio: "https://claudiabogada.com/",
    },
  ];

  return (
    <section id="proyectos" className="sec">
      <h2 className="t1">Proyectos</h2>

      <div className="proyectos-grid">
        {proyectos.map((p, i) => (
          <div key={i} className="proyecto-card">
            <h3 className="t2">{p.nombre}</h3>
            <p className="lead">{p.descripcion}</p>

            <div className="proyecto-links">
              <a
                href={p.sitio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver sitio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
