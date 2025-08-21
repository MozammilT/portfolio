import { useState } from "react";
import { motion } from "motion/react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const Navigation = () => {
    return (
      <ul className="nav-ul">
        <li className="nav-li">
          <Link
            to="home"
            smooth="true"
            duration={1000}
            className="nav-link cursor-pointer"
            onClick={() => scroll.scrollToTop({ duration: 1500, smooth: true })}
          >
            Home
          </Link>
        </li>
        <li className="nav-li">
          <Link
            to="about"
            offset={-80}
            smooth={true}
            duration={1000}
            className="nav-link cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="nav-li">
          <Link
            to="work"
            offset={-70}
            smooth={true}
            duration={1000}
            className="nav-link cursor-pointer"
          >
            Work
          </Link>
        </li>
        <li className="nav-li">
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="nav-link cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="c-space mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-2xl font-bold transition-colors text-white hover:text-neutral-400"
          >
            <div className="relative">
              Mozammil{" "}
              <div className="bg-[#ef973f] h-2 w-2 rounded-full absolute -right-3.5 top-4" />
            </div>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/close.svg" : "/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
