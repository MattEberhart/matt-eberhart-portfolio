# Matt Eberhart - Portfolio Website

A modern, professional portfolio website built with Next.js 16, React 19, and Tailwind CSS.

## Features

- 🎨 Clean, professional design with dark mode
- 📱 Fully responsive layout
- 🚀 Built with Next.js 16 App Router
- 💅 Styled with Tailwind CSS v4
- 🎯 Smooth scrolling navigation
- 📸 Photo gallery with lightbox
- 🔗 Social media integration
- ♿ Accessible components from shadcn/ui

## Structure

- **About**: Personal information, education, and interests
- **Projects**: Showcase of personal projects (easily extensible)
- **Resume**: Work experience and downloadable resume
- **Photos**: Photo gallery with placeholder images

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)**

## Customization

### Adding Photos

1. Place your photos in `/public/photos/`
2. Update the `photos` array in `components/photos.tsx`:
   ```tsx
   const photos = [
     { id: 1, src: '/photos/your-photo.jpg', alt: 'Description' },
     // ...
   ]
   ```

### Adding Projects

Projects are managed in `lib/projects.ts`. Add new projects to the array:

```tsx
{
  id: 'project-name',
  title: 'Project Name',
  description: 'Short description',
  tags: ['Tag1', 'Tag2'],
  features: [
    { icon: 'icon-name', text: 'Feature description' }
  ],
  status: 'active'
}
```

### Adding Resume

Replace the placeholder in the Resume section by:
1. Adding your resume PDF to `/public/resume.pdf`
2. Updating the download button in `components/resume.tsx`

### Updating Social Links

Update your social media handles in:
- `components/hero.tsx` (main hero section)
- `components/footer.tsx` (footer links)

Replace `matteberhart` with your actual usernames.

## SEO Configuration

This site includes comprehensive SEO optimization for better search engine rankings:

### Environment Variable Setup

Before deploying, set your base URL as an environment variable:

```bash
# Create a .env.local file (or set in your hosting platform)
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

**Important**: Replace `https://your-domain.com` with your actual domain (e.g., `https://matteberhart.com`). This URL is used for:
- Open Graph meta tags (for social sharing)
- Twitter Card meta tags
- Canonical URLs
- Structured data (JSON-LD schema)
- Sitemap generation

### SEO Features Implemented

✅ **Metadata & Meta Tags**
- Comprehensive title and description
- Open Graph tags for social media sharing (Facebook, LinkedIn, etc.)
- Twitter Card tags for Twitter/X previews
- Canonical URLs to prevent duplicate content
- Robots meta tags for search engine directives

✅ **Structured Data (Schema.org)**
- Person schema with JSON-LD markup
- Helps Google understand this is about "Matt Eberhart"
- Includes job title, social profiles, education, and work information
- Improves chances of appearing in Knowledge Graph and rich snippets

✅ **Image Optimization**
- Profile image configured for Open Graph and Twitter Cards
- Next.js Image component for optimized loading
- Proper alt text for accessibility and SEO

✅ **Search Engine Files**
- `robots.txt` - Guides search engine crawlers
- `sitemap.xml` - Helps search engines discover all pages

✅ **Structured Data (Schema.org)**
- Person schema - Helps Google understand this is about "Matt Eberhart"
- WebSite schema - Improves site discovery with SearchAction
- SoftwareApplication schemas - For projects (bndr, paul-ai)
- Organization schema - For BNDR LLC

✅ **Performance Optimization**
- Preconnect links for external domains (fonts, social media)
- DNS prefetch for faster external resource loading
- Next.js Image component for optimized images
- Manifest.json for PWA support (improves mobile SEO)

✅ **Accessibility & Semantic HTML**
- Proper ARIA labels and roles
- Semantic HTML structure with proper heading hierarchy
- Descriptive alt text for all images
- Navigation landmarks for screen readers

✅ **Mobile & PWA Optimization**
- Mobile-first responsive design
- PWA manifest for installable web app
- Theme color and mobile meta tags
- Apple mobile web app tags

### Verifying SEO Setup

1. **Test Open Graph Tags**: Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. **Test Twitter Cards**: Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. **Test Structured Data**: Use [Google Rich Results Test](https://search.google.com/test/rich-results)
4. **View Source**: Check the `<head>` section contains all meta tags and JSON-LD script
5. **Check robots.txt**: Visit `https://your-domain.com/robots.txt`
6. **Check sitemap**: Visit `https://your-domain.com/sitemap.xml`

### Tips for Better Search Rankings

1. **Set the BASE_URL**: Make sure `NEXT_PUBLIC_BASE_URL` is set correctly in production
2. **Submit to Google Search Console**: Verify ownership and submit your sitemap
3. **Submit to Bing Webmaster Tools**: Get indexed on Bing as well
4. **Create a Google Business Profile**: If applicable, helps with local SEO
5. **Build Quality Backlinks**: Share on LinkedIn, GitHub, Twitter, and other platforms
6. **Consistent NAP**: Use consistent Name, Address, Phone across all platforms
7. **Regular Updates**: Keep content fresh with project updates

## Deployment

This site is ready to deploy to Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. **Set the `NEXT_PUBLIC_BASE_URL` environment variable** in Vercel dashboard (Settings → Environment Variables)
4. Deploy!

## Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (sans), Geist Mono (mono)

## Best Practices Implemented

- ✅ SEO optimized with proper metadata
- ✅ Semantic HTML structure
- ✅ Accessible components with ARIA attributes
- ✅ Performance optimized with Next.js Image
- ✅ Mobile-first responsive design
- ✅ Extensible project structure
- ✅ No database required (static file-based)
- ✅ Type-safe with TypeScript
