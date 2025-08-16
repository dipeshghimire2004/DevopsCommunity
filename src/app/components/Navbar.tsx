import { NAV_LINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white fixed top-0 w-full z-10 shadow-lg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex space-x-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
