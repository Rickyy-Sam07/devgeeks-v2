import { Button } from "@/components/ui/button"
import Image from "next/image"
import dynamic from "next/dynamic"


const LazyVideo = dynamic(() => import("./lazy-video"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 h-full w-full bg-black animate-pulse" />
  )
})

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden z-50 pointer-events-none">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center py-8 sm:py-12 pointer-events-none">
          <div className="mb-5 flex items-center gap-2 pointer-events-none">
            <span className="text-2xl">🐦🔥</span>
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">DevGeeks™</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white pointer-events-none">
            <span className="block">CODE • COLLABORATE • CONQUER</span>
            <span className="block italic text-lime-300 drop-shadow-[0_0_25px_rgba(132,204,22,0.4)] text-6xl" style={{ fontFamily: "'Marck Script', cursive", letterSpacing: '2px' }}>
              — With DevGeeks
            </span>
            <span className="block">Where Students Builds & Brands Grow</span>
          </h1>
          <div className="mt-6 pointer-events-auto">
            <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
              <a href="https://www.linkedin.com/groups/14694232/" target="_blank" rel="noopener noreferrer">
                Join Community
              </a>
            </Button>
          </div>

          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pointer-events-none">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={`${visibility} pointer-events-auto`}>
                  <PhoneCard title={p.title} sub={p.sub} tone={p.tone} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Digital_Transformation_Video_Generation.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
              {tone === "calm" ? "devgeeks" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const phoneData = [
  {
    title: "Collaborate",
    sub: "Work with peers on real-world projects.",
    tone: "community",
    videoSrc:
      "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Digital_Transformation_Video_Generation.mp4",
  },
  {
    title: "Learn",
    sub: "Get mentorship from industry experts.",
    tone: "growth",
    videoSrc:
      "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Rapid_Development_Workflow_Video_Generation.mp4",
  },
  {
    title: "Build",
    sub: "Showcase projects and get feedback.",
    tone: "create",
    videoSrc:
      "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Cross_Platform_App_Demo_Video.mp4",
  },
  {
    title: "Opportunities",
    sub: "Access freelancing and project support.",
    tone: "success",
    videoSrc: "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Design_Transformation_Video_Generation.mp4",
  },
  {
    title: "Community",
    sub: "Join passionate tech enthusiasts worldwide.",
    tone: "devgeeks",
    videoSrc: "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Logo_Video_With_Cool_Effect.mp4",
  },
]