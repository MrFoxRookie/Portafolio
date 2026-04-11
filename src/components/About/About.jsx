import aboutImage from "../../assets/about.jpeg";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__text-section">
        <h2 className="about__title">Acerca de mí</h2>
        <p className="about__text">
          De la mano de mi <a href="#stack">Tech Stack</a>, enfocado tanto en el
          frontend como en el backend, soy una persona a la que le gustan los
          retos, ya que no solo me ponen a prueba, sino que también me impulsan
          a innovar y crear código que no solo ofrezca soluciones eficientes,
          sino que también brinde a los usuarios experiencias que satisfagan sus
          necesidades.
        </p>

        <p className="about__text">
          Gracias a mi experiencia como comerciante, me considero una persona
          responsable y observadora al momento de comprender las necesidades de
          los clientes, lo cual me motiva a seguir aprendiendo y a desarrollar
          soluciones que reflejen mis habilidades y compromiso en cada proyecto
          en el que participo.
        </p>
      </div>
      <div className="about__image-section">
        <img className="about__image" src={aboutImage} alt="" />
      </div>
    </section>
  );
}

export default About;
