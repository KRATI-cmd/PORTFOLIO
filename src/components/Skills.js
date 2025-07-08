

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const skills = [
//   "MERN",
//   "Tailwind CSS",
//   "C++",
//   "Python",
//   "Kafka",
//   "SQL",
// ];

// const Skills = () => {
//   const headingRef = useRef(null);
//   const skillRefs = useRef([]);

//   // Create ref for each skill card
//   skillRefs.current = [];

//   const addToSkillRefs = (el) => {
//     if (el && !skillRefs.current.includes(el)) {
//       skillRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     // Animate heading
//     gsap.fromTo(
//       headingRef.current,
//       { opacity: 0, y: -40 },
//       { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
//     );

//     // Animate skill cards with stagger
//     gsap.fromTo(
//       skillRefs.current,
//       { opacity: 0, y: 30, scale: 0.9 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "back.out(1.7)",
//         delay: 0.5,
//       }
//     );
//   }, []);

//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gradient-to-br from-blue-400 via-teal-400 to-blue-600 text-black text-center"
//     >
//       <div className="max-w-5xl mx-auto px-4">
//         <h3
//           ref={headingRef}
//           className="text-3xl font-bold mb-12 text-white drop-shadow-md"
//         >
//           Skills
//         </h3>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               ref={addToSkillRefs}
//               className="p-6 border border-white/30 rounded-xl shadow-xl bg-white/20 backdrop-blur-lg hover:scale-105 transform transition duration-300 group cursor-pointer"
//             >
//               <span className="text-xl font-semibold text-white group-hover:text-yellow-100">
//                 {skill}
//               </span>
//               <div className="mt-3 h-1 w-full bg-gradient-to-r from-white via-gray-300 to-white rounded-full group-hover:from-yellow-400 group-hover:to-yellow-200"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const skills = [
  "MERN",
  "Tailwind CSS",
  "C++",
  "Python",
  "Kafka",
  "SQL",
];

const Skills = () => {
  const headingRef = useRef(null);
  const skillRefs = useRef([]);
  const sectionRef = useRef(null);

  skillRefs.current = [];

  const addToSkillRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // triggers when section is 80% into view
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    tl.fromTo(
      skillRefs.current,
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.8" // start overlapping with heading
    );
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-400 via-teal-400 to-blue-600 text-black text-center"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h3
          ref={headingRef}
          className="text-3xl font-bold mb-12 text-white drop-shadow-md"
        >
          Skills
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={addToSkillRefs}
              className="p-6 border border-white/30 rounded-xl shadow-xl bg-white/20 backdrop-blur-lg hover:scale-105 transform transition duration-300 group cursor-pointer"
            >
              <span className="text-xl font-semibold text-white group-hover:text-yellow-100">
                {skill}
              </span>
              <div className="mt-3 h-1 w-full bg-gradient-to-r from-white via-gray-300 to-white rounded-full group-hover:from-yellow-400 group-hover:to-yellow-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
