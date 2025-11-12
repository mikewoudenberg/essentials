# Netlify Deployment

This project is configured to deploy on Netlify.

## Netlify Configuration

### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: Uses `.nvmrc` (currently Node 18)

### Configuration Files

1. **`netlify.toml`** - Netlify build configuration
   - Sets build command and publish directory
   - Configures Lighthouse plugin
   - Redirects from `*.netlify.app` to custom domain

2. **`public/_redirects`** - URL redirects (copied from `_redirects`)
   - 301 redirects from old short URLs (e.g., `/no-blame-no-mercy`) to new paths (e.g., `/base/collaboration/no-blame-no-mercy`)
   - Automatically included in build output

## Deployment Steps

### Initial Setup
1. Connect your GitHub repository to Netlify
2. Configure build settings (or use `netlify.toml` defaults):
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Set custom domain if needed (e.g., `essentials.xebia.com`)

### Automatic Deploys
Once configured, Netlify will automatically deploy on:
- Every push to the `main` (or configured) branch
- Pull request previews for testing

### Manual Deploy
You can also deploy manually:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## Post-Deployment Checklist

After deploying, verify:
- ✅ Home page loads correctly
- ✅ All card pages are accessible
- ✅ Images display properly
- ✅ Redirects work (test an old URL like `/no-blame-no-mercy`)
- ✅ Categories pages work
- ✅ Internal links between cards work
- ✅ Custom domain resolves correctly

## Environment Variables

No environment variables are required for this static site. All configuration is in the code.

## Troubleshooting

### Build fails
- Check Node version matches `.nvmrc`
- Clear Netlify cache: "Deploys" → "Trigger deploy" → "Clear cache and deploy site"

### Redirects not working
- Verify `_redirects` file exists in `public/` directory
- Check it appears in `dist/_redirects` after build
- Netlify processes `_redirects` automatically from the publish directory

### Images not loading
- Ensure `public/images/` contains all image files
- Check browser console for 404 errors
- Verify paths start with `/images/` (not relative paths)
