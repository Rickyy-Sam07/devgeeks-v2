"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MagicBento from './MagicBento'

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "What makes us the best studio for you.",
  subtitle: "Discover our unique approach to 3D animation",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
        <Card className="hidden md:block liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">ADAPTABILITY</p>
            <CardTitle className="mt-1 text-xl text-white">Make the experience truly intuitive</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-white/60 text-sm">Image: intuitive-1.png</span>
                </div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-green-500/20 flex items-center justify-center">
                  <span className="text-white/60 text-sm">Image: intuitive-2.png</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">CLIENT LOVE</p>
            <CardTitle className="mt-1 text-xl text-white">
              Their work didn't just look good, it moved the needle — our audience felt the difference instantly.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-lime-300">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-lime-300 text-lime-300" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-full w-full rounded-xl border border-white/10 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center aspect-video">
                <span className="text-white/60 text-sm">Image: top-rated-1.png</span>
              </div>
              <div className="h-full w-full rounded-xl border border-white/10 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center aspect-video">
                <span className="text-white/60 text-sm">Image: top-rated-2.png</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}