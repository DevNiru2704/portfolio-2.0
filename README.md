# 🚀 Nirmalya Mandal - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a single-page application experience with SEO-optimized routing, accessibility compliance, and comprehensive analytics.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface with dark/light theme support
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance Optimized**: Fast loading with Next.js 15 and optimized assets
- 🔍 **SEO Optimized**: Structured data, meta tags, and search engine friendly
- ♿ **Accessibility Compliant**: WCAG 2.1 AA standards with proper heading hierarchy
- 📊 **Analytics Ready**: Google Analytics 4 integration with custom event tracking
- 🎯 **Interactive Elements**: 3D cards, particle system, and smooth animations
- 🛠️ **Developer Friendly**: TypeScript, ESLint, and modern development practices

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React, React Icons
- **Animations**: CSS transitions and transforms
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel 

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your Google Analytics ID:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-GA-ID
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── icons/             # Favicon and app icons
│   ├── sitemap.xml        # Generated sitemap
│   └── site.webmanifest   # PWA manifest
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── about/         # About page route
│   │   ├── contact/       # Contact page route
│   │   ├── experience/    # Experience page route
│   │   ├── projects/      # Projects page route
│   │   ├── research/      # Research page route
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   ├── robots.ts      # Dynamic robots.txt
│   │   └── sitemap.ts     # Dynamic sitemap
│   ├── components/        # React components
│   │   ├── analytics/     # Analytics components
│   │   ├── layout/        # Layout components
│   │   ├── seo/          # SEO components
│   │   └── shared/       # Reusable components
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── styles/           # Additional styles
├── .env.local            # Environment variables
├── middleware.ts         # Next.js middleware
└── package.json         # Dependencies
```

## 🎯 Key Components

### Core Pages
- **Home**: Hero section with interactive elements
- **About**: Personal information and skills
- **Experience**: Professional work history
- **Projects**: Portfolio showcase
- **Research**: Academic work and publications
- **Contact**: Contact information and social links

### Interactive Features
- **3D Cards**: Hover effects with perspective transforms
- **Particle System**: Animated background particles
- **Skill Constellation**: Interactive skill visualization
- **Live Code Simulation**: Animated typing effect
- **Theme Toggle**: Light/dark/system theme support

## 🔍 SEO & Performance

### SEO Features
- ✅ **Structured Data**: JSON-LD schemas for Person, Website, and Organization
- ✅ **Meta Tags**: Page-specific titles, descriptions, and keywords
- ✅ **Open Graph**: Rich social media sharing
- ✅ **Twitter Cards**: Enhanced Twitter sharing
- ✅ **Canonical URLs**: Proper URL canonicalization
- ✅ **Dynamic Sitemap**: Auto-generated sitemap.xml
- ✅ **Robots.txt**: Dynamic robots.txt generation

### Performance Optimizations
- ✅ **Next.js Image**: Optimized image loading
- ✅ **Lazy Loading**: Non-critical resource optimization
- ✅ **Code Splitting**: Automatic code splitting
- ✅ **Font Optimization**: Inter font with next/font
- ✅ **Core Web Vitals**: Performance monitoring

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- ✅ **Heading Hierarchy**: Proper h1→h2→h3 structure
- ✅ **Color Contrast**: 4.5:1 ratio for normal text, 3:1 for large text
- ✅ **Focus Management**: Visible focus indicators
- ✅ **Keyboard Navigation**: Full keyboard accessibility
- ✅ **Screen Reader Support**: Semantic HTML and ARIA labels
- ✅ **Motion Preferences**: Respects prefers-reduced-motion

### Accessibility Features
- **High Contrast Mode**: Support for high contrast preferences
- **Reduced Motion**: Respects user motion preferences
- **Focus Indicators**: Clear focus states for all interactive elements
- **Alt Text**: Descriptive alt text for all images
- **Semantic HTML**: Proper HTML structure and landmarks

## 📊 Analytics & Tracking

### Google Analytics 4 Integration
- **Page Views**: Automatic page view tracking
- **Custom Events**: Navigation, social clicks, theme changes
- **User Interactions**: Project views, skill interactions
- **Performance**: Core Web Vitals monitoring

### Tracked Events
- Navigation between sections
- Social media link clicks
- Email contact clicks
- Theme toggle usage
- Project link interactions
- Skill constellation interactions

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics ID
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms
- **Netlify**: Add env vars in Site Settings → Environment Variables
- **Railway**: Add variables in Variables tab
- **Render**: Add env vars in Environment tab

### Environment Variables
```env
# Google Analytics (required for production)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-GA-ID
```

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting with Next.js config
- **Prettier**: Code formatting (recommended)
- **Husky**: Git hooks for quality checks (optional)

### Adding New Sections
1. Create component in `src/pages/`
2. Add route in `src/app/[section]/page.tsx`
3. Update navigation in `src/components/layout/Navigation.tsx`
4. Add metadata in `src/lib/metadata.ts`
5. Update sitemap in `src/app/sitemap.ts`


### Content Updates
- **Personal Info**: Update `src/pages/About.tsx`
- **Experience**: Modify `src/pages/Experience.tsx`
- **Projects**: Update `src/pages/Projects.tsx`
- **Contact**: Edit `src/pages/Contact.tsx`

### Styling
- **Global Styles**: `src/app/globals.css`
- **Component Styles**: Tailwind classes in components
- **Custom Styles**: Add to `src/styles/` directory

## 📱 Progressive Web App (PWA)

The portfolio includes PWA features:
- **Web App Manifest**: `public/site.webmanifest`
- **App Icons**: Various sizes in `public/`
- **Offline Support**: Service worker ready (optional)

## 🔧 Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed
- Check TypeScript errors with `npm run lint`
- Verify environment variables are set

**Analytics Not Working**
- Check `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- Verify GA ID format: `G-XXXXXXXXXX`
- Check browser network tab for GA requests

**Styling Issues**
- Clear `.next` cache: `rm -rf .next`
- Restart development server
- Check Tailwind CSS configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/portfolio/issues).

## 📞 Contact

- **Website**: [nirmalyamandal.me](https://nirmalyamandal.me)
- **Email**: nirmalyabiz2004@gmail.com
- **LinkedIn**: [Nirmalya Mandal](https://www.linkedin.com/in/nirmalya-mandal-9b2475313/)
- **GitHub**: [@DevNiru2704](https://github.com/DevNiru2704)
- **Twitter**: [@Nirmalya2709](https://x.com/Nirmalya2709)

---

⭐ **Star this repository** if you found it helpful!

Built with ❤️ by [Nirmalya Mandal](https://nirmalyamandal.me)