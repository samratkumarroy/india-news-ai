

## Problem

The screenshot shows the live site at indianewsai.com rendering as **unstyled plain HTML**. This means the CSS and JavaScript bundles are not loading.

The most likely cause: the **source** `index.html` (which references `/src/main.tsx`) was uploaded to Hostinger instead of the **built** `index.html` that Vite generates in the `dist/` folder. The source file only works with Vite's dev server — on a static host like Hostinger, it produces an unstyled page because `/src/main.tsx` is not a valid path.

## Root Cause

The project's `index.html` contains:
```html
<script type="module" src="/src/main.tsx"></script>
```
This is the **development** entry point. After running `npm run build`, Vite produces a different `dist/index.html` with hashed asset references like:
```html
<script type="module" src="/assets/index-abc123.js"></script>
<link rel="stylesheet" href="/assets/index-xyz789.css">
```

If the source `index.html` was uploaded, the browser cannot find the compiled CSS/JS, resulting in the unstyled page you see.

## Fix — Correct Deployment Steps

1. **Build the project locally**
   ```
   npm run build
   ```
   This creates a `dist/` folder with the production-ready files.

2. **Upload only the contents of `dist/`** to Hostinger's `public_html/`:
   - `dist/index.html` → `public_html/index.html`
   - `dist/assets/` → `public_html/assets/`
   - All other files from `dist/`

3. **Copy `.htaccess`** from `public/` into `public_html/` (Vite copies it into `dist/` automatically, so it should already be there).

4. **Do NOT upload the source `index.html`** from the project root — only use the one generated inside `dist/`.

## Verification

After uploading, the site should load with full styling, the dark header, saffron ticker, and newspaper layout visible.

