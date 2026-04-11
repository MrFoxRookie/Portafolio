import About from "../About/About";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";
import Contact from "../Contact/Contact";

function Main() {
  return (
    <>
      <div className="main">
        <About />
        <div className="main__divider"></div>
        <Projects />
        <div className="main__divider"></div>

        <TechStack />
        <div className="main__divider"></div>
        <Contact />
        <div className="main__divider"></div>
      </div>
    </>
  );
}

export default Main;
