import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMenu, IoClose } from "react-icons/io5";

function Home() {

  const [menu, setMenu] = useState(false);


  return (
    <>
      {/* Header */}
      <header className="bg-green-800 bg-opacity-80 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg md:text-2xl font-bold">Arti Kaintura</h1>
          <nav className="hidden md:flex gap-4 space-x-6">
            <ul className="flex space-x-6">
              <li className="py-2 group">
                <Link
                  to="/"
                  className="relative inline-block font-medium">
                  <span className="block bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:50%_2px] bg-no-repeat transition-all duration-300">
                    Home</span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  to="/about"
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    About
                  </span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  to="/resume"
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    Resume
                  </span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  to="/project"
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    Project
                  </span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  to="/project"
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <button className="md:hidden"
            onClick={() => {
              setMenu(!menu);
            }}

          >
            {menu ? <IoClose size={30} /> : <IoMenu size={30} />} {/* Toggle between icons */}
          </button>
        </div>

        {menu && (
          <nav className="absolute top-0 left-0 w-full h-screen bg-green-800 bg-opacity-90  text-white transition-transform transform translate-y-0 md:hidden z-50">
            <div className="flex justify-end items-center px-4 py-4">
              <button
                onClick={() => setMenu(false)} // Close the menu when clicked
                className="text-white"
              >
                <IoClose size={30} />
              </button>
            </div>
            <ul className="flex flex-col space-x-6">
              <li className="py-4 px-6 group">
                <Link
                  to="/"
                  onClick={() => setMenu(false)}
                  className="relative inline-block font-medium">
                  <span className="block bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:50%_2px] bg-no-repeat transition-all duration-300">
                    Home
                  </span>
                </Link>
              </li>
              <li className="py-4 group">
                <Link
                  to="/about"
                  onClick={() => setMenu(false)}
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    About
                  </span>
                </Link>
              </li>
              <li className="py-4 group">
                <Link
                  to="/resume"
                  onClick={() => setMenu(false)}
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    Resume
                  </span>
                </Link>
              </li>
              <li className="py-4 group">
                <Link
                  to="/project"
                  onClick={() => setMenu(false)}
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    Project
                  </span>
                </Link>
              </li>
              <li className="py-4 group">
                <Link
                  to="/contact"
                  onClick={() => setMenu(false)}
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        )
        }

      </header>


      {/* Hero Section */}
      <section className="container mx-auto mt-12 my-8 md:p-20">
        <div className="grid gap-9 bg-black bg-opacity-70 p-6 md:p-10 md:grid-cols-2">
          <div className="shadow-md p-6 md:p-4 rounded flex flex-col  justify-center md:col-span-2">
            <h1 className="text-lg font-bold">
              Welcome to <span className="underline decoration-green-800">My Portfolio</span>
            </h1>
            <p className="mt-2">
              I'm a web developer passionate about creating innovative and dynamic websites.
              I love learning new things every day and continuously enhancing my skills.
            </p>
          </div>

          <div className="shadow-md p-6 rounded flex gap-4  md:col-span-2 ">
            <ul className="flex space-x-6">
              <li className="py-2 group">
                <Link
                  to="/"
                  className="relative inline-block font-medium">
                  <span className="block bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:50%_2px] bg-no-repeat transition-all duration-300">
                    Home</span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  to="/about"
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    About
                  </span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  to="/resume"
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    Resume
                  </span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  to="/project"
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    Project
                  </span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  to="/contact"
                  className="relative inline-block font-medium">
                  <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-300 group-hover:bg-[length:50%_2px]">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>


          </div>

          <div className="shadow-md p-6 rounded flex gap-6 md:col-span-2">
            <a
              href="https://github.com/artikaintura"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:scale-110 transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/arti-kaintura-9b8931227/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 bg-opacity-80 text-white mt-40 p-4">
        <div className="container mx-auto text-center md:text-left">
          <p className="mt-3">
            Designed by{' '}
            <span className="text-green-500 hover:text-green-400">
              Arti Kaintura
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
