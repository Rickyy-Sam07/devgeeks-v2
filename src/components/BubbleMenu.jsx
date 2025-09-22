import React, { useState } from 'react';

const BubbleMenu = ({
  logo,
  items = [],
  menuAriaLabel = "Toggle navigation",
  menuBg = "#ffffff",
  menuContentColor = "#111111",
  useFixedPosition = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const positions = [
    { x: -120, y: -60 },  // home (top-left)
    { x: 0, y: -80 },     // about (top-center)
    { x: 120, y: -60 },   // projects (top-right)
    { x: -80, y: 40 },    // blog (bottom-left)
    { x: 80, y: 40 }      // contact (bottom-right)
  ];

  return (
    <nav className={`bubble-menu ${useFixedPosition ? 'fixed' : 'relative'} top-6 left-6 z-50`}>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        aria-label={menuAriaLabel}
        className={`menu-toggle relative w-16 h-16 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-45' : ''
        }`}
        style={{
          backgroundColor: `${menuBg}20`,
          color: menuContentColor
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          {logo}
        </div>
      </button>

      {/* Menu Items */}
      <div className="menu-items absolute top-0 left-0">
        {items.map((item, index) => {
          const pos = positions[index] || { x: 0, y: 0 };
          
          return (
            <a
              key={index}
              href={item.href}
              aria-label={item.ariaLabel}
              className={`menu-item absolute px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center text-sm font-medium transition-all duration-500 hover:scale-110 whitespace-nowrap ${
                isOpen 
                  ? 'opacity-100 scale-100 pointer-events-auto' 
                  : 'opacity-0 scale-0 pointer-events-none'
              }`}
              style={{
                backgroundColor: menuBg,
                color: menuContentColor,
                transform: `translate(${pos.x}px, ${pos.y}px) rotate(${item.rotation || 0}deg)`,
                transitionDelay: isOpen ? `${index * 0.1}s` : '0s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = item.hoverStyles?.bgColor || '#3b82f6';
                e.target.style.color = item.hoverStyles?.textColor || '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = menuBg;
                e.target.style.color = menuContentColor;
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BubbleMenu;