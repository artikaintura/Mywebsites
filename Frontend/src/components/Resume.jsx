import React from "react"
import Header from "./Header";
import Footer from "./Footer";

function Resume() {
  return (
    <>

      <Header />
      <section className="container mx-auto mt-12 my-8 md:p-20">
        <div className="bg-black bg-opacity-70 p-2">
          <div className="grid gap-9  p-6 md:p-10 md:grid-cols-2">
            <div className="shadow-md  rounded flex flex-col  justify-center md:col-span-2">
              <h1 className="text-2xl font-bold text-left w-full">
                RESUME <span className="text-green-800 text-2xl px-4 inline-flex transform scale-x-150">-</span>
              </h1>
              <h2 className="text-2xl  text-left w-full pb-9">CHECK MY RESUME</h2>
            </div>

            <div className="w-full">
              <h1 className="text-3xl font-bold mt-4">SUMMARY</h1>
              <h2>
                <li className="text-green-800 text-2xl">
                  <span className="text-white font-bold text-xl">ARTI KAINTURA</span>
                </li></h2>
              <p>As a fresher student, I'm passionate about learning the latest technologies and improving my skills in software development. Proficient in HTML5, CSS3, JavaScript, and learning React, Tailwind CSS, Node.js, etc. I'm focused on building a solid foundation in computer science, programming languages, and problem-solving techniques.
              </p>
             
                <li className="text-green-800 "><span className="text-white">Dehradun, Uttarakhand, India</span></li>
                <li className="text-green-800"><span className="text-white">+91 9997141587</span></li>
                <li className="text-green-800"><span className="text-white">artikaintura@gmail.com</span></li>
              
            </div>

            <div className="w-full">
              <h1 className="text-3xl font-bold mt-4">EDUCATION</h1>
              <h2>
                <li className="text-green-800 text-2xl">
                  <span className="text-white font-bold text-xl">MASTER OF COMPUTER SCIENCE</span>
                </li>
              </h2>
              <button className="block mb-1 text-left">2022-2024</button>
              <p>Swami Rama Himalayan University, Dehradun </p>
              <h2 className="mt-6">
                <li className="text-green-800 text-2xl">
                  <span className="text-white font-bold text-xl">BACHELOR OF COMPUTER SCIENCE</span>
                </li>
              </h2>
              <button className="block mb-1 text-left">2019-2022</button>
              <p>(Hemvati Nandan Bahuguna Garhwal University) Modern Institute of Technology, Rishikesh, India</p>
            </div>
          </div>
          <div className="w-full flex  justify-center items-center">
              <a href='/assets/Arti Kaintura Resume.pdf' target="_blank" rel="noopener noreferrer">
              <button className="text-center py-2 bg-green-800 bg-opacity-80 text-white font-semibold rounded md:w-40 w-36 md:py-2 md:rounded-lg hover:bg-green-600 transition duration-300">
                READ MORE
              </button>
              </a>
            </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Resume
