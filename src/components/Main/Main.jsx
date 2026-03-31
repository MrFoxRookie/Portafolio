import Introduction from "../Introduction/Introduction";
import About from "../About/About";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";
import Contact from "../Contact/Contact";

function Main() {
  return (
    <>
      <div className="main">
        <Introduction />
        <Projects />
        <About />
        <TechStack />
        <Contact />
      </div>
    </>
  );
}

export default Main;
