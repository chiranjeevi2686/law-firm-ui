# PNC Law Associates - Static Web Application

A professional, modern law firm website built with Next.js 16, Tailwind CSS v4, and TypeScript. This site is optimized for static generation (SSG) with no backend required.

## 🎯 Features

✅ **Static Generation (SSG)** - Fast, secure, and SEO-friendly
✅ **Multiple Practice Areas** - 5 practice areas with dedicated landing pages
✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
✅ **SEO Optimized** - Meta tags, Open Graph, structured data
✅ **Contact Forms** - Netlify Forms integration (no backend needed)
✅ **Testimonials** - Client success stories
✅ **Performance Ready** - Optimized images and assets

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── practice-areas/
│   │   ├── page.tsx            # Practice areas listing
│   │   └── [slug]/page.tsx      # Dynamic practice area pages
│   ├── layout.tsx               # Root layout with Header/Footer
│   └── globals.css              # Global styles
│
├── components/                   # Reusable React components
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer
│   ├── Hero.tsx                # Hero section
│   ├── PracticeAreasGrid.tsx    # Practice areas grid
│   ├── Testimonials.tsx        # Testimonials section
│   ├── WhyChooseUs.tsx         # Benefits section
│   ├── ContactForm.tsx         # Netlify Forms integration
│   └── index.ts                # Component exports
│
├── data/                        # Static data files (easy to migrate to CMS)
│   ├── practiceAreas.ts        # Practice areas definitions
│   ├── testimonials.ts         # Client testimonials
│   └── siteConfig.ts           # Site configuration
│
├── public/                      # Static assets
├── next.config.ts              # Next.js configuration (static export)
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── netlify.toml                # Netlify deployment configuration
└── package.json                # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔨 Development

### Build for Static Export

```bash
npm run build
```

This generates the `out/` directory with static HTML files ready for deployment.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build static site for production
- `npm run start` - Start production server (if not using static export)
- `npm run lint` - Run ESLint

## 📝 Adding/Editing Content

### Practice Areas

Edit `data/practiceAreas.ts`:
```typescript
export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    icon: "📊",
    description: "...",
    services: [...],
    details: "..."
  },
  // Add more practice areas
];
```

### Site Configuration

Edit `data/siteConfig.ts` to update:
- Firm name and contact info
- Navigation links
- SEO defaults
- Firm phone/email/address

### Testimonials

Edit `data/testimonials.ts` to add client testimonials.

## 📧 Contact Forms - Netlify Forms Setup

### Configuration

The contact form is pre-configured for Netlify Forms. No backend required!

**Step 1: Deploy to Netlify**
```bash
npm run build
```

**Step 2: Netlify will automatically detect the form**

The form in `app/contact/page.tsx` has `name="contact"` and `method="POST"` attributes. Netlify automatically recognizes this.

**Step 3: Add form notifications (optional)**

In Netlify dashboard:
1. Go to Forms → Contact Form
2. Add email notifications
3. Configure success page redirects

## 🎨 Customization

### Colors

Tailwind is configured with blue as the primary brand color. Modify in your CSS or components:

```tsx
// Blue theme
className="bg-blue-900" // Primary
className="bg-blue-600" // Secondary
className="text-blue-100" // Light text
```

### Fonts

Using Google Fonts (Geist). Change in `app/layout.tsx`.

### Logo/Branding

Update `components/Header.tsx` to add your firm logo:

```tsx
<Link href="/" className="font-bold text-2xl text-blue-900">
  {siteConfig.firm.name}
</Link>
```

## 🌐 SEO Optimization

The site includes:
- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured hierarchy
- ✅ Semantic HTML

### Page-Specific SEO

Each page exports metadata:

```typescript
export const metadata: Metadata = {
  title: "Page Title | PNC Law Associates",
  description: "Page description for search results",
};
```

## 📱 Mobile Responsiveness

All components use Tailwind's responsive classes:
- `sm:` - Small screens (640px)
- `md:` - Medium screens (768px)
- `lg:` - Large screens (1024px)

## ⚡ Performance

- **Lightweight** - No backend, fast delivery
- **Static Assets** - Cached aggressively
- **Image Optimization** - `next/image` ready
- **CSS** - Tailwind v4 with minimal bundle
- **Zero JavaScript** - Most pages are server-rendered HTML

### Lighthouse Scores Target
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`
4. Deploy!

Forms are automatically enabled.

### Vercel

1. Import repository
2. Zero configuration needed
3. Auto-deploys on git push

### Static Hosting (Netlify / GitHub Pages / S3)

```bash
npm run build
# Upload the 'out' folder to your host
```

## 📈 Future Enhancements

Currently static, but designed for easy migration to:

- **CMS** - Contentful, Sanity, or Strapi
- **Backend** - Node.js, Firebase, or other APIs
- **Database** - For client login, case tracking, etc.
- **Analytics** - Google Analytics, Hotjar, etc.
- **Email** - Automated client communication

### Migration Path

- Keep `/data` structure (will be API calls instead)
- Replace `export const` with `fetch()` calls
- Add ISR (Incremental Static Regeneration)
- Add dynamic API routes

## 🔐 Security

- Static files can't be hacked
- No database vulnerabilities
- No server-side exploits
- Honeypot field in forms (spam filtering)

## 📞 Support

For issues or questions:
1. Check existing issues
2. Update your Node.js version
3. Clear `.next` and `out` folders
4. Reinstall dependencies: `npm install`

## 📄 License

Copyright © 2024 PNC Law Associates. All rights reserved.

---

**Built with** ❤️ using [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [TypeScript](https://www.typescriptlang.org)
