import React from "react";

const projects = [
  {
    title: "HRMS ",
    description: "This project enables us to create a software that streamlines various HR processes within an organization.",
    image: "/assets/hrms.jpg",
  },
  {
    title: "Churn Prediction",
    description: "Implemented a  ml model to predict customer will exit or not using deep learning algorithm, achieving high accuracy",
    image: "/assets/churn.jpg",
  },
];

const Projects = () => {
  return (


    <section id="projects"
    className="py-20 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white cursor-pointer"
>
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-white-700 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
