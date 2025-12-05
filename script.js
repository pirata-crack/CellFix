// Solo ejecuta si existe el panel de cursos
const cards = document.querySelectorAll(".curso-card[data-curso]");
const detalleTitulo = document.getElementById("detalle-titulo");
const detalleDescripcion = document.getElementById("detalle-descripcion");
const detalleLista = document.getElementById("detalle-lista");
const detalleImagen = document.getElementById("detalle-imagen");

const detallesCursos = {
  basico: {
    titulo: "Curso Básico CellFix",
    imagen: "assets/img/curso-basico.png",
    descripcion:
      "Perfecto para empezar desde cero: conoces las herramientas, aprendes a desarmar y armar equipos con seguridad.",
    puntos: [
      "Duración: 3 meses",
      "Incluye kit de inicio completo",
      "Introducción a tipos de pantallas y componentes",
      "Buenas prácticas y seguridad en el trabajo",
    ],
  },
  intermedio: {
    titulo: "Curso Intermedio CellFix",
    imagen: "assets/img/curso-intermedio.png",
    descripcion:
      "Da el siguiente paso: domina diagnósticos, placas y reparaciones más complejas con casos reales.",
    puntos: [
      "Duración: 3 meses",
      "Diagnóstico de fallas frecuentes",
      "Trabajo con placas y componentes internos",
      "Resolución de casos reales guiados",
    ],
  },
  avanzado: {
    titulo: "Curso Avanzado CellFix",
    imagen: "assets/img/curso-avanzado.png",
    descripcion:
      "Especialízate a nivel técnico: microelectrónica, soldadura avanzada y reparación a nivel componente.",
    puntos: [
      "Duración: 6 meses",
      "Uso de estación de soldado y microscopio",
      "Reparaciones a nivel componente",
      "Preparación para emprendimiento técnico",
    ],
  },
  pack: {
    titulo: "Pack Completo CellFix",
    imagen: "assets/img/curso-pack.png",
    descripcion:
      "Toda la formación CellFix en un solo paquete: de cero a experto, listo para abrir tu propio servicio técnico.",
    puntos: [
      "Duración: 1 año",
      "Incluye básico, intermedio y avanzado",
      "Acceso a todas las actualizaciones",
      "Mentoría y orientación para emprendimiento",
    ],
  },
};

if (cards.length && detalleTitulo && detalleDescripcion && detalleLista && detalleImagen) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const tipo = card.dataset.curso;
      const data = detallesCursos[tipo];
      if (!data) return;

      detalleTitulo.textContent = data.titulo;
      detalleDescripcion.textContent = data.descripcion;
      detalleImagen.src = data.imagen;
      detalleImagen.alt = data.titulo;

      detalleLista.innerHTML = "";
      data.puntos.forEach((p) => {
        const li = document.createElement("li");
        li.textContent = p;
        detalleLista.appendChild(li);
      });

      document
        .querySelector(".curso-detalle")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}
