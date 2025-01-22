import React from "react";

const Footer =()=>{
  return(

     <section id="contact">
<footer
  className="py-10 bg-gradient-to-r from-teal-200 via-teal-300 to-blue-400
 text-black text-center px-6"
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-xl font-semibold">Stay Connected</h2>
    <p className="text-sm mt-2">Follow me on social media for more updates and insights!</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://www.linkedin.com/in/krati-joshi-9b000a20b/" className="hover:text-gray-400">LinkedIn</a>
      <a href="https://github.com/KRATI-cmd" className="hover:text-gray-400">GitHub</a>
    </div>
    <p className="text-xs text-gray-500 mt-8">
  © {new Date().getFullYear()} All Rights Reserved.{" "}
  <span className="font-semibold text-pink-500">Made with ❤️ by Krati Joshi</span>.
</p>

  </div>
</footer>

</section>

  )
}

export default Footer;