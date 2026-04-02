import githubIcon from "../../assets/contact-icons/github.svg";
import linkedinIcon from "../../assets/contact-icons/linkedin.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <a href="https://github.com/MrFoxRookie">
          <img
            src={githubIcon}
            alt="Icono de GitHub"
            className="footer__icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/zahid-tejeda-amaro/">
          <img
            src={linkedinIcon}
            alt="Icono de Linkedin"
            className="footer__icon"
          />
        </a>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Zahid Tejeda Amaro. Todos los derechos
          reservados.
        </p>
      </div>
    </>
  );
}

export default Footer;
