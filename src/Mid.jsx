import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Components/Pages/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Resume from "./Components/Pages/Resume/Resume";
import Projects from "./Components/Pages/Projects/Projects";
import Skills from "./Components/Pages/Skills/Skills";
import Contact from "./Components/Pages/Contact/Contact";
import Lenis from "@studio-freight/lenis";
import { ParallaxProvider } from "react-scroll-parallax";
import AnimatedCursor from "react-animated-cursor";

const Mid = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <ParallaxProvider>
      <div className="main">
        <div>
          <div className="mouseFollower">
            <AnimatedCursor
              innerSize={8}
              outerSize={35}
              innerScale={1}
              outerScale={2}
              outerAlpha={0}
              hasBlendMode={true}
              innerStyle={{
                backgroundColor: "var(--dot-color)",
              }}
              outerStyle={{
                border: "3px solid var(--dot-color)",
              }}
            />
          </div>
          <Navbar />
          <Home />
          <About />
          <Resume />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </ParallaxProvider>
  );
};
export default Mid;
