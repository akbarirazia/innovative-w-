import React, { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="border-gray-200 bg-green-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">
            Innovative W
          </span>
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 text-white hover:bg-green-800 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <Link
                to="/"
                className="block py-2 px-3  rounded md:bg-transparent  md:p-0 text-white  hover:text-black"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent text-white  hover:text-black"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent text-white  hover:text-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent text-white  hover:text-black"
              >
                Contact
              </Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
