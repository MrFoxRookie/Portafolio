import Header from "./components/Header/Header.jsx";
import Introduction from "./components/Introduction/Introduction.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="app__background">
        <Header />
        <Introduction />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
