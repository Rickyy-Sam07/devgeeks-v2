"use client"

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter, usePathname } from 'next/navigation'

const Hyperspeed = dynamic(() => import('@/components/hyperspeed'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
            style={{
              top: `${5 + i * 4}%`,
              left: '10%',
              right: '10%',
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-cyan-400 text-sm opacity-50">Loading Hyperspeed...</div>
      </div>
    </div>
  )
})

// Type definitions
interface PricingItem {
  title: string
  desc: string
  min: number
  max: number
  tier?: number
  monthly?: boolean
  hourly?: boolean
  custom?: boolean
}

interface PricingData {
  main: PricingItem[]
  addons?: PricingItem[]
}

type PageId = 'website' | 'app' | 'ai' | 'web3' | 'testing' | 'maintenance'

interface CalculatorPage {
  id: PageId
  title: string
  icon: string
  path: string
}

// Main navigation data
const calculatorPages: CalculatorPage[] = [
  { id: 'website', title: 'Website Development', icon: '🌐', path: '/calculator/website' },
  { id: 'app', title: 'Desktop/Mobile Apps', icon: '📱', path: '/calculator/app' },
  { id: 'ai', title: 'AI / Automation', icon: '🤖', path: '/calculator/ai' },
  { id: 'web3', title: 'Web3 / Blockchain', icon: '⛓️', path: '/calculator/web3' },
  { id: 'testing', title: 'Testing & QA', icon: '🧪', path: '/calculator/testing' },
  { id: 'maintenance', title: 'Maintenance & Hosting', icon: '🔧', path: '/calculator/maintenance' }
]

// Website Development pricing data
const websitePricing: PricingData = {
  main: [
    { 
      title: "Static Website", 
      desc: "Basic HTML/CSS/JS, 3-5 pages, mobile responsive", 
      min: 4000, 
      max: 7000,
      tier: 1
    },
    { 
      title: "Dynamic Website", 
      desc: "Full-stack with backend (depends on complexity)", 
      min: 10000, 
      max: 25000,
      tier: 2
    },
    { 
      title: "Single-Page App (SPA)", 
      desc: "React/Next.js with routing, API integration", 
      min: 10000, 
      max: 18000,
      tier: 2
    },
    { 
      title: "E-commerce Site", 
      desc: "Product catalog, cart, payment gateway (e.g., Amazon, Flipkart)", 
      min: 15000, 
      max: 30000,
      tier: 3
    },
    { 
      title: "Blog/CMS Integration", 
      desc: "Blog engine with markdown/WYSIWYG + admin controls", 
      min: 5000, 
      max: 10000,
      tier: 2
    },
    { 
      title: "Custom Backend", 
      desc: "Charges depend on complexity", 
      min: 5000, 
      max: 50000,
      tier: 2
    }
  ],
  addons: [
    { title: "WhatsApp/Contact plugin", desc: "Direct messaging or chat widget integration", min: 250, max: 500 },
    { title: "Google Sheets/Forms automation", desc: "Auto-save form data, dynamic updates", min: 1000, max: 2000 },
    { title: "Email automation", desc: "Scheduled reports, reminders via Gmail APIs", min: 1000, max: 2500 },
    { title: "Live database", desc: "Real-time data handling (MongoDB/Firebase)", min: 1500, max: 3000 },
    { title: "Admin dashboard / CMS", desc: "Custom UI for content or user management", min: 4000, max: 10000 },
    { title: "Payment Integration", desc: "Secure payment gateway setup (Razorpay/UPI)", min: 6000, max: 10000 },
    { title: "SEO Optimization", desc: "Metadata, structured data, keyword targeting", min: 2500, max: 5000 },
    { title: "Analytics Setup", desc: "Track user behavior & traffic (GA4, Hotjar)", min: 800, max: 1500 }
  ]
}

// Desktop/Mobile App pricing data
const appPricing: PricingData = {
  main: [
    { 
      title: "Cross-Platform Mobile App", 
      desc: "React Native/Flutter, 3-5 screens, basic navigation", 
      min: 15000, 
      max: 30000,
      tier: 1
    },
    { 
      title: "Advanced Mobile App", 
      desc: "Complex features, state management, API integration, auth", 
      min: 30000, 
      max: 60000,
      tier: 2
    },
    { 
      title: "Native Mobile App", 
      desc: "iOS (Swift) or Android (Kotlin) single platform", 
      min: 20000, 
      max: 40000,
      tier: 2
    },
    { 
      title: "Progressive Web App (PWA)", 
      desc: "Mobile-like browser experience, offline, installable", 
      min: 8000, 
      max: 18000,
      tier: 1
    },
    { 
      title: "Desktop App (Basic)", 
      desc: "ElectronJS, 3-5 views, local data storage", 
      min: 10000, 
      max: 20000,
      tier: 1
    },
    { 
      title: "Desktop App (Advanced)", 
      desc: "Complex features, system integrations, multi-window", 
      min: 20000, 
      max: 40000,
      tier: 2
    },
    { title: "Mobile App UI/UX Design", desc: "Complete design system, prototypes (Figma/Adobe XD)", min: 5000, max: 12000 },
    { title: "App Store Deployment", desc: "Publishing assistance for Play Store/App Store", min: 2000, max: 5000 },
    { title: "Push Notifications Setup", desc: "Firebase/OneSignal integration", min: 3000, max: 6000 },
    { title: "In-App Purchases", desc: "Payment integration for mobile apps", min: 5000, max: 10000 },
    { title: "Offline Data Sync", desc: "Local storage with cloud synchronization", min: 4000, max: 8000 },
    { title: "Geolocation Features", desc: "Maps integration, location tracking", min: 3000, max: 7000 },
    { title: "Camera/Media Integration", desc: "Photo/video capture, gallery access, processing", min: 2500, max: 5000 }
  ],
  addons: [
    { title: "WhatsApp/Contact plugin", desc: "Direct messaging or chat widget integration", min: 250, max: 500 },
    { title: "Google Sheets automation", desc: "Auto-save form data, dynamic updates", min: 1000, max: 2000 },
    { title: "Email automation", desc: "Scheduled reports, reminders via Gmail APIs", min: 1000, max: 2500 },
    { title: "Live database", desc: "Real-time data handling (MongoDB/Firebase)", min: 1500, max: 3000 },
    { title: "Admin dashboard / CMS", desc: "Custom UI for content or user management", min: 4000, max: 10000 },
    { title: "Payment Integration", desc: "Secure payment gateway setup (Razorpay/UPI)", min: 6000, max: 10000 },
    { title: "Analytics Setup", desc: "Track user behavior & traffic (GA4, Hotjar)", min: 800, max: 1500 }
  ]
}

// AI/Automation pricing data
const aiPricing: PricingData = {
  main: [
    { title: "Chatbot (LLM based)", desc: "Trained chatbot for site or internal use", min: 5000, max: 15000 },
    { title: "Custom Chatbot", desc: "Advanced trained chatbot", min: 10000, max: 20000 },
    { title: "OCR / Doc-to-Text", desc: "Process documents/images into searchable content", min: 4000, max: 10000 },
    { title: "Recommendation Systems", desc: "Personalized suggestions based on user behavior", min: 10000, max: 25000 },
    { title: "AI agent using N8N", desc: "Business automations using third-party tools", min: 20000, max: 50000 },
    { title: "Custom AI System", desc: "Compensation depends on complexity", min: 10000, max: 100000, custom: true },
    { title: "Content Writing (N8N)", desc: "Compensation depends on complexity", min: 5000, max: 30000, custom: true }
  ]
}

// Web3/Blockchain pricing data
const web3Pricing: PricingData = {
  main: [
    { title: "Smart Contract/DeFi", desc: "ERC-20/ERC-721 deployment on testnet/mainnet (Solidity/Vyper)", min: 5000, max: 15000 },
    { title: "NFT Minting Website", desc: "Web3-enabled site to mint & display NFTs", min: 10000, max: 25000 },
    { title: "Wallet Integration", desc: "Connect wallets (Metamask) to interact with dApp", min: 2000, max: 5000 },
    { title: "Blockchain UI/UX Frontend", desc: "React-based dApp interfaces", min: 5000, max: 12000 }
  ]
}

// Testing & QA pricing data
const testingPricing: PricingData = {
  main: [
    { title: "Manual Testing", desc: "Comprehensive testing across devices/browsers, bug docs", min: 2000, max: 5000 },
    { title: "Automated Testing Setup", desc: "Jest/Cypress/Selenium with CI/CD integration", min: 5000, max: 12000 },
    { title: "Unit Testing", desc: "Component/function level testing per module/feature", min: 3000, max: 7000 },
    { title: "Integration Testing", desc: "API and database testing, end-to-end flows", min: 4000, max: 10000 },
    { title: "Performance Testing", desc: "Load testing, stress testing, optimization", min: 5000, max: 12000 },
    { title: "Security Testing", desc: "Vulnerability assessment, penetration testing, audit", min: 8000, max: 20000 },
    { title: "Accessibility Testing (A11y)", desc: "WCAG compliance, screen reader, keyboard navigation", min: 3000, max: 8000 },
    { title: "Mobile App Testing", desc: "Cross-device testing (iOS/Android), different sizes/OS", min: 4000, max: 10000 },
    { title: "User Acceptance Testing (UAT)", desc: "Facilitate UAT, gather feedback, iterate", min: 2500, max: 6000 },
    { title: "Regression Testing", desc: "Re-testing after updates (per cycle)", min: 2000, max: 5000 },
    { title: "Test Documentation", desc: "Test cases, test plans, and bug reports", min: 1500, max: 4000 }
  ]
}

// Maintenance & Hosting pricing data
const maintenancePricing: PricingData = {
  main: [
    { title: "Monthly Maintenance", desc: "Bug fixes, small changes (1-2 hrs/week)", min: 1500, max: 4000, monthly: true },
    { title: "Deployment & Hosting Setup", desc: "Domain setup, Vercel/Netlify/Hostinger/GCP/AWS/Azure", min: 1000, max: 4500 },
    { title: "Content Updates", desc: "Adding/changing site content (per hour)", min: 500, max: 1000, hourly: true }
  ]
}

type Currency = 'INR' | 'USD' | 'EUR'

const exchangeRates: Record<Currency, number> = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011
}

const currencySymbols: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€'
}

export default function PricingCalculatorSystem() {
  const router = useRouter()
  const pathname = usePathname()
  
  // Determine current page from pathname
  const getCurrentPageFromPath = (): PageId => {
    if (!pathname) return 'website'
    const page = pathname.split('/').pop() || ''
    const found = calculatorPages.find(p => p.id === page)
    return found ? found.id : 'website'
  }
  
  const [currentPage, setCurrentPage] = useState<PageId>('website')
  const [selectedItems, setSelectedItems] = useState<PricingItem[]>([])
  const [maintenanceItems, setMaintenanceItems] = useState<PricingItem[]>([])
  const [currency, setCurrency] = useState<Currency>('INR')

  // Update currentPage when pathname changes
  useEffect(() => {
    setCurrentPage(getCurrentPageFromPath())
  }, [pathname])

  const formatCurrency = (amount: number, curr: Currency): string => {
    const converted = Math.round(amount * exchangeRates[curr])
    return `${currencySymbols[curr]}${converted.toLocaleString()}`
  }

  const calculateTotal = (): string => {
    if (selectedItems.length === 0 && maintenanceItems.length === 0) {
      return 'Select items'
    }

    let totalMin = 0
    let totalMax = 0

    selectedItems.forEach(item => {
      totalMin += item.min
      totalMax += item.max
    })

    maintenanceItems.forEach(item => {
      totalMin += item.min
      totalMax += item.max
    })

    const discount = 0.85
    totalMin = Math.round(totalMin * discount)
    totalMax = Math.round(totalMax * discount)

    return `${formatCurrency(totalMin, currency)} - ${formatCurrency(totalMax, currency)}`
  }

  const toggleItem = (item: PricingItem, isMaintenance: boolean = false): void => {
    if (isMaintenance) {
      const exists = maintenanceItems.find(i => i.title === item.title)
      if (exists) {
        setMaintenanceItems(maintenanceItems.filter(i => i.title !== item.title))
      } else {
        setMaintenanceItems([...maintenanceItems, item])
      }
    } else {
      const exists = selectedItems.find(i => i.title === item.title)
      
      // Check if this is a tiered item (website or app main services)
      if (item.tier !== undefined) {
        if (exists) {
          // Deselect this item
          setSelectedItems(selectedItems.filter(i => i.title !== item.title))
        } else {
          // Remove any other items with tier property (exclusive selection for main services)
          const nonTieredItems = selectedItems.filter(i => i.tier === undefined)
          // Add the new tiered item
          setSelectedItems([...nonTieredItems, item])
        }
      } else {
        // Regular toggle for non-tiered items (addons, maintenance, etc.)
        if (exists) {
          setSelectedItems(selectedItems.filter(i => i.title !== item.title))
        } else {
          setSelectedItems([...selectedItems, item])
        }
      }
    }
  }

  const isSelected = (item: PricingItem, isMaintenance: boolean = false): boolean => {
    if (isMaintenance) {
      return maintenanceItems.some(i => i.title === item.title)
    }
    return selectedItems.some(i => i.title === item.title)
  }

  const getIncludedItems = (): string[] => {
    const baseItems = ['Sitemap', 'Custom design', 'Wireframes', 'Prototype', 'Responsive layout', 'Testing & go-live']
    const customItems: string[] = []

    let totalMax = 0
    selectedItems.forEach(item => { totalMax += item.max })
    maintenanceItems.forEach(item => { totalMax += item.max })
    
    if (totalMax > 50000) {
      customItems.push('120 days premium support')
    } else if (totalMax > 30000) {
      customItems.push('90 days support')
    } else if (totalMax > 15000) {
      customItems.push('60 days support')
    } else {
      customItems.push('30 days support')
    }

    customItems.push('Comprehensive training')
    customItems.push('Documentation')
    customItems.push('24/7 support for first week - FREE')

    return [...baseItems, ...customItems]
  }

  const getCurrentPricingData = (): PricingData => {
    switch (currentPage) {
      case 'website': return websitePricing
      case 'app': return appPricing
      case 'ai': return aiPricing
      case 'web3': return web3Pricing
      case 'testing': return testingPricing
      case 'maintenance': return maintenancePricing
      default: return websitePricing
    }
  }

  const handlePageChange = (pageId: PageId): void => {
    setCurrentPage(pageId)
    setSelectedItems([])
    setMaintenanceItems([])
    const page = calculatorPages.find(p => p.id === pageId)
    if (page) {
      router.push(page.path)
    }
  }

  const pricingData = getCurrentPricingData()
  const currentPageData = calculatorPages.find(p => p.id === currentPage)

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Hyperspeed effectOptions={{
          colors: {
            roadColor: 0x0a0a0a,
            islandColor: 0x1a0a1a,
            background: 0x000000,
            shoulderLines: 0xff00ff,
            brokenLines: 0x00ffff,
            leftCars: [0xff0080, 0xff00ff, 0x8000ff],
            rightCars: [0x00ffff, 0x0080ff, 0x8000ff],
            sticks: 0xff00ff
          }
        }} />
      </div>

      <div className="min-h-screen relative text-white py-10 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-5 relative inline-block">
              <span className="bg-gradient-to-r from-lime-300 to-cyan-400 bg-clip-text text-transparent">
                DevGeeks Pricing Calculator
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/5 h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent"></div>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
              Select a service category and customize your project requirements. All prices are base estimates and subject to final scope discussion.
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {calculatorPages.map((page) => (
              <button
                key={page.id}
                onClick={() => handlePageChange(page.id)}
                className={`glass-card px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                  currentPage === page.id ? 'ring-2 ring-lime-300 bg-lime-300/10' : ''
                }`}
              >
                <span className="text-2xl">{page.icon}</span>
                <span className="font-semibold">{page.title}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start relative">
            {/* Left Section - Service Selection */}
            <div className="space-y-10">
              <div className="glass-card p-10 rounded-2xl">
                <h2 className="text-3xl font-bold text-lime-300 mb-3">
                  {currentPageData?.icon} {currentPageData?.title}
                </h2>
                <p className="text-gray-400 mb-8">Select the services you need for your project</p>

                {/* Main Services */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-lime-300 mb-5">
                    Main Services {pricingData.main[0]?.tier !== undefined && 
                    <span className="text-sm font-normal text-gray-400 ml-2">(Select one)</span>}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {pricingData.main.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => toggleItem(item)}
                        className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 relative ${
                          isSelected(item) ? 'ring-2 ring-lime-300' : ''
                        }`}
                      >
                        {isSelected(item) && (
                          <div className="absolute top-4 right-4 w-6 h-6 bg-lime-300 rounded-full flex items-center justify-center text-black font-bold text-sm">
                            ✓
                          </div>
                        )}
                        <div className="font-semibold text-white text-lg mb-2">{item.title}</div>
                        <div className="text-gray-400 text-sm mb-3 leading-snug">{item.desc}</div>
                        <div className="text-lime-300 font-semibold">
                          {item.monthly ? `${formatCurrency(item.min, currency)} - ${formatCurrency(item.max, currency)}/month` :
                           item.hourly ? `${formatCurrency(item.min, currency)} - ${formatCurrency(item.max, currency)}/hour` :
                           `${formatCurrency(item.min, currency)} - ${formatCurrency(item.max, currency)}${item.max >= 25000 ? '+' : ''}`}
                          {item.custom && <span className="text-xs text-gray-400 ml-2">(Custom quote)</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add-ons (only for website and app pages) */}
                {pricingData.addons && (
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-lime-300 mb-5">🚀 Add-on Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {pricingData.addons.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => toggleItem(item)}
                          className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 relative ${
                            isSelected(item) ? 'ring-2 ring-lime-300' : ''
                          }`}
                        >
                          {isSelected(item) && (
                            <div className="absolute top-4 right-4 w-6 h-6 bg-lime-300 rounded-full flex items-center justify-center text-black font-bold text-sm">
                              ✓
                            </div>
                          )}
                          <div className="font-semibold text-white text-lg mb-2">{item.title}</div>
                          <div className="text-gray-400 text-sm mb-3 leading-snug">{item.desc}</div>
                          <div className="text-lime-300 font-semibold">
                            {formatCurrency(item.min, currency)} - {formatCurrency(item.max, currency)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Maintenance Options (show on all pages except maintenance page) */}
                {currentPage !== 'maintenance' && (
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-lime-300 mb-5">🔧 Maintenance & Hosting</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {maintenancePricing.main.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => toggleItem(item, true)}
                          className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 relative ${
                            isSelected(item, true) ? 'ring-2 ring-cyan-400' : ''
                          }`}
                        >
                          {isSelected(item, true) && (
                            <div className="absolute top-4 right-4 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                              ✓
                            </div>
                          )}
                          <div className="font-semibold text-white text-lg mb-2">{item.title}</div>
                          <div className="text-gray-400 text-sm mb-3 leading-snug">{item.desc}</div>
                          <div className="text-cyan-400 font-semibold">
                            {item.monthly ? `${formatCurrency(item.min, currency)} - ${formatCurrency(item.max, currency)}/month` :
                             item.hourly ? `${formatCurrency(item.min, currency)} - ${formatCurrency(item.max, currency)}/hour` :
                             `${formatCurrency(item.min, currency)} - ${formatCurrency(item.max, currency)}`}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="glass-card p-6 rounded-xl border-l-4 border-lime-300">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Note:</strong> Final pricing depends on exact scope & timelines. All projects include up to 2-3 rounds of client feedback. We work with clear documentation, GitHub repos, and collaborative tools like Figma, Notion, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Price Summary */}
            <div className="glass-card p-10 rounded-2xl sticky top-20 self-start relative">
              <div className="absolute -top-4 right-5 bg-lime-300 text-black px-5 py-2 rounded-full font-bold text-lg transform rotate-3">
                15% off<br/>for new customers
              </div>
              
              <div className="text-gray-400 text-sm uppercase tracking-widest mb-2">ESTIMATED TOTAL</div>
              <div className="text-5xl font-bold text-lime-300 mb-5">{calculateTotal()}</div>
              
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="w-full bg-black/50 border-2 border-lime-300 rounded-lg p-3 text-lime-300 font-semibold mb-5 cursor-pointer"
              >
                <option value="INR">INR ₹</option>
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
              </select>

              <div className="text-gray-400 text-sm mb-8 leading-relaxed">
                15% discount included for new customers.<br/>Prices may vary depending on your location.
              </div>

              <div className="border-t border-gray-700 pt-8 mb-8">
                <h3 className="text-xl font-semibold mb-5">Included in your project:</h3>
                <ul className="space-y-2">
                  {getIncludedItems().map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-lime-300 text-xl">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-lime-300 hover:bg-lime-400 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-300/50 uppercase tracking-wider text-lg flex items-center justify-center gap-3 mb-4">
                Discuss your project →
              </button>

              <div className="text-center text-sm text-gray-400">
                📧 agency@devgeeks.com<br/>
                📱 +91-XXXXXXX<br/>
                🌐 DevGeeks.in
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 