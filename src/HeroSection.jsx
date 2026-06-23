import Viewer from "./Viewer";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-end overflow-hidden bg-[url(background.webp)] px-16 py-8">
      {/* Big type — behind everything */}
      <div className="font-inter absolute inset-0 flex flex-col items-center justify-center text-center text-[11rem] leading-40 font-black tracking-[8.8px] text-white/50 uppercase select-none">
        <p>Material.</p>
        <p>Form.</p>
        <p>Space.</p>
      </div>

      {/* 3D Canvas — cube centered, overlaps the type */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Viewer />
      </div>

      {/* Bottom CTAs */}
      <div className="relative z-10 flex w-full items-end justify-between">
        {/* Left CTA */}
        <div className="flex flex-col">
          <p className="font-playfair-display text-2xl text-white italic">
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
          <p className="font-playfair-display text-2xl text-white italic">
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
