import projectFirstImage from "../../assets/projects/project1.1.png";
import projectSecondImage from "../../assets/projects/project1.2.png";
import projectThirdImage from "../../assets/projects/project2.1.png";
import projectFourthImage from "../../assets/projects/project2.2.png";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="projects__heading">Proyectos</h2>
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
            <img src={projectFirstImage} alt="" />
          </div>

          <div className="projects__image-wrapper">
            <img src={projectSecondImage} alt="" />
          </div>
        </div>
      </section>
      <section className="projects__section">
        <div className="projects__text-container">
          <h3 className="projects__title">Around the World</h3>
          <p className="projects__subtitle">Descripción</p>
          <p className="projects__text">
            Proyecto full-stack desarrollado durante mi formación en el stack
            tecnológico de la plataforma. La aplicación fue construida con HTML,
            CSS y JavaScript en el frontend, y con Node.js, Express y MongoDB en
            el backend. Incorpora un sistema de autenticación y registro de
            usuarios mediante JWT, permitiendo a los usuarios gestionar su
            perfil y administrar sus tarjetas de forma dinámica para
            compartirlas con otros usuarios dentro de la plataforma.
          </p>
          <p className="projects__subtitle">Funcionalidades</p>
          <ul className="projects__list">
            <li className="projects__list-elements">
              Autenticación de usuarios mediante JWT (registro e inicio de
              sesión).
            </li>
            <li className="projects__list-elements">
              Gestión de perfil de usuario (edición de información personal).
            </li>
            <li className="projects__list-elements">
              Creación, eliminación y visualización de tarjetas dinámicas.
            </li>
            <li className="projects__list-elements">
              Interacción entre usuarios mediante el compartido de tarjetas.
            </li>
            <li className="projects__list-elements">
              Integración de backend con Node.js, Express y base de datos
              MongoDB.
            </li>
          </ul>

          <p className="projects__subtitle">Aprendizajes clave</p>
          <p className="projects__text">
            Este proyecto me permitió fortalecer mis habilidades en desarrollo
            full-stack, especialmente en la implementación de sistemas de
            autenticación con JWT y la gestión de datos en MongoDB. Integré
            correctamente el frontend con el backend utilizando Node.js y
            Express, aplicando buenas prácticas para asegurar un código limpio,
            escalable y mantenible.
          </p>
        </div>

        <div className="projects__images-container">
          <div className="projects__image-wrapper">
            <img src={projectThirdImage} alt="Proyecto 2" />
          </div>
          <div className="projects__image-wrapper">
            <img src={projectFourthImage} alt="Proyecto 2" />
          </div>
        </div>
      </section>
      {/* <section className="projects__section">
        <div className="projects__text-container">
          <h3 className="projects__title">Proyecto 3</h3>
          <p className="projects__subtitle">Descripción</p>
          <p className="projects__text"></p>

          <p className="projects__subtitle">Funcionalidades</p>
          <ul className="projects__list">
            <li className="projects__list-elements"></li>
            <li className="projects__list-elements"></li>
            <li className="projects__list-elements"></li>
          </ul>

          <p className="projects__subtitle">Aprendizajes clave</p>
          <p className="projects__text"></p>
        </div>

        <div className="projects__images-container">
          <div className="projects__image-wrapper">
            <img src={image} alt="Proyecto 3" />
          </div>
          <div className="projects__image-wrapper">
            <img src={image} alt="Proyecto 3" />
          </div>
          <div className="projects__image-wrapper">
            <img src={image} alt="Proyecto 3" />
          </div>
        </div>
      </section> */}
    </section>
  );
}

export default Projects;
