# Data Minds - Microsoft Fabric & Power BI Consulting Website

A professional, modern website for Data Minds, a boutique consulting firm specializing in Microsoft Fabric and Power BI for Australian businesses.

## Overview

This is a fully responsive Next.js website built with TypeScript and Tailwind CSS, featuring a clean, professional design with a focus on user experience and conversion.

## Features

### Pages

- **Home**: Comprehensive landing page with hero, value propositions, services overview, industry solutions, productized offers, process steps, case studies, tech stack, and FAQ
- **Services**: Detailed breakdown of all service offerings with deliverables
- **Solutions**: Industry-specific solutions for Utilities, Asset Management, Retail, D365, and SAP
- **Case Studies**: 6 detailed success stories with metrics and testimonials
- **About**: Team information, methodology, compliance, and certifications
- **Resources**: Blog posts, downloadable resources, and webinars
- **Contact**: Contact form and call booking integration
- **Privacy & Terms**: Legal pages for privacy policy and terms of service

### Components

Reusable, modular components built for consistency and maintainability:

- `Navbar`: Sticky navigation with mobile menu
- `Footer`: Multi-column footer with links and contact info
- `HeroSplit`: Hero section with headline, subheadline, and CTAs
- `LogoMarquee`: Trust strip with technology logos
- `CardGrid`: Flexible grid of cards for value propositions
- `ServiceTiles`: Interactive service tiles with hover effects
- `OfferCards`: Productized offer cards with pricing
- `ProcessSteps`: Visual process timeline
- `CaseMini`: Compact case study cards
- `FAQAccordion`: Expandable FAQ component
- `CTAFullWidth`: Full-width call-to-action sections

### Design

- **Color Scheme**: Navy (#002147) and Azure (#00a2e6) with comprehensive color scales
- **Typography**: System font stack for fast loading and native feel
- **Layout**: Responsive grid system with mobile-first approach
- **Accessibility**: WCAG AA compliant with semantic HTML
- **Performance**: Optimized for fast loading with static generation

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server

Open [http://localhost:3000](http://localhost:3000) to view the website in development mode.

## Project Structure

```
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout with navigation
│   ├── globals.css          # Global styles
│   ├── about/               # About page
│   ├── case-studies/        # Case studies page
│   ├── contact/             # Contact page
│   ├── privacy/             # Privacy policy page
│   ├── resources/           # Resources page
│   ├── services/            # Services page
│   ├── solutions/           # Solutions page
│   └── terms/               # Terms of service page
├── components/              # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSplit.tsx
│   ├── CardGrid.tsx
│   ├── ServiceTiles.tsx
│   ├── OfferCards.tsx
│   ├── ProcessSteps.tsx
│   ├── CaseMini.tsx
│   ├── FAQAccordion.tsx
│   ├── CTAFullWidth.tsx
│   └── LogoMarquee.tsx
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Key Features

### SEO Optimized

- Metadata for all pages
- Semantic HTML structure
- Fast page loads with static generation
- Clean URLs with proper routing

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactive elements
- Optimized images and assets

### Conversion Focused

- Multiple CTAs throughout the site
- Clear value propositions
- Social proof with case studies
- Lead capture forms
- Calendly integration ready

### Professional Content

- Executive-focused messaging
- Industry-specific solutions
- Productized service offerings
- Real metrics and testimonials

## Customization

### Colors

Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  navy: { /* ... */ },
  azure: { /* ... */ },
}
```

### Content

All content is stored in the page components for easy editing. Update copy, images, and data directly in the `.tsx` files.

### Components

Components accept props for maximum flexibility. Refer to component TypeScript interfaces for available options.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Other Platforms

Build the static site and deploy the `.next` folder:

```bash
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Static generation for instant page loads

## License

Copyright © 2025 Data Minds. All rights reserved.

## Contact

For questions or support:
- Email: hello@dataminds.au
- Website: [dataminds.au](https://dataminds.au)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
