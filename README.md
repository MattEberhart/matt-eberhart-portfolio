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

## Deployment

This site is ready to deploy to Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy!

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
