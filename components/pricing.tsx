"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { Carousel } from "./Carousel" // Ensure this path is correct

// --- TYPES & HELPERS ---
type Feature = { text: string; muted?: boolean }
type Currency = "INR" | "USD"

const ACCENT = "#C6FF3A"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-500" : "text-neutral-200"}`}>{text}</span>
    </li>
  )
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  return "USD"
}

// --- DATA ---
// Added 'href' to every object so the buttons know where to go
const PLAN_DATA = [
  {
    title: "app",
    price: "₹4,000 - ₹7,000",
    href: "/calculator/app",
    features: [
      "Basic HTML/CSS/JS",
      "3-5 pages",
      "Mobile responsive",
      "Contact forms"
    ]
  },
  {
    title: "Dynamic Website",
    price: "₹10,000 - ₹25,000+",
    href: "/calculator/website",
    features: [
      "Full-stack development", 
      "Custom backend",
      "Database integration",
      "Admin dashboard"
    ]
  },
  {
    title: "web3",
    price: "₹15,000 - ₹30,000",
    href: "/calculator/web3",
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment gateway",
      "Order management"
    ]
  },
  {
    title: "AI Integration",
    price: "₹5,000 - ₹50,000+",
    href: "/calculator/ai",
    features: [
      "Custom chatbots",
      "OCR/Document processing",
      "Recommendation systems",
      "Business automation"
    ]
  },
  // I renamed the titles slightly below to make the cards distinct, 
  // but you can change them back to "AI Integration" if you prefer.
  {
    title: "testing", 
    price: "₹40,000 - ₹80,000+",
    href: "/calculator/testing",
    features: [
      "Multi-tenant architecture",
      "Subscription billing",
      "User authentication",
      "Scalable infrastructure"
    ]
  },
  {
    title: "maintainance",
    price: "Custom Quote",
    href: "/calculator/maintenance",
    features: [
      "Legacy system migration",
      "Cloud architecture",
      "High-security compliance",
      "Dedicated support"
    ]
  }
]

// --- MAIN COMPONENT ---
export function Pricing() {
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
        
        {/* Header Content */}
        <div className="mx-auto max-w-3xl text-center mb-10">
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

        {/* --- CAROUSEL SECTION --- */}
        <div className="relative w-full mt-10">
          <Carousel cardWidth={300}>
            {PLAN_DATA.map((plan, index) => (
              /* Card Wrapper */
              <div key={index} className="h-full flex flex-col p-6 text-left">
                
                {/* Header */}
                <div className="space-y-3 pb-4 mb-4 border-b border-neutral-800">
                  <div className="text-sm font-semibold text-neutral-200">
                    {plan.title}
                  </div>
                  <div className="flex items-end gap-2 text-neutral-100">
                    <div className="text-xl font-bold tracking-tight">
                      {plan.price}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="grid gap-3">
                  {plan.features.map((feature, i) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </ul>

                {/* Footer Button inside card */}
                {/* Updated to use Link and plan.href */}
                <div className="mt-auto pt-6">
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
                  >
                    <Link href={plan.href}>
                      Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300"
          >
            <Link href="/services" target="_blank">
              See All Services
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}