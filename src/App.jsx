import Header from "./components/Header/Header.jsx";
import Introduction from "./components/Introduction/Introduction.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="app__intro-background">
        <Header />
        <Introduction />
      </div>
      <div className="app__main-background">
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
