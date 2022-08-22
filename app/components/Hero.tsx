export const Hero = () => {
  return (
    <section
      className="flex flex-col border border-t-2 w-full h-full items-center m-auto relative"
    >
      <h2 className="inline-block">
        <div
          className="justify-left"
        >
          👋 Hi! I'm
        </div>
        <div className="font-bold font-sans text-slate-400 text-7xl">
          Ashton Sobeck
        </div>
        <div className="text-right font-mono font-thin">
          (A Software Engineer)
        </div>
      </h2>
    </section>
  );
}