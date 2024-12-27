import { React,useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {

   
        const [isMenuOpen, setMenuOpen] = useState(false);
      
        const toggleMenu = () => setMenuOpen(!isMenuOpen);
      
        const links = [
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/resume", label: "Resume" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" },
        ];

  return (
    <>
       <header
      className={`text-white relative pr-3 flex items-center justify-between md:justify-end ${isMenuOpen ? "bg-green-900 bg-opacity-80" : ""
        }`}
    >
      <button
        onClick={toggleMenu}
        className="text-2xl text-white block md:hidden p-4 ml-auto"
      >
        {isMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
      </button>
      {isMenuOpen && (
        <nav className="md:hidden absolute left-0 h-screen w-full bg-green-900 bg-opacity-80 text-white flex flex-col p-7 z-40">
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => (
              <li key={index} className="py-2 group">
                <Link
                  to={link.to}
                  className="relative inline-block font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="block bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:50%_2px] bg-no-repeat transition-all duration-300">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>

    </>
  )
}

export default Navbar
