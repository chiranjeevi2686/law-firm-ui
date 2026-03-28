# Premier Law Firm Website

A modern, professional law firm website built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**.

## ✨ Features

- **Static Generation (SSG)** - Ultra-fast, secure, and SEO-optimized
- **5 Practice Areas** - Dedicated pages for each practice area
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Netlify Forms** - Contact forms without backend
- **Testimonials** - Display client success stories
- **Performance Ready** - Optimized for Lighthouse scores

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:3000
```

## 📦 Build & Deploy

```bash
# Build static site
npm run build

# Deploy to Netlify
# Connect GitHub repo → auto-deploy on push
# Build command: npm run build
# Publish directory: out
```

## 📁 Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage |
| `app/practice-areas/` | Practice area pages |
| `app/contact/page.tsx` | Contact form page |
| `components/` | Reusable React components |
| `data/` | Static content (practiceAreas, testimonials, siteConfig) |

## ✏️ Customize Content

### Update Firm Info
Edit `data/siteConfig.ts`:
```typescript
firm: {
  name: "Your Firm Name",
  phone: "+1 (555) 123-4567",
  email: "hello@yourfirm.com",
  address: "Your Address",
}
```

### Add Practice Areas
Edit `data/practiceAreas.ts` - add/edit practice area objects

### Add Testimonials
Edit `data/testimonials.ts` - add client testimonials

### Update Colors
Primary color is blue (`blue-600`, `blue-900`). Modify component classes to change theme.

## 🌍 Deployment

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repo in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `out`
5. **Forms work automatically!**

### Vercel
Simply import the repository - zero configuration needed.

## 📝 Contact Form

Pre-configured with **Netlify Forms** - no backend needed!

- Automatically detects form with `name="contact"`
- Emails sent directly to Netlify
- Add email notifications in Netlify dashboard

## 📊 SEO

All pages include:
- ✅ Meta titles and descriptions
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Canonical URLs
- ✅ Structured semantic HTML

## 🎨 Design

Built with **Tailwind CSS v4** - customize by editing:
- Component className attributes
- `tailwind.config.js`
- `app/globals.css`

## 📚 Documentation

See [README_DEPLOYMENT.md](README_DEPLOYMENT.md) for detailed documentation covering:
- Project structure
- Customization options
- Performance optimization
- Future migration to CMS/Backend
- Security considerations

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Netlify Docs](https://docs.netlify.com)

## 📄 License

Copyright © 2024 Premier Law Firm. All rights reserved.
