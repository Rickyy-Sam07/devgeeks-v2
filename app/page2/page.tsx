"use client"

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

export default function PricingDetailsPage() {
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
      <div className="min-h-screen relative text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-lime-300 mb-4">📄 Team Pricing Document – DevGeeks</h1>
            <p className="text-gray-300 max-w-3xl mx-auto italic">
              We are a team of Computer Science undergrads delivering high-quality web solutions — from simple static sites to advanced AI-integrated platforms. This document outlines our base pricing structure.
            </p>
          </div>

          <div className="space-y-12">
            {/* Website Development */}
            <section className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-lime-300 mb-6">🔹 1. Website Development</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 text-lime-300">Type</th>
                      <th className="text-left py-3 text-lime-300">Description</th>
                      <th className="text-left py-3 text-lime-300">Base Price (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Static Website</td>
                      <td className="py-3">Basic HTML/CSS/JS, 3–5 pages, mobile responsive</td>
                      <td className="py-3">₹4,000 – ₹7,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Dynamic Website</td>
                      <td className="py-3">Full-stack with backend (depends on the complexity)</td>
                      <td className="py-3">₹10,000 – ₹25,000+</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Single-Page App (SPA)</td>
                      <td className="py-3">React/Next.js with routing, API integration</td>
                      <td className="py-3">₹10,000 – ₹18,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">E-commerce Site</td>
                      <td className="py-3">Product catalog, cart, payment gateway (ex: amazon, flipkart etc)</td>
                      <td className="py-3">₹15,000 – ₹30,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Blog/CMS Integration</td>
                      <td className="py-3">Blog engine with markdown/WYSIWYG + admin controls</td>
                      <td className="py-3">₹5,000 – ₹10,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold">Custom Backend</td>
                      <td className="py-3">Charges depend on complexity</td>
                      <td className="py-3">₹15,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Add-on Features */}
            <section className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-lime-300 mb-6">🔹 2. Add-on Features</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 text-lime-300">Feature / Module</th>
                      <th className="text-left py-3 text-lime-300">Description</th>
                      <th className="text-left py-3 text-lime-300">Price Range (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">WhatsApp/Contact plugin</td>
                      <td className="py-3">Direct messaging or chat widget integration</td>
                      <td className="py-3">₹250 – ₹500</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Google Sheets/Forms automation</td>
                      <td className="py-3">Auto-save form data, dynamic Google Sheet updates</td>
                      <td className="py-3">₹1,000 – ₹2,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Email automation (weekly/monthly)</td>
                      <td className="py-3">Scheduled reports, reminders via Gmail APIs</td>
                      <td className="py-3">₹1,000 – ₹2,500</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Live database (MongoDB/Firebase)</td>
                      <td className="py-3">Real-time data handling</td>
                      <td className="py-3">₹1,500 – ₹3,000+</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Admin dashboard / CMS</td>
                      <td className="py-3">Custom UI for content or user management</td>
                      <td className="py-3">₹4,000 – ₹10,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Payment Integration (Razorpay/UPI)</td>
                      <td className="py-3">Secure payment gateway setup</td>
                      <td className="py-3">₹6,000 – ₹10,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">SEO Optimization</td>
                      <td className="py-3">Metadata, structured data, basic keyword targeting</td>
                      <td className="py-3">₹2,500 – ₹5,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold">Analytics Setup (GA4, Hotjar)</td>
                      <td className="py-3">Track user behavior & traffic</td>
                      <td className="py-3">₹800 – ₹1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* AI/Automation */}
            <section className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-lime-300 mb-6">🔹 3. AI / Automation</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 text-lime-300">AI / Tool Integration</th>
                      <th className="text-left py-3 text-lime-300">Description</th>
                      <th className="text-left py-3 text-lime-300">Price Range (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Chatbot (LLM based)</td>
                      <td className="py-3">Trained chatbot for site or internal use</td>
                      <td className="py-3">₹5,000 – ₹15,000+</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Custom Chatbot</td>
                      <td className="py-3">Trained chatbot for site or internal use</td>
                      <td className="py-3">₹10,000 – ₹20,000+</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">OCR / Doc-to-Text pipeline</td>
                      <td className="py-3">Process documents or images into searchable content</td>
                      <td className="py-3">₹4,000 – ₹10,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Recommendation Systems</td>
                      <td className="py-3">Personalized suggestions based on user behavior</td>
                      <td className="py-3">₹10,000 – ₹25,000+</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">AI agent using N8N</td>
                      <td className="py-3">Business automations using third-party tools</td>
                      <td className="py-3">₹20,000 – ₹50,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold">Customized system requiring AI</td>
                      <td className="py-3">Money depends on complexity</td>
                      <td className="py-3">Quote on request</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Web3/Blockchain */}
            <section className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-lime-300 mb-6">🔹 4. Web3 / Blockchain Projects</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 text-lime-300">Service</th>
                      <th className="text-left py-3 text-lime-300">Description</th>
                      <th className="text-left py-3 text-lime-300">Price Range (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Smart Contract (Solidity)</td>
                      <td className="py-3">ERC-20/ERC-721 deployment on testnet/mainnet</td>
                      <td className="py-3">₹5,000 – ₹15,000+</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">NFT Minting Website</td>
                      <td className="py-3">Web3-enabled site to mint & display NFTs</td>
                      <td className="py-3">₹10,000 – ₹25,000+</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Wallet Integration (Metamask)</td>
                      <td className="py-3">Connect wallets to interact with dApp</td>
                      <td className="py-3">₹2,000 – ₹5,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold">Blockchain UI/UX Frontend</td>
                      <td className="py-3">React-based dApp interfaces</td>
                      <td className="py-3">₹5,000 – ₹12,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Maintenance & Hosting */}
            <section className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-lime-300 mb-6">🔹 5. Maintenance & Hosting</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 text-lime-300">Service</th>
                      <th className="text-left py-3 text-lime-300">Description</th>
                      <th className="text-left py-3 text-lime-300">Price Range (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Monthly Maintenance</td>
                      <td className="py-3">Bug fixes, small changes (1–2 hrs/week)</td>
                      <td className="py-3">₹1,500 – ₹4,000/month</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-semibold">Deployment & Hosting Setup</td>
                      <td className="py-3">Domain setup, Vercel/Netlify/GCP/etc.</td>
                      <td className="py-3">₹1,000 – ₹2,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold">Content Updates (per hour)</td>
                      <td className="py-3">Adding/changing site content</td>
                      <td className="py-3">₹500 – ₹1,000/hour</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Notes */}
            <section className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-lime-300 mb-6">🔹 Notes</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Final pricing depends on exact scope & timelines.</li>
                <li>• All projects include up to 2–3 rounds of client feedback.</li>
                <li>• We work with clear documentation, GitHub repos, and collaborative tools like Figma, Notion, etc.</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-lime-300 mb-4">📞 Contact Us</h2>
              <p className="text-gray-300 mb-4 italic">We're open to partnerships, agency subcontracting, and long-term support.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:Agency@devgeeks.com" className="text-lime-300 hover:underline">📧 Agency@devgeeks.com</a>
                <span className="text-gray-400">|</span>
                <span className="text-gray-300">📱 +91-XXXXXXX</span>
                <span className="text-gray-400">|</span>
                <a href="https://devgeeks.dev" className="text-lime-300 hover:underline">🌐 DevGeeks.dev</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}