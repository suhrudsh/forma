import HeroSection from "./HeroSection";

function App() {
  return (
    <>
      <nav className="fixed top-0 z-10 flex w-full items-center justify-between px-16 py-8">
        <p className="font-playfair-display text-lg font-semibold text-white">
          Forma
        </p>
        <ul className="font-inter flex items-center gap-6">
          {["Collection", "Materials", "Studio", "Contact"].map((item) => (
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
      </nav>
      <HeroSection />
    </>
  );
}

export default App;
