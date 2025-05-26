# Environment Variables Configuration

## Setup Completed

✅ **GitHub Actions**: Configured to pass `BUCKET_BASE_URL` during build
✅ **Local Development**: `.env` file created with the variable
✅ **Example File**: `.env.example` created for reference

## Usage in Astro

### In Astro components (.astro files):

```astro
---
// Access the environment variable
const bucketBaseUrl = import.meta.env.BUCKET_BASE_URL;
const imageUrl = `${bucketBaseUrl}/path/to/your/image.jpg`;
---

<img src={imageUrl} alt="Example" />
```

### In TypeScript/JavaScript files:

```typescript
// In any .ts or .js file
const bucketBaseUrl = import.meta.env.BUCKET_BASE_URL;

export function getImageUrl(imagePath: string): string {
  return `${bucketBaseUrl}/${imagePath}`;
}
```

### Environment Variable Types (Optional)

For better TypeScript support, you can add types to `src/env.d.ts`:

```typescript
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BUCKET_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

## Current Configuration

- **Production (GitHub Pages)**: `BUCKET_BASE_URL="https://files.visualdslab.com"`
- **Development**: Uses `.env` file with the same value
- **Build Process**: Variable is available during build time

## Notes

- Environment variables in Astro are available at build time via `import.meta.env`
- The variable is now configured for both local development and GitHub Pages deployment
- No additional packages needed - Astro handles environment variables natively

## Security

- The `.env` file is included in the repository since this is a public URL
- For sensitive data, use GitHub Secrets instead of environment variables in the workflow
