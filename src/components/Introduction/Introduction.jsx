import aboutImage from "../../assets/about.jpeg";

function Introduction() {
  return (
    <section className="introduction section" id="introduction">
      <div className="introduction__visual-section">
        <img className="introduction__image" src={aboutImage} alt="" />
        <div className="introduction__name-section">
          <h1 className="introduction__title">Zahid Tejeda Amaro</h1>
          <p className="introduction__subtitle">
            Desarrollador Web Junior
          </p>{" "}
        </div>
      </div>
      <p className="introduction__text">
        Soy un desarrollador web motivado por el aprendizaje continuo y la
        innovación que ofrece el mundo de la tecnología hoy en día. Con
        confianza y entusiasmo por dar lo mejor de mi cada dia, mi objetivo es
        incursionar en la industria tecnológica y dejar una huella positiva,
        poniendo en práctica mis habilidades y conocimientos para ofrecer
        soluciones prácticas e innovadoras en cada una de las oportunidades que
        se me presenten.
      </p>
    </section>
  );
}

export default Introduction;
