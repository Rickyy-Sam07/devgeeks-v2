"use client"

import PillNav from "@/components/PillNav"
import Lanyard from "@/components/Lanyard"

export function SiteHeader() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "#pricing" },
    { label: "Projects", href: "/Projects" },
    { label: "Blog", href: "#blog" },
    { label: "Customers", href: "#Customers" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "https://wa.link/rc25na" }
  ]

  return (
    <>
      <PillNav
        logo="/icons/skitbit-white.svg"
        logoAlt="DevGeeks Logo"
        items={navItems}
        activeHref="/"
        baseColor="#C6FF3A"
        pillColor="#ffffff"
        hoveredPillTextColor="#000000"
        pillTextColor="#000000"
      />
      <div className="relative z-40 mt-16">
        <Lanyard />
      </div>
    </>
  )
}