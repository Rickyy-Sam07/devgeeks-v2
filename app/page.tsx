import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Opportunities } from "@/components/opportunities"
import { CommunityStats } from "@/components/community-stats"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { SocialLinks } from "@/components/social-links"
import { AppverseFooter } from "@/components/appverse-footer"
import LiquidEther from "@/components/liquid-ether-background"
import Script from "next/script"

export const dynamic = "force-static"

export default function Page() {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://theskitbit.com/#pricing",
    name: "Pricing Plans",
    description: "3D Animation pricing plans - Startup, Pro, and Premium packages for all business needs",
    url: "https://theskitbit.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "3D Animation Services",
      description: "Professional 3D animation services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "299",
          priceCurrency: "USD",
          description: "Up to 15s 3D Animation with 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "699",
          priceCurrency: "USD",
          description: "Up to 25s 3D Animation with 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "2049",
          priceCurrency: "USD",
          description: "40-60s 3D Animation with unlimited revisions",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://theskitbit.com/",
    name: "Skitbit | 3D Animation Made Simple, Reliable & Scalable",
    description:
      "From product launches to full-scale campaigns, Skitbit delivers 3D animation that's fast, consistent, and built to wow your audience.",
    url: "https://theskitbit.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Skitbit",
      url: "https://theskitbit.com",
      sameAs: [
        "https://twitter.com/theskitbit",
        "https://www.youtube.com/@skitbitinternational",
        "https://instagram.com/theskitbit",
        "https://threads.com/theskitbit",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://theskitbit.com/#pricing",
        name: "Pricing Section",
        url: "https://theskitbit.com/#pricing",
      },
    ],
  }

  return (
    <>
      <div className="fixed inset-0 z-0 bg-black">
        <LiquidEther 
          colors={['#2d05cc', '#0fe661', '#f6f939']}
          resolution={0.35}
          mouseForce={15}
          cursorSize={80}
          iterationsPoisson={16}
          iterationsViscous={16}
          dt={0.016}
          autoSpeed={0.3}
          autoIntensity={1.8}
        />
      </div>
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <main className="min-h-[100dvh] text-white">
            <SiteHeader />
            <Hero />
            <About />
            <Opportunities />
            <CommunityStats />
            <Features />
            <LogoMarquee />
            <Pricing />
            <SocialLinks />
            <AppverseFooter />
          </main>
        </div>
      </div>

      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}