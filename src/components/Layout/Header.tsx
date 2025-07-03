import { useState } from "react";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About Me", href: "about" },
  { name: "Career", href: "career" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section by id
  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
    // const section = document.getElementById(id);
    // if (section) {
    //   section.scrollIntoView({ behavior: "smooth" });
    //   setMenuOpen(false);
    // }
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="font-semibold text-lg md:text-xl tracking-wide">
          Harshita Korat
        </div>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="hover:text-indigo-400 transition-colors duration-200 bg-transparent border-none outline-none"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {/* {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : ( */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
            {/* )} */}
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <ul className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col justify-center items-center space-y-6 md:hidden">
          {/* Close button */}
          <button
            className="absolute top-2 right-3 text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-xl py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200 w-full text-center bg-transparent border-none outline-none"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}