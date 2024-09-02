import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const NavItem = ({ to, delay, children }) => (
  <motion.li
    {...fadeInUp}
    transition={{ ...fadeInUp.transition, delay }}
    className="list-none"
  >
    <Link
      to={to}
      className="text-gray-300 hover:text-pink-400 hover:bg-gray-800 
      transition duration-300 ease-in-out text-base font-bold px-3 py-2 
      rounded-md"
    >
      {children}
    </Link>
  </motion.li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav className="bg-gray-900 border-b border-gray-700" {...slideInUp}>
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center py-4">
          <img
            src="https://iili.io/dGpGJqv.png"
            alt="SwatchMe Logo"
            className="h-16 w-auto mr-4"
          />
          <div className="hidden md:flex flex-grow items-center">
            <ul className="flex space-x-10 mx-auto">
              <NavItem to="/home" delay={0.2}>
                Home
              </NavItem>
              <NavItem to="/trending" delay={0.4}>
                Trending
              </NavItem>
              <NavItem to="/palette-generator" delay={0.6}>
                Palette Generator
              </NavItem>
              <NavItem to="/about" delay={0.8}>
                About
              </NavItem>
            </ul>
          </div>
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <span className="bg-gray-800 text-pink-400 text-xs font-semibold px-3 py-2 rounded">
              v0.1.1
            </span>
            <button
              className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-lg
             hover:bg-pink-600 transition duration-300 ease-in-out"
            >
              <span className="relative z-10">Sign In</span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></span>
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <span className="bg-gray-800 text-pink-400 text-xs font-semibold px-3 py-2 rounded">
              v0.1.1
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-pink-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            {...slideInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ul className="flex flex-col space-y-4 pb-4">
              <NavItem to="/home" delay={0.2}>
                Home
              </NavItem>
              <NavItem to="/trending" delay={0.4}>
                Trending
              </NavItem>
              <NavItem to="/palette-generator" delay={0.6}>
                Palette Generator
              </NavItem>
              <NavItem to="/about" delay={0.8}>
                About
              </NavItem>
              <motion.li
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 1 }}
                className="list-none"
              >
                <button
                  className="w-full relative overflow-hidden bg-pink-500 text-white px-6
                 py-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
                >
                  <span className="relative z-10">Sign In</span>
                  <span
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r 
                  from-transparent via-gray-900 to-transparent opacity-30 animate-shimmer"
                  ></span>
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
      <style>
        {`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}
      </style>
    </motion.nav>
  );
}

export default Navbar;
