"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../constants";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop =
          targetElement.getBoundingClientRect().top + window.pageYOffset - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }

    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-200/95 backdrop-blur-md shadow-xl"
            : "bg-gray-200 shadow-lg"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 flex items-center justify-between h-16">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/communitylogo.png"
                alt="Community logo"
                width={60}
                height={70}
                className="shadow-md-white"
                priority
              />
            </motion.div>

            <motion.p
              className="text-blue-950 text-2xl font-light"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              |
            </motion.p>

            <motion.span
              className="font-bold text-xl tracking-wide"
              whileHover={{ rotate: -5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/devcorps.png"
                alt="DevOps logo"
                width={60}
                height={70}
                className="shadow-md-white"
                priority
              />
            </motion.span>
          </motion.div>

          {/* Desktop Links Section */}
          <ul className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`relative font-medium text-lg transition-colors duration-300 ${
                    activeSection === link.href
                      ? "text-yellow-500"
                      : "text-blue-950 hover:text-yellow-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {/* Active indicator */}
                  {activeSection === link.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500"
                      layoutId="activeIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {/* Hover effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 opacity-0"
                    whileHover={{
                      opacity: activeSection !== link.href ? 1 : 0,
                      scaleX: 1,
                    }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
            <motion.button
              onClick={toggleMobileMenu}
              className="focus:outline-none text-blue-950 p-2"
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 45 },
                  closed: { rotate: 0 },
                }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  variants={{
                    open: { d: "M6 18L18 6" },
                    closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-16 right-0 w-80 bg-gray-200/95 backdrop-blur-md shadow-2xl z-50 md:hidden rounded-bl-2xl border-l border-b border-gray-300"
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ul className="py-6 px-4 space-y-4">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={`block py-3 px-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                        activeSection === link.href
                          ? "text-green -600 bg-green100"
                          : "text-blue-950 hover:text-green-500 hover:bg-gray-100"
                      }`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
