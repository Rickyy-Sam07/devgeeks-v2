import React from 'react';
import LiquidEther from './components/LiquidEther';
import StaggeredMenu from './components/StaggeredMenu';
import Lanyard from './components/Lanyard';

function App() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '#projects' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full Page Liquid Ether Background */}
      <div className="fixed inset-0 z-0">
        <LiquidEther 
          colors={['#5227FF', '#FF9FFC', '#B19EEF', '#00C9FF']}
          mouseForce={30}
          cursorSize={180}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.8}
          resolution={0.7}
          style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, pointerEvents: 'auto' }}
        />
      </div>

      {/* Navigation */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      {/* Lanyard Component */}
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pointer-events-none">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl pointer-events-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Geeks</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Where brilliant developers meet ambitious projects. Join the ultimate freelancing community for tech innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm">
                  Find Freelancers
                </button>
                <button className="px-8 py-4 backdrop-blur-md bg-white/20 text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
                  Post a Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="projects" className="py-20 px-6 pointer-events-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose DevGeeks?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                <p className="text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Precision Matching</h3>
                <p className="text-white/80">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scale Rapidly</h3>
                <p className="text-white/80">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 pointer-events-auto">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
                  <div className="text-white/80">Active Developers</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">5K+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                  <div className="text-white/80">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-6 pointer-events-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of developers and clients who trust DevGeeks for their freelancing needs.
              </p>
              <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                Join DevGeeks Today
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;