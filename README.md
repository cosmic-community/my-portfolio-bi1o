# Long Zhiping Portfolio

A modern, responsive portfolio website built with Next.js 16 and powered by Cosmic CMS. Features sections for services, case studies, blog, work experience, skills, and contact information.

## Features

- 🏠 Dynamic homepage with hero section
- 🛠️ Services showcase with detailed pages
- 💼 Case studies / projects portfolio
- 📝 Full-featured blog
- ⚡ Skills visualization
- 👔 Work experience timeline
- 📧 Contact page with social links
- 📱 Fully responsive design
- ⚡ Fast loading with Next.js App Router
- 🎨 Modern UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a0aa6d3a6022ba88890849d&clone_repository=6a0aa888a6022ba8889084be)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
> 
> User instructions: Long Zhiping's personal website features sections including a Homepage, Services (with dropdown options for Website Development, SEO Services, GEO Services, Ad Placement Management, and Custom AI/RPA/Web Crawler Implementation), Case Studies, a Blog, and Contact Us."

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: homepage, services, projects, skills, work-experience, blog-posts, contact-info. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: Long Zhiping's personal website features sections including a Homepage, Services (with dropdown options for Website Development, SEO Services, GEO Services, Ad Placement Management, and Custom AI/RPA/Web Crawler Implementation), Case Studies, a Blog, and Contact Us.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [React 19](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Cosmic SDK](https://www.cosmicjs.com/docs) - Headless CMS integration

## Getting Started

### Prerequisites

- Bun (or Node.js 18+)
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all services
const { objects } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch single project
const { object } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'project-slug' })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with [Cosmic](https://www.cosmicjs.com/docs) to manage all content including homepage, services, projects, skills, work experience, blog posts, and contact information.

## Deployment Options

Deploy easily to [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Set your environment variables in the platform dashboard.

<!-- README_END -->