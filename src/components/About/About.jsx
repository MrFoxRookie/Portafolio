import aboutImage from "../../assets/about.jpeg";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__text-section">
        <h2 className="about__title">Acerca de mí</h2>
        <p className="about__text">
          Soy un desarrollador web apasionado por el aprendizaje continuo y
          comprometido con la innovación que la tecnología ofrece hoy en día. Me
          enfoco en la creación de sitios web eficientes y dinámicos que brinden
          a los usuarios experiencias que trasciendan sus pantallas.
        </p>
        <p className="about__text">
          Siempre estoy entusiasmado por nuevos proyectos y retos que pongan a
          prueba mis habilidades, al mismo tiempo que me permiten seguir
          creciendo como desarrollador.
        </p>
      </div>
      <div className="about__image-section">
        <img className="about__image" src={aboutImage} alt="" />
      </div>
    </section>
  );
}

export default About;
