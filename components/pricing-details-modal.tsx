"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import Hyperspeed from "@/components/hyperspeed"

interface PricingDetailsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PricingDetailsModal({ open, onOpenChange }: PricingDetailsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl h-[90vh] p-0 border-0 bg-transparent overflow-hidden">
        <div className="relative w-full h-full">
          <SmoothCursor />
          <div className="absolute inset-0 -z-10">
            <Hyperspeed />
          </div>
          <div className="relative h-full overflow-y-auto text-white p-8 cursor-none">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-lime-300 mb-4">📄 Team Pricing Document – DevGeeks</h1>
                <p className="text-gray-300 max-w-3xl mx-auto">
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
                      <tbody className="space-y-2">
                        <tr className="border-b border-gray-700">
                          <td className="py-3 font-semibold">Static Website</td>
                          <td className="py-3">Basic HTML/CSS/JS, 3–5 pages, mobile responsive</td>
                          <td className="py-3">₹4,000 – ₹7,000</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 font-semibold">Dynamic Website</td>
                          <td className="py-3">Full-stack with backend (depends on complexity)</td>
                          <td className="py-3">₹10,000 – ₹25,000+</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 font-semibold">Single-Page App (SPA)</td>
                          <td className="py-3">React/Next.js with routing, API integration</td>
                          <td className="py-3">₹10,000 – ₹18,000</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 font-semibold">E-commerce Site</td>
                          <td className="py-3">Product catalog, cart, payment gateway</td>
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
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { feature: "WhatsApp/Contact plugin", desc: "Direct messaging or chat widget integration", price: "₹250 – ₹500" },
                      { feature: "Google Sheets/Forms automation", desc: "Auto-save form data, dynamic updates", price: "₹1,000 – ₹2,000" },
                      { feature: "Email automation", desc: "Scheduled reports, reminders via Gmail APIs", price: "₹1,000 – ₹2,500" },
                      { feature: "Live database", desc: "Real-time data handling (MongoDB/Firebase)", price: "₹1,500 – ₹3,000+" },
                      { feature: "Admin dashboard / CMS", desc: "Custom UI for content or user management", price: "₹4,000 – ₹10,000" },
                      { feature: "Payment Integration", desc: "Secure payment gateway setup (Razorpay/UPI)", price: "₹6,000 – ₹10,000" },
                      { feature: "SEO Optimization", desc: "Metadata, structured data, keyword targeting", price: "₹2,500 – ₹5,000" },
                      { feature: "Analytics Setup", desc: "Track user behavior & traffic (GA4, Hotjar)", price: "₹800 – ₹1,500" }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-800/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lime-300">{item.feature}</h3>
                        <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                        <p className="text-white font-semibold mt-2">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* AI/Automation */}
                <section className="glass-card p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold text-lime-300 mb-6">🔹 3. AI / Automation</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { feature: "Chatbot (LLM based)", desc: "Trained chatbot for site or internal use", price: "₹5,000 – ₹15,000+" },
                      { feature: "Custom Chatbot", desc: "Advanced trained chatbot for specific needs", price: "₹10,000 – ₹20,000+" },
                      { feature: "OCR / Doc-to-Text pipeline", desc: "Process documents into searchable content", price: "₹4,000 – ₹10,000" },
                      { feature: "Recommendation Systems", desc: "Personalized suggestions based on user behavior", price: "₹10,000 – ₹25,000+" },
                      { feature: "AI agent using N8N", desc: "Business automations using third-party tools", price: "₹20,000 – ₹50,000" },
                      { feature: "Customized AI system", desc: "Money depends on complexity", price: "Quote on request" }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-800/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lime-300">{item.feature}</h3>
                        <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                        <p className="text-white font-semibold mt-2">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Web3/Blockchain */}
                <section className="glass-card p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold text-lime-300 mb-6">🔹 4. Web3 / Blockchain Projects</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { feature: "Smart Contract (Solidity)", desc: "ERC-20/ERC-721 deployment on testnet/mainnet", price: "₹5,000 – ₹15,000+" },
                      { feature: "NFT Minting Website", desc: "Web3-enabled site to mint & display NFTs", price: "₹10,000 – ₹25,000+" },
                      { feature: "Wallet Integration", desc: "Connect wallets to interact with dApp (Metamask)", price: "₹2,000 – ₹5,000" },
                      { feature: "Blockchain UI/UX Frontend", desc: "React-based dApp interfaces", price: "₹5,000 – ₹12,000" }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-800/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lime-300">{item.feature}</h3>
                        <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                        <p className="text-white font-semibold mt-2">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Maintenance & Hosting */}
                <section className="glass-card p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold text-lime-300 mb-6">🔹 5. Maintenance & Hosting</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { feature: "Monthly Maintenance", desc: "Bug fixes, small changes (1–2 hrs/week)", price: "₹1,500 – ₹4,000/month" },
                      { feature: "Deployment & Hosting Setup", desc: "Domain setup, Vercel/Netlify/GCP/etc.", price: "₹1,000 – ₹2,500" },
                      { feature: "Content Updates", desc: "Adding/changing site content per hour", price: "₹500 – ₹1,000/hour" }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-800/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lime-300">{item.feature}</h3>
                        <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                        <p className="text-white font-semibold mt-2">{item.price}</p>
                      </div>
                    ))}
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
                <section className="glass-card p-6 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold text-lime-300 mb-4">📞 Contact Us</h2>
                  <p className="text-gray-300 mb-4">We're open to partnerships, agency subcontracting, and long-term support.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="mailto:Agency@devgeeks.com" className="text-lime-300 hover:underline">📧 Agency@devgeeks.com</a>
                    <a href="https://www.linkedin.com/groups/14694232/" className="text-lime-300 hover:underline">🌐 DevGeeks.dev</a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}