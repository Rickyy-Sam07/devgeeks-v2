import ChromaGrid, { ChromaItem } from "@/components/ui/ChromaGrid";

export function Team() {
  const teamMembers: ChromaItem[] = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Creative Director",
      handle: "@alexrivera",
      gradient: "linear-gradient(145deg, #2d05cc, #000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Jordan Chen",
      subtitle: "Lead Animator",
      handle: "@jordanchen",
      gradient: "linear-gradient(210deg, #EF4444, #000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Morgan Blake",
      subtitle: "3D Artist",
      handle: "@morganblake",
      gradient: "linear-gradient(165deg, #f6f939, #000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Shreyan Ghosh",
      subtitle: "Backend Engineer",
      handle: "@Zenoguy",
      gradient: "linear-gradient(195deg, #0fe661, #000)",
      url: "https://linkedin.com/in/",
    },
  ];

  return (
    <section
      id="team"
      className="relative py-28 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Wider grid on large screens */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-20 items-center">
          
          {/* LEFT — TEXT (VERTICALLY CENTERED) */}
        <div className="flex flex-col justify-center text-center lg:text-left">
  <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
    <span className="block">
      BUILD • SHIP • IMPROVE
    </span>

    <span
      className="
        block
        mt-2
        italic
        text-lime-300
        drop-shadow-[0_0_25px_rgba(132,204,22,0.35)]
        text-5xl
        sm:text-6xl
      "
      style={{
        fontFamily: "'Marck Script', cursive",
        letterSpacing: "2px",
      }}
    >
      — The DevGeeks Team
    </span>
  </h2>

  <p className="mt-6 text-lg md:text-xl text-white/75 max-w-md mx-auto lg:mx-0 leading-relaxed">
    We’re a focused team of developers and designers building real products,
    collaborating closely, and delivering work we’re proud to put our name on.
  </p>

  <p className="mt-4 text-sm text-white/50 max-w-md mx-auto lg:mx-0">
    Early-stage team. Serious execution. Long-term mindset.
  </p>
</div>


          {/* RIGHT — GRID (PUSHED RIGHT, STILL RESPONSIVE) */}
          <div className="flex justify-center lg:justify-end">
            <ChromaGrid
              items={teamMembers}
              disableBackdrop
            />
          </div>
        </div>
      </div>
    </section>
  );
}
