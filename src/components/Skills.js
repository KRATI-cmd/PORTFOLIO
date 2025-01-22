import React from "react";

const skills = [
  "MERN ",
  "Tailwind CSS",
  "C++",
  "Python",
  "Kafka",
  "SQL",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-400 via-teal-400 to-blue-600  text-black text-center">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 border border-white-700 rounded-lg shadow-md hover:scale-105 transition duration-300 group cursor-pointer"
            >
              <span className="text-xl font-semibold group-hover:text-whites-300 ">
                {skill}
              </span>
              <div className="mt-2 h-1 w-full bg-gradient-to-r from-gray-700 to-white rounded-full group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-700"></div>
            </div>


          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
