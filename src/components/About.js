import React from "react";

const About = () => {
  return (
    

<section
  id="about"
  className="py-20 bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600 text-white text-center px-6"
>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="mb-6">
        Driven and detail-oriented full-stack developer with 1 year of experience in the MERN stack and Tailwind CSS. Passionate about leveraging AI and Python to build intelligent, scalable, and user-focused applications.        </p>
        <img
          src="/assets/pic.jpg"
          alt="Profile"
          className="rounded-full mx-auto w-40 h-40 object-cover border-4 border-gray-700"
        />
      </div>
    </section>
  );
};

export default About;
