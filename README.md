# DevGeeks 
whoever devs works dont push the node modules here as you wont be able to but it will lead to you have to rewrite the git rewrite history





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
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── features.tsx      # Features section
│   ├── pricing.tsx       # Pricing section
│   └── ...
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── icons/           # SVG icons
│   └── images/          # Images (add your images here)
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

- **Hero**: Phone grid with video previews
- **Features**: Glassmorphism cards with client testimonials
- **Logo Marquee**: Infinite scrolling brand logos
- **Pricing**: Three-tier pricing with modal examples
- **Footer**: App preview and social links

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