# I Hate Squash

A passionate defense against the tyranny of squash.

## About

ihatesquash.com is a humorous informational site dedicated to exposing the truth about squash vegetables. Built with honesty, humor, and a deep commitment to better vegetable choices.

## Tech Stack

- **Eleventy (11ty)** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind component library
- **Cloudflare Pages** - Hosting and deployment

## Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build

```bash
# Production build
npm run build
```

Output will be in the `_site/` directory.

## Deployment

This site is configured for Cloudflare Pages deployment.

### Cloudflare Pages Settings

- **Build command:** `npm run build && npm run build:css:prod`
- **Build output directory:** `_site`
- **Node version:** 18 or higher

### Branch Strategy

- `dev` - Development branch
- `stage` - Staging/preview branch
- `main` - Production branch

## Project Structure

```
ihatesquash/
├── src/
│   ├── _includes/        # Reusable components
│   ├── _layouts/         # Page layouts
│   ├── styles/           # CSS files
│   ├── alternatives/     # Better vegetables page
│   ├── manifesto/        # Manifesto page
│   ├── reasons/          # Reasons page
│   └── index.njk         # Homepage
├── _site/                # Build output (generated)
├── .eleventy.js          # Eleventy configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies and scripts
```

## License

MIT

## Author

Jim Cuff
