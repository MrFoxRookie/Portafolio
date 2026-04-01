import logo from "../../assets/Logo.svg";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className="header__navbar">
          <ul className="header__list">
            <li className="header__list-element">
              <a className="header__link" href="#about">
                Sobre mí
              </a>
            </li>
            <li className="header__list-element">
              <a className="header__link" href="#projects">
                Proyectos
              </a>
            </li>
            <li className="header__list-element">
              <a className="header__link" href="#technologies">
                Tecnologías
              </a>
            </li>
            <li className="header__list-element">
              <a className="header__link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
