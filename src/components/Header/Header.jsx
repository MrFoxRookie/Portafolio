import logo from "../../assets/Logo.svg";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className="header__navbar">
          <ul className="header__list">
            <li className="header__list-element">Sobre mí</li>
            <li className="header__list-element">Proyectos</li>
            <li className="header__list-element">Tecnologías</li>
            <li className="header__list-element">Contacto</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
