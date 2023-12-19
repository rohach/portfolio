import React from "react";
import Loader from "./Components/Pages/Loader/Loader";
import { useState } from "react";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import Mid from "./Mid";

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <>
      {loaderFinished ? <Mid /> : <Loader timeline={timeline} />}

      {/* <Loader timeline={timeline} /> */}
    </>
  );
}

export default App;
