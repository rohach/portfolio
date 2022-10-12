import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Nav from "./components/MobileNavbar/Nav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Contact />
      <Nav />
    </BrowserRouter>
  );
}

export default App;
