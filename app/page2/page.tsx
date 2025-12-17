"use client"

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

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

const pricingData = {
  websiteDev: [
    { title: "Static Website", desc: "Basic HTML/CSS/JS, 3-5 pages, mobile responsive", min: 4000, max: 7000 },
    { title: "Dynamic Website", desc: "Full-stack with backend (depends on complexity)", min: 10000, max: 25000 },
    { title: "Single-Page App (SPA)", desc: "React/Next.js with routing, API integration", min: 10000, max: 18000 },
    { title: "E-commerce Site", desc: "Product catalog, cart, payment gateway", min: 15000, max: 30000 },
    { title: "Blog/CMS Integration", desc: "Blog engine with markdown/WYSIWYG + admin", min: 5000, max: 10000 }
  ],
  addons: [
    { title: "WhatsApp/Contact plugin", desc: "Direct messaging or chat widget integration", min: 250, max: 500 },
    { title: "Google Sheets automation", desc: "Auto-save form data, dynamic updates", min: 1000, max: 2000 },
    { title: "Email automation", desc: "Scheduled reports, reminders via Gmail APIs", min: 1000, max: 2500 },
    { title: "Live database", desc: "Real-time data handling (MongoDB/Firebase)", min: 1500, max: 3000 },
    { title: "Admin dashboard / CMS", desc: "Custom UI for content or user management", min: 4000, max: 10000 },
    { title: "Payment Integration", desc: "Secure payment gateway setup (Razorpay/UPI)", min: 6000, max: 10000 },
    { title: "SEO Optimization", desc: "Metadata, structured data, keyword targeting", min: 2500, max: 5000 },
    { title: "Analytics Setup", desc: "Track user behavior & traffic (GA4, Hotjar)", min: 800, max: 1500 }
  ],
  ai: [
    { title: "Chatbot (LLM based)", desc: "Trained chatbot for site or internal use", min: 5000, max: 15000 },
    { title: "Custom Chatbot", desc: "Advanced trained chatbot", min: 10000, max: 20000 },
    { title: "OCR / Doc-to-Text", desc: "Process documents/images into searchable content", min: 4000, max: 10000 },
    { title: "Recommendation Systems", desc: "Personalized suggestions based on user behavior", min: 10000, max: 25000 },
    { title: "AI agent using N8N", desc: "Business automations using third-party tools", min: 20000, max: 50000 }
  ],
  web3: [
    { title: "Smart Contract", desc: "ERC-20/ERC-721 deployment on testnet/mainnet", min: 5000, max: 15000 },
    { title: "NFT Minting Website", desc: "Web3-enabled site to mint & display NFTs", min: 10000, max: 25000 },
    { title: "Wallet Integration", desc: "Connect wallets to interact with dApp", min: 2000, max: 5000 },
    { title: "Blockchain UI/UX", desc: "React-based dApp interfaces", min: 5000, max: 12000 }
  ]
}

const exchangeRates = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011
}

const currencySymbols = {
  INR: '₹',
  USD: '$',
  EUR: '€'
}

export default function PricingDetailsPage() {
  const [packageType, setPackageType] = useState('standard')
  const [selectedItems, setSelectedItems] = useState([])
  const [currency, setCurrency] = useState('INR')
  const headerRef = useRef<HTMLDivElement | null>(null)
  const [isFixed, setIsFixed] = useState(false)

  const formatCurrency = (amount, curr) => {
    const converted = Math.round(amount * exchangeRates[curr])
    return `${currencySymbols[curr]}${converted.toLocaleString()}`
  }

  const calculateTotal = () => {
    if (packageType === 'standard') {
      const discount = 0.85
      const min = Math.round(4000 * discount)
      const max = Math.round(7000 * discount)
      return `${formatCurrency(min, currency)} - ${formatCurrency(max, currency)}`
    }

    if (selectedItems.length === 0) {
      return 'Select items'
    }

    let totalMin = 0
    let totalMax = 0

    selectedItems.forEach(item => {
      totalMin += item.min
      totalMax += item.max
    })

    const discount = 0.85
    totalMin = Math.round(totalMin * discount)
    totalMax = Math.round(totalMax * discount)

    return `${formatCurrency(totalMin, currency)} - ${formatCurrency(totalMax, currency)}`
  }

  const toggleItem = (item) => {
    const exists = selectedItems.find(i => i.title === item.title)
    if (exists) {
      setSelectedItems(selectedItems.filter(i => i.title !== item.title))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const isSelected = (item) => selectedItems.some(i => i.title === item.title)

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return

      const rect = headerRef.current.getBoundingClientRect()
      const headerPassed = rect.bottom <= 0

      console.log('Scroll position:', window.scrollY, 'Header bottom:', rect.bottom, 'Should fix:', headerPassed)
      setIsFixed(headerPassed)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          <div ref={headerRef} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-5 relative inline-block">
              <span className="bg-gradient-to-r from-lime-300 to-cyan-400 bg-clip-text text-transparent">
                Website Calculator
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/5 h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent"></div>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
              Use our calculator below to get an estimated cost for your web design project. This tool provides approximate pricing based on your selected requirements and serves as a starting point for planning your project. <span className="font-semibold text-white">The results provided by this calculator are estimates only and do not constitute a binding commercial offer or final quote.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start relative">
            {/* Left Section */}
            <div className="space-y-10">
              {/* Package Cards */}
              <div className="grid md:grid-cols-2 gap-5">
                <div
                  onClick={() => {
                    setPackageType('custom')
                    setSelectedItems([])
                  }}
                  className={`glass-card p-10 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden group ${
                    packageType === 'custom' ? 'ring-2 ring-lime-300' : ''
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-lime-300 transform transition-transform duration-300 ${
                    packageType === 'custom' ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                  <h3 className="text-3xl font-bold text-lime-300 mb-4">Custom Website</h3>
                  <p className="text-gray-300">Perfect for a tailored experience, with advanced design and feature customisation.</p>
                </div>

                <div
                  onClick={() => {
                    setPackageType('standard')
                    setSelectedItems([])
                  }}
                  className={`glass-card p-10 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden group ${
                    packageType === 'standard' ? 'ring-2 ring-lime-300' : ''
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-lime-300 transform transition-transform duration-300 ${
                    packageType === 'standard' ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                  <h3 className="text-3xl font-bold text-lime-300 mb-4">Standard Website</h3>
                  <p className="text-gray-300">Ideal if you want a clean, efficient site using only Odoo's native features.</p>
                </div>
              </div>

              {/* Standard Section */}
              {packageType === 'standard' && (
                <div className="glass-card p-12 rounded-2xl text-center">
                  <h3 className="text-3xl font-bold text-lime-300 mb-5">Professional Static Website</h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    A clean, efficient website built with modern web technologies. Perfect for businesses looking for a professional online presence without complexity.
                  </p>

                  <div className="text-5xl font-bold text-lime-300 my-8">₹4,000 - ₹7,000</div>

                  <div className="grid md:grid-cols-2 gap-4 my-10 text-left">
                    {['3-5 responsive pages', 'Mobile-first design', 'HTML/CSS/JavaScript', 'Fast loading speed', 'SEO friendly structure', 'Contact form integration', 'Social media links', 'Google Maps integration'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-300">
                        <span className="text-lime-300 text-xl font-bold">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="glass-card p-6 rounded-xl border-l-4 border-lime-300 text-left">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">What's included:</strong> Complete website setup, domain configuration, hosting guidance, 30 days of free support, and basic training on content updates.
                    </p>
                  </div>
                </div>
              )}

              {/* Custom Section */}
              {packageType === 'custom' && (
                <div className="glass-card p-10 rounded-2xl">
                  <h2 className="text-3xl font-bold text-lime-300 mb-3">Which extra Features do you need?</h2>
                  <p className="text-gray-400 mb-8">Select the services you need for your custom website project</p>

                  {/* Website Development */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-lime-300 mb-5 flex items-center gap-3">
                      💼 Website Development
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {pricingData.websiteDev.map((item, i) => (
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
                            ₹{item.min.toLocaleString()} - ₹{item.max.toLocaleString()}{item.max >= 25000 ? '+' : ''}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-lime-300 mb-5 flex items-center gap-3">
                      🚀 Add-on Features
                    </h3>
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
                            ₹{item.min.toLocaleString()} - ₹{item.max.toLocaleString()}{item.max >= 3000 ? '+' : ''}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI/Automation */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-lime-300 mb-5 flex items-center gap-3">
                      🤖 AI / Automation
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {pricingData.ai.map((item, i) => (
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
                            ₹{item.min.toLocaleString()} - ₹{item.max.toLocaleString()}+
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Web3 */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-lime-300 mb-5 flex items-center gap-3">
                      ⛓️ Web3 / Blockchain
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {pricingData.web3.map((item, i) => (
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
                            ₹{item.min.toLocaleString()} - ₹{item.max.toLocaleString()}+
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-xl border-l-4 border-lime-300">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Note:</strong> The website app is included by default. For custom features that are not listed in this form, please contact the web design team. Final pricing depends on exact scope & timelines. All projects include up to 2-3 rounds of client feedback.
                    </p>
                  </div>
                </div>
              )}

              <div className="text-center text-gray-400">
                Learn more about our <a href="#" className="text-lime-300 border-b border-lime-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">standard</a> or <a href="#" className="text-lime-300 border-b border-lime-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">custom</a> websites.
              </div>
            </div>

            {/* Price Card */}
            <div className="glass-card p-10 rounded-2xl sticky top-20 self-start relative">
              <div className="absolute -top-4 right-5 bg-lime-300 text-black px-5 py-2 rounded-full font-bold text-lg transform rotate-3">
                15% off<br/>for new customers
              </div>
              
              <div className="text-gray-400 text-sm uppercase tracking-widest mb-2">TOTAL</div>
              <div className="text-5xl font-bold text-lime-300 mb-5">{calculateTotal()}</div>
              
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-black/50 border-2 border-lime-300 rounded-lg p-3 text-lime-300 font-semibold mb-5 cursor-pointer"
              >
                <option value="INR">INR ₹</option>
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
              </select>

              <div className="text-gray-400 text-sm mb-8 leading-relaxed">
                15% discount included.<br/>Prices may vary depending on your country.
              </div>

              <div className="border-t border-gray-700 pt-8 mb-8">
                <h3 className="text-xl font-semibold mb-5">Included in your pack:</h3>
                <ul className="space-y-2">
                  {['Sitemap', '10 page templates', 'Wireframes', 'Prototype', 'Custom theme integration', 'Responsive layout', 'Testing & go-live', 'Training'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-lime-300 text-xl">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-lime-300 hover:bg-lime-400 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-300/50 uppercase tracking-wider text-lg flex items-center justify-center gap-3">
                Discuss your project →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}