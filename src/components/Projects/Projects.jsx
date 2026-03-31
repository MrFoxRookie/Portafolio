import image from "../../assets/Autumn.png";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="projects__heading">Proyecto</h2>
      <section className="projects__section">
        <div className="projects__text-container">
          <h3 className="projects__title">News Explorer</h3>
          <p className="projects__subtitle">Descripción</p>
          <p className="projects__text">
            Proyecto full-stack desarrollado como proyecto final del bootcamp de
            Desarrollo Web de TripleTen. Construido con React y Node.js, integra
            una API de búsqueda de noticias que presenta los resultados mediante
            una interfaz basada en tarjetas dinámicas. Además, cuenta con un
            sistema de guardado utilizando una base de datos MongoDB,
            permitiendo a los usuarios gestionar y personalizar su lista de
            noticias de interés tras realizar una autorización de usuario.
          </p>

          <p className="projects__subtitle">Funcionalidades</p>
          <ul className="projects__list">
            <li className="projects__list-elements">
              Frontend: Desarrollado con React para una interfaz moderna y
              dinámica.
            </li>
            <li className="projects__list-elements">
              Backend: Implementado con Node.js y Express para la gestión de
              lógica y peticiones.
            </li>
            <li className="projects__list-elements">
              API Integration: Consumo de API de noticias para la obtención de
              datos en tiempo real.
            </li>
            <li className="projects__list-elements">
              Authentication: Sistema de registro e inicio de sesión con
              persistencia de sesión.
            </li>
            <li className="projects__list-elements">
              Database: Uso de MongoDB para almacenamiento y gestión de datos
              del usuario.
            </li>
            <li className="projects__list-elements">
              Features: Guardado y gestión de noticias favoritas con renderizado
              dinámico.
            </li>
          </ul>

          <p className="projects__subtitle">Aprendizajes clave</p>
          <p className="projects__text">
            Consolidé los conocimientos adquiridos durante el programa al
            desarrollar una aplicación full-stack funcional, integrando frontend
            y backend con diversas tecnologías. Apliqué buenas prácticas como
            código limpio y la metodología BEM para una mejor organización y
            mantenibilidad. Asimismo, implementé un servicio de noticias que
            permite a los usuarios acceder a información relevante y
            personalizar sus listas según sus intereses.
          </p>
        </div>

        <div className="projects__images-container">
          <div className="projects__image-wrapper">
            <img src={image} alt="" />
          </div>
          <div className="projects__image-wrapper">
            <img src={image} alt="" />
          </div>
          <div className="projects__image-wrapper">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
