# Site Architecture

## Tech Stack Summary

### Frontend Framework
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite 5.4** - Build tool & dev server

### Routing & Navigation
- **React Router DOM 7.9** - Client-side routing

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **PostCSS** - CSS processing
- **Custom fonts** - Inter & Playfair Display (Google Fonts)

### UI Components & Icons
- **Lucide React** - Icon library
- **Framer Motion** - Animations

### Forms
- **React Hook Form 7.66** - Form management
- **Zod 4.1** - Schema validation
- **@hookform/resolvers** - Form validation integration

### SEO
- **React Helmet Async** - Dynamic meta tags
- **JSON-LD structured data** - Schema.org markup
- **Noscript fallback** - Content for non-JS crawlers

### Backend Services
- **Supabase** - Database & edge functions
- **Supabase Edge Function** - Contact form handler

### Deployment
- **Netlify** - Hosting (based on `netlify.toml` config)
- **Custom headers & redirects** - Via Netlify config

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TS-specific linting
- **Autoprefixer** - CSS vendor prefixes

### Key Architecture
- **SPA (Single Page Application)** - Client-side rendered
- **Component-based** - Modular React components
- **SEO-optimized** - Extensive meta tags, structured data, noscript content
