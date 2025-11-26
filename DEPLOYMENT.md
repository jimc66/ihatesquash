# Cloudflare Pages Deployment Guide

## Initial Setup

1. **Connect GitHub Repository**
   - Go to Cloudflare Dashboard > Pages
   - Click "Create a project"
   - Connect your GitHub account
   - Select the `ihatesquash` repository

2. **Configure Build Settings**
   - **Production branch:** `main`
   - **Build command:** `npm run build && npm run build:css:prod`
   - **Build output directory:** `_site`
   - **Root directory:** (leave empty)

3. **Environment Variables**
   - **NODE_VERSION:** `18` (or higher)
   - No other environment variables needed for this static site

4. **Preview Deployments**
   - Enable preview deployments for `dev` and `stage` branches
   - Each push to these branches will create a preview URL

## Branch Workflow

### Development (dev)
```bash
git checkout dev
# Make changes
git add .
git commit -m "Description of changes"
git push origin dev
```
- Triggers preview deployment
- Preview URL: `dev.ihatesquash.pages.dev` (or similar)

### Staging (stage)
```bash
git checkout stage
git merge dev
git push origin stage
```
- Triggers staging preview deployment
- Review changes before production
- Preview URL: `stage.ihatesquash.pages.dev` (or similar)

### Production (main)
```bash
git checkout main
git merge stage
git push origin main
```
- Triggers production deployment
- Deploys to `ihatesquash.com`

## Custom Domain Setup

1. **Add Custom Domain**
   - In Cloudflare Pages project settings
   - Add domain: `ihatesquash.com`
   - Add domain: `www.ihatesquash.com`

2. **DNS Configuration**
   - Should auto-configure if domain is in Cloudflare
   - Verify CNAME records are created:
     - `ihatesquash.com` → `ihatesquash.pages.dev`
     - `www.ihatesquash.com` → `ihatesquash.pages.dev`

3. **SSL/TLS**
   - Cloudflare automatically provisions SSL certificates
   - Set SSL/TLS mode to "Full" or "Full (strict)"

## Build Optimization

The production build script (`npm run build:css:prod`) includes:
- CSS minification via Tailwind
- Production-optimized output
- Unused CSS purging

## Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Verify all dependencies in package.json
- Review build logs in Cloudflare Pages dashboard

### CSS Not Loading
- Ensure build:css:prod runs during deployment
- Verify output.css is in `_site/styles/`
- Check browser console for 404 errors

### Preview Deployments Not Working
- Verify preview deployments are enabled in project settings
- Check that branch names match configuration
- Review GitHub integration permissions
