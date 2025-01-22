import React from "react";

const Hero = () => {
  return (

    <section className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-6xl font-extrabold animate-fadeIn">
        Full-Stack Developer & AI Enthusiast
      </h2>
      <p className="text-lg md:text-2xl mt-4 animate-slideUp">
        Crafting innovative web solutions and AI-driven applications.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-white font-semibold rounded-lg shadow-lg transition ease-in-out delay-150 bg-pink-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300"
      >
        Explore My Work
      </a>
    </section>



  );
};

export default Hero;
