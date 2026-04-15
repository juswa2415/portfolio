# Personal Portfolio

A production-ready personal portfolio built with Next.js 14 App Router, Tailwind CSS, and Framer Motion. The app is configured for static export and can be deployed directly to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
```

The static output is generated in `out/`.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Leave the framework preset as `Next.js`.
4. Build command: `npm run build`
5. Output directory: `out`

## Personalization checklist

- Replace `Your Name` and contact links in `lib/data.ts`.
- Replace `https://your-portfolio.vercel.app` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`.
- Replace `public/resume.pdf` with your actual resume.
- Replace the images in `public/images/` and `public/og-image.svg` if you want project-specific artwork.
