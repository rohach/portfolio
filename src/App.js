import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Intro />
      <About />
    </BrowserRouter>
  );
}

export default App;
