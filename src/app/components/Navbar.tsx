import Image from "next/image";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-blue-950 fixed top-0 w-full z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/communitylogo.png" // Place your logo inside public/ folder
            alt="Devops logo"
            width={60}
            height={70}
            className=" shadow-md-white"
            priority // loads faster (good for navbar logos)
          />
          <p>|</p>
          <span className="font-bold text-xl tracking-wide">
            <Image
              src="/logo.png"
              alt="Devops logo"
              width={60}
              height={70}
              className=" shadow-md-white"
              priority // loads faster (good for navbar logos)
            />
          </span>
        </div>

        {/* Links Section */}
        <ul className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-yellow-300 transition-colors font-medium text-lg"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
