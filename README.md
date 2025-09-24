# DevGeeks 

A modern Next.js website with glassmorphism navigation, 3D animations, and interactive components.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage (main component merger)
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── PillNav.tsx       # Glassmorphism navigation
│   ├── PillNav.css       # Navigation styles
│   ├── Lanyard.tsx       # 3D lanyard animation
│   ├── Lanyard.css       # Lanyard styles
│   ├── liquid-ether-background.tsx # WebGL fluid background
│   ├── liquid-ether-background.css # Background styles
│   ├── hero.tsx          # Hero section
│   ├── features.tsx      # Features section
│   ├── pricing.tsx       # Pricing section
│   ├── site-header.tsx   # Main header component
│   └── ...
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── assets/lanyard/   # 3D model assets
│   ├── icons/           # SVG icons
│   └── images/          # Images
└── ...
```

## Image Assets Needed

Add the following images to `/public/images/`:

- `intuitive-1.png` - Product detail image
- `intuitive-2.png` - Product detail image  
- `top-rated-1.png` - Client work showcase
- `top-rated-2.png` - Client work showcase
- `skitbit-subtle-logo.png` - Logo for marquee
- `esj-subtle-logo.png` - Partner logo

## Key Components

- **PillNav**: Glassmorphism navigation bar with centered layout and smooth animations
- **Hero**: Phone grid with video previews
- **Features**: Glassmorphism cards with client testimonials
- **Lanyard**: Interactive 3D lanyard animation using Three.js and Rapier physics
- **LiquidEther**: WebGL fluid simulation background with mouse interaction
- **Logo Marquee**: Infinite scrolling brand logos
- **Pricing**: Three-tier pricing with modal examples
- **Footer**: App preview and social links

## Component Integration

All components are merged in `app/page.tsx` which serves as the main entry point:
- SiteHeader (contains PillNav)
- Hero section
- Features section
- Logo Marquee
- Pricing section
- Footer

## Customization

- Update colors in `tailwind.config.ts`
- Modify glassmorphism effects in `globals.css`
- Add your brand assets to `/public/`
- Configure analytics in `layout.tsx`

## Deployment

The site is optimized for deployment on Vercel, Netlify, or any static hosting platform.

```bash
npm run build
```