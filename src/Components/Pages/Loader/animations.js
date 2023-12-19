import { gsap, Power3 } from "gsap";

export const introAnimation = (wordGroupsRef) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    yPercent: -80,
    duration: 5,
    ease: Power3.easeInOut,
  });

  return tl;
};

export const collapseWords = (wordGroupsRef) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 3,
    ease: Power3.easeInOut,
  });

  return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: Power3.easeInOut,
  })
    .to(
      progressNumberRef.current,
      {
        x: "100vw",
        duration: 5,
        ease: Power3.easeInOut,
      },
      "<"
    )
    .to(
      progressNumberRef.current,
      {
        textContent: "100",
        duration: 5,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    });

  return tl;
};
