import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className=" shadow bg-green-600 ">
      <div className="w-full container mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* Replace the image URL with your logo */}

            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Inovation World
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              {/* <Link
                to="/privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/licensing" className="hover:underline me-4 md:me-6">
                Licensing
              </Link> */}
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
          © 2024 <a className="hover:underline">Innovative W</a>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
