import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden z-50 pointer-events-none">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center py-8 sm:py-12 pointer-events-none">
          <div className="mb-5 flex items-center gap-2 pointer-events-none">
            <Image src="/icons/skitbit-white.svg" alt="Skitbit logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">DevGeeks™</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white pointer-events-none">
            <span className="block">BUILD.SHARE.GROW௹</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">WE BUILD. WE INNOVATE.</span>
            <span className="block">YOUR DIGITAL PARTNER.</span>
          </h1>
          <div className="mt-6 pointer-events-auto">
            <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
              <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
                Chat With Us
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
              {tone === "calm" ? "skitbit app" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const phoneData = [
  {
    title: "Impact",
    sub: "Turn ideas into real digital experiences.",
    tone: "results",
    videoSrc:
      "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Digital_Transformation_Video_Generation.mp4",
  },
  {
    title: "Fast",
    sub: "From concept to launch in record time.",
    tone: "speed",
    videoSrc:
      "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Rapid_Development_Workflow_Video_Generation.mp4",
  },
  {
    title: "Social-Ready",
    sub: "Optimized for web, mobile, and social.",
    tone: "social",
    videoSrc:
      "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Cross_Platform_App_Demo_Video.mp4",
  },
  {
    title: "Standout",
    sub: "Make products and apps that grab attention.",
    tone: "standout",
    videoSrc: "https://dq8m68shjb69r1hf.public.blob.vercel-storage.com/Design_Transformation_Video_Generation.mp4",
  },
  {
    title: "Collaborative",
    sub: "Agency expertise meets community power.",
    tone: "premium",
    videoSrc: "https://www.pexels.com/download/video/4167404/?fps=30",
  },
]