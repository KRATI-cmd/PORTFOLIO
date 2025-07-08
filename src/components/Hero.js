

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Split heading text into characters
    const split = new SplitType(headingRef.current, { types: "chars" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Background fade-in
    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    // Animate each character of heading
    tl.from(
      split.chars,
      {
        opacity: 0,
        y: 40,
        rotateX: 90,
        stagger: 0.05,
        duration: 1,
      },
      "-=0.6"
    );

    // Paragraph fade-up
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.6"
    );

    // Button pop-in with glow effect
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        boxShadow: "0 0 20px #f472b6",
      },
      "-=0.4"
    );

    // Floating heading animation (loop)
    gsap.to(headingRef.current, {
      y: -5,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    // Button pulse effect
    gsap.to(buttonRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white flex flex-col justify-center items-center text-center px-4"
    >
      <h2
        ref={headingRef}
        className="text-4xl md:text-6xl font-extrabold"
      >
        Full-Stack Developer & AI Enthusiast
      </h2>

      <p
        ref={paragraphRef}
        className="text-lg md:text-2xl mt-4"
      >
        Crafting innovative web solutions and AI-driven applications.
      </p>


<a
  ref={buttonRef}
  href="#projects"
  className="mt-8 px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300"
>
  Explore My Work
</a>

    </section>
  );
};

export default Hero;
