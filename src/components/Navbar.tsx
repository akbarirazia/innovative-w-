import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="bg-green-600 p-4 border-b border-gray-300   ">
        <div className="container flex justify-between mx-auto my-0">
          <div className="flex items-center text-3xl font-extrabold text-white">
            {/* <img src={logo} alt="Innovative Waris Logo" className="w-10 mr-2" /> */}
            Innovative W
          </div>
          <ul className="list-none flex justify-end items-center">
            <li className="mx-2">
              <Link to="/" className=" hover:text-black text-white">
                Home
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/about" className=" hover:text-black text-white">
                About
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/services" className=" hover:text-black text-white">
                Services
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/contact" className=" hover:text-black text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
