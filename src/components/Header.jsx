import logo from "../assets/Logo.svg";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className="header__navbar">
          <ul className="header__list">
            <li>Sobre mí</li>
            <li>Proyectos</li>
            <li>Tecnologías</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
