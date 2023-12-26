import React, { useEffect, useRef } from "react";
import "./loader.css";
import { words } from "./data";
import { introAnimation, collapseWords, progressAnimation } from "./animations";

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(introAnimation(wordGroupsRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1");
  }, [timeline]);
  return (
    <div className="loader_container">
      <div className="container main_container">
        <div className="loader_wrapper">
          <div className="loader_progressWrapper">
            <div className="loader_progress" ref={progressRef}></div>
            <span className="loader_progressNumber" ref={progressNumberRef}>
              0
            </span>
          </div>
          <div className="loader" ref={loaderRef}>
            <div className="loader_words">
              <div className="loader_overlay"></div>
              <div ref={wordGroupsRef} className="loader_wordsGroup">
                {words.map((word, index) => {
                  return (
                    <span key={index} className="loader_word">
                      {word}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
