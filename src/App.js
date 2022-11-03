import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Nav from "./components/MobileNavbar/Nav";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Nav />
    </>
  );
}

export default App;
