# GitHub Pages Deployment Guide

## Configuration Summary

Your Astro site is now configured for GitHub Pages deployment with the following setup:

### 1. Astro Configuration (`astro.config.mjs`)
- **Site URL**: `https://vislab-fgv.github.io`
- **Base Path**: `/website` (adjust if your repository has a different name)
- **Build Output**: Static files optimized for GitHub Pages

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- **Trigger**: Automatic deployment on push to `main` branch
- **Package Manager**: pnpm (as detected from your package.json)
- **Node Version**: 20 (default)
- **Build Tool**: Official Astro GitHub Action

## Deployment Steps

### First-time Setup

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Verify Base Path:**
   - If your repository is named "website", keep `base: "/website"`
   - If your repository has a different name, update `astro.config.mjs`
   - If this is an organization site (vislab-fgv.github.io repository), change to `base: "/"`

3. **Push your code:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git push origin main
   ```

### Ongoing Deployment

Once set up, deployment is automatic:
- Push changes to the `main` branch
- GitHub Actions will automatically build and deploy your site
- Your site will be available at `https://vislab-fgv.github.io/website` (or the root if using organization pages)

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production (test before deploying)
pnpm run build

# Preview production build
pnpm run preview
```

## Troubleshooting

### Common Issues

1. **404 on deployment**: Check that your `base` path in `astro.config.mjs` matches your repository name
2. **Build fails**: Ensure all dependencies are properly installed and your code builds locally
3. **Assets not loading**: Verify that asset paths are relative and work with the configured base path

### Checking Deployment Status

- Go to your repository on GitHub
- Click on the "Actions" tab
- Check the status of your latest deployment workflow

### Manual Deployment

If you need to manually trigger deployment:
- Go to Actions tab in your repository
- Click on "Deploy to GitHub Pages" workflow
- Click "Run workflow" button

## Repository Settings Checklist

- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Repository is public (required for free GitHub Pages)
- [ ] Main branch exists and contains your code
- [ ] Astro configuration matches your repository setup

Your site should be accessible at: **https://vislab-fgv.github.io/website**

*Note: First deployment may take a few minutes. Subsequent deployments are typically faster.*
