import Viewer from "./Viewer";

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen w-full flex-col justify-end overflow-hidden bg-cover px-6 py-6 sm:px-10 sm:py-8 lg:px-16"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}background.webp)`,
      }}
    >
      {/* Big type — behind everything */}
      <div className="font-inter absolute inset-0 flex flex-col items-center justify-center text-center text-[clamp(2.5rem,12vw,11rem)] leading-[0.95] font-black tracking-[0.02em] text-white/50 uppercase select-none sm:tracking-[0.04em]">
        <p>Material.</p>
        <p>Form.</p>
        <p>Space.</p>
      </div>

      {/* 3D Canvas — cube centered, overlaps the type */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Viewer />
      </div>

      {/* Bottom CTAs */}
      <div className="relative z-10 flex w-full flex-col gap-16 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        {/* Left CTA */}
        <div className="flex flex-col items-start">
          <p className="font-playfair-display text-lg text-white italic sm:text-xl lg:text-2xl">
            Bespoke interiors and furniture.
          </p>
          <div className="self-start border-b border-white transition-opacity hover:opacity-70">
            <a href="#" className="font-inter text-xs text-white">
              Explore the collection →
            </a>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex flex-col items-end">
          <p className="font-playfair-display text-lg text-white italic sm:text-xl lg:text-2xl">
            Crafted from exceptional materials.
          </p>
          <div className="self-end border-b border-white transition-opacity hover:opacity-70">
            <a href="#" className="font-inter text-xs text-white">
              Explore the materials →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
