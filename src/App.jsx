import { useState } from "react";
import HeroSection from "./HeroSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Collection", "Materials", "Studio", "Contact"];

  return (
    <>
      <nav className="fixed top-0 z-20 flex w-full items-center justify-between px-6 py-6 sm:px-10 sm:py-8 lg:px-16">
        <p className="font-playfair-display text-lg font-semibold text-white">
          Forma
        </p>

        {/* Desktop links */}
        <ul className="font-inter hidden items-center gap-6 sm:flex">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-xs text-white transition-opacity hover:opacity-70"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger + dropdown */}
        <div className="relative sm:hidden">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-5 w-6 flex-col items-end justify-center"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`absolute h-px bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? "w-6 rotate-45" : "w-6 -translate-y-2"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-white transition-all duration-200 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? "w-6 -rotate-45" : "w-6 translate-y-2"
              }`}
            />
          </button>

          <div
            className={`font-inter absolute top-full right-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
              menuOpen ? "mt-2 max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col items-end gap-2 pb-2">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="text-xs text-white transition-opacity hover:opacity-70"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <HeroSection />
    </>
  );
}

export default App;
