
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "../assets/pic.jpg"; // Adjust the path as necessary
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%", // animation starts when section is 80% into view
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.6"
      );
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600 text-white text-center px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h3 ref={headingRef} className="text-3xl font-bold mb-6">
          About Me
        </h3>

        <p ref={paragraphRef} className="mb-6 text-lg">
          Driven and detail-oriented full-stack developer with 1 year of
          experience in the MERN stack and Tailwind CSS. Passionate about
          leveraging AI and Python to build intelligent, scalable, and
          user-focused applications.
        </p>

        <img
          ref={imageRef}
          src={profileImg} // ✅ Correct path if placed in public/assets/pic.jpg
          alt="Profile"
          className="rounded-full mx-auto w-40 h-40 object-cover border-4 border-gray-700 shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
