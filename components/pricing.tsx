"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { ExamplesDialog } from "./examples-dialog"


type Feature = { text: string; muted?: boolean }

const ACCENT = "#C6FF3A"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-500" : "text-neutral-200"}`}>{text}</span>
    </li>
  )
}

type Currency = "INR" | "USD"

const PRICES: Record<Currency, { startup: string; pro: string; premium: string; save: string }> = {
  INR: {
    startup: "₹25,000/-",
    pro: "₹55,000/-",
    premium: "₹1,70,500/-",
    save: "Save Flat ₹1,500/-",
  },
  USD: {
    startup: "$299",
    pro: "$699",
    premium: "$2,049",
    save: "Save $20",
  },
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  return "USD"
}

const startupVideos = ["ysz5S6PUM-U", "aqz-KE-bpKQ", "ScMzIvxBSi4"]
const proVideos = ["ASV2myPRfKA", "eTfS2lqwf6A", "KALbYHmGV4I"]
const premiumVideos = ["v2AC41dglnM", "pRpeEdMmmQ0", "3AtDnEC4zak"]

export function Pricing() {
  const [openPlan, setOpenPlan] = useState<null | "Startup" | "Pro" | "Premium">(null)
  const [currency, setCurrency] = useState<Currency>("USD")


  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" })
        if (!res.ok) throw new Error("geo failed")
        const data = await res.json()
        if (!cancelled) setCurrency(data?.currency === "INR" ? "INR" : "USD")
      } catch {
        if (!cancelled) setCurrency(guessLocalCurrency())
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="pricing" className="text-white" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: "rgba(198,255,58,0.12)", color: ACCENT }}
          >
            Our Pricing and Packages
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" itemProp="name">
            DevGeeks Pricing
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400" itemProp="description">
            High-quality web solutions from Computer Science undergrads. From static sites to AI-integrated platforms.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-5 text-neutral-900 hover:brightness-95"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <Link href="https://wa.link/rc25na" target="_blank">
                Contact now
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200">Static Website</div>
              <div className="flex items-end gap-2 text-neutral-100">
                <div className="text-xl font-bold tracking-tight">₹4,000 - ₹7,000</div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2">
                {[
                  "Basic HTML/CSS/JS",
                  "3-5 pages",
                  "Mobile responsive",
                  "Contact forms"
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200">Dynamic Website</div>
              <div className="flex items-end gap-2 text-neutral-100">
                <div className="text-xl font-bold tracking-tight">₹10,000 - ₹25,000+</div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2">
                {[
                  "Full-stack development",
                  "Custom backend",
                  "Database integration",
                  "Admin dashboard"
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200">E-commerce Site</div>
              <div className="flex items-end gap-2 text-neutral-100">
                <div className="text-xl font-bold tracking-tight">₹15,000 - ₹30,000</div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2">
                {[
                  "Product catalog",
                  "Shopping cart",
                  "Payment gateway",
                  "Order management"
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200">AI Integration</div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight">₹5,000 - ₹50,000+</div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2">
                {[
                  "Custom chatbots",
                  "OCR/Document processing",
                  "Recommendation systems",
                  "Business automation"
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300"
          >
            <Link href="/page2" target="_blank">
              See All Pricing Details
            </Link>
          </Button>
        </div>
      </div>


    </section>
  )
}