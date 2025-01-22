// import React from "react";

// const Resume = () => {
//   return (
//     <section
//   id="resume"
//   className="py-20 bg-gradient-to-r bg-gradient-to-r from-pink-300 via-pink-400 to-violet-500
//  text-white text-center px-6"
// >
//       <div className="max-w-4xl mx-auto">
//         <h3 className="text-3xl font-bold mb-6">Resume</h3>
//         <p className="mb-6">Download my resume for detailed insights into my work and projects.</p>
//         <a
//           href="../assets/resume.pdf"
//           download
//           className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition duration-300"
//         >
//           Download Resume
//         </a>
//       </div>
//     </section>



//   );
// };

// export default Resume;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-r from-pink-300 via-pink-400 to-violet-500 text-white text-center px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Resume</h3>
        <p className="mb-6">Download my resume for detailed insights into my work and projects.</p>
        <a
          href="../assets/resume.pdf"
          download
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 inline-flex items-center"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
