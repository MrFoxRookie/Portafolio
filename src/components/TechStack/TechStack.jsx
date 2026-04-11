import htmlIcon from "../../assets/tech-icons/html.svg";
import cssIcon from "../../assets/tech-icons/css.svg";
import jsIcon from "../../assets/tech-icons/javascript.svg";
import reactIcon from "../../assets/tech-icons/react.svg";
import nodeIcon from "../../assets/tech-icons/nodejs.svg";
import expressIcon from "../../assets/tech-icons/express.svg";
import figmaIcon from "../../assets/tech-icons/figma.svg";
import viteIcon from "../../assets/tech-icons/vite.svg";
import mongoIcon from "../../assets/tech-icons/mongodb.svg";
import gitIcon from "../../assets/tech-icons/git.svg";

function TechStack() {
  return (
    <section className="stack section" id="stack">
      <h2 className="stack__title">Tech Stack</h2>

      <div className="stack__grid">
        <div className="stack__item">
          <img src={htmlIcon} alt="HTML" className="stack__icon" />
          <p className="stack__name">HTML</p>
        </div>

        <div className="stack__item">
          <img src={cssIcon} alt="CSS" className="stack__icon" />
          <p className="stack__name">CSS</p>
        </div>

        <div className="stack__item">
          <img src={jsIcon} alt="JavaScript" className="stack__icon" />
          <p className="stack__name">JavaScript</p>
        </div>

        <div className="stack__item">
          <img src={reactIcon} alt="React" className="stack__icon" />
          <p className="stack__name">React</p>
        </div>

        <div className="stack__item">
          <img src={nodeIcon} alt="Node.js" className="stack__icon" />
          <p className="stack__name">Node.js</p>
        </div>

        <div className="stack__item">
          <img src={expressIcon} alt="Express" className="stack__icon" />
          <p className="stack__name">Express</p>
        </div>

        <div className="stack__item">
          <img src={figmaIcon} alt="Figma" className="stack__icon" />
          <p className="stack__name">Figma</p>
        </div>

        <div className="stack__item">
          <img src={viteIcon} alt="Vite" className="stack__icon" />
          <p className="stack__name">Vite</p>
        </div>

        <div className="stack__item">
          <img src={mongoIcon} alt="MongoDB" className="stack__icon" />
          <p className="stack__name">MongoDB</p>
        </div>

        <div className="stack__item">
          <img src={gitIcon} alt="Git" className="stack__icon" />
          <p className="stack__name">Git</p>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
