import React, { useState } from 'react';

const StaggeredMenu = ({
  position = 'right',
  items = [],
  socialItems = [],
  displaySocials = false,
  displayItemNumbering = false,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = false,
  colors = ['#B19EEF', '#5227FF'],
  logoUrl = '',
  accentColor = '#ff6b6b',
  onMenuOpen = () => {},
  onMenuClose = () => {}
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      onMenuOpen();
    } else {
      onMenuClose();
    }
  };

  return (
    <div className={`fixed ${position === 'right' ? 'top-6 right-6' : 'top-6 left-6'} z-50`}>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="w-16 h-16 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{
          backgroundColor: isOpen && changeMenuColorOnOpen ? openMenuButtonColor : `${menuButtonColor}20`,
          color: isOpen && changeMenuColorOnOpen ? '#000' : menuButtonColor
        }}
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="w-8 h-8" />
          ) : (
            <span className="text-2xl font-bold">☰</span>
          )}
        </div>
      </button>

      {/* Menu Items */}
      <div className={`absolute ${position === 'right' ? 'right-0' : 'left-0'} top-20 space-y-4`}>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            aria-label={item.ariaLabel}
            className={`block px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg text-white font-medium transition-all duration-500 hover:scale-105 ${
              isOpen 
                ? 'opacity-100 translate-x-0 pointer-events-auto' 
                : 'opacity-0 translate-x-8 pointer-events-none'
            }`}
            style={{
              background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
              transitionDelay: isOpen ? `${index * 0.1}s` : '0s'
            }}
          >
            <div className="flex items-center gap-3">
              {displayItemNumbering && (
                <span className="text-sm opacity-70">0{index + 1}</span>
              )}
              <span>{item.label}</span>
            </div>
          </a>
        ))}

        {/* Social Items */}
        {displaySocials && socialItems.length > 0 && (
          <div className={`pt-4 space-y-2 transition-all duration-500 ${
            isOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
          style={{ transitionDelay: isOpen ? `${items.length * 0.1}s` : '0s' }}
          >
            <div className="text-white/60 text-sm px-6">Follow us</div>
            {socialItems.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-2 text-white/80 hover:text-white transition-colors duration-200 text-sm"
                style={{ color: accentColor }}
              >
                {social.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StaggeredMenu;