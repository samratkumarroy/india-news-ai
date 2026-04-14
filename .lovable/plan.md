

## Plan: Image Compression & WebP Conversion

### What we'll do
Convert all 20+ JPG/PNG article images to optimized WebP format, and add a Vite plugin to automatically compress any future images at build time.

### Steps

1. **Install `vite-plugin-image-optimizer`** — automatically compresses and optimizes all imported images (JPG, PNG, WebP) during build
2. **Convert existing JPG/PNG assets to WebP** — use a script with `sharp` (or `nix run nixpkgs#libwebp -- cwebp`) to batch-convert all 25 JPG/PNG article images in `src/assets/` to WebP at quality 80, targeting ~60-80% size reduction
3. **Update all import references** — update `src/data/newArticles.ts` and `src/pages/ArticlePage.tsx` to reference the new `.webp` files instead of `.jpg`/`.png`
4. **Configure Vite plugin** — add `vite-plugin-image-optimizer` to `vite.config.ts` with WebP/PNG/JPG compression settings so future images are auto-optimized
5. **Remove old JPG/PNG originals** (except favicon PNGs and `ai-chat-icon.png`) to reduce repo size
6. **Verify build** — ensure no broken imports

### Technical details
- **Tool**: `sharp` via Node script or `cwebp` CLI for conversion
- **Quality**: WebP at quality 80 (good balance of size vs quality)
- **Vite plugin**: `vite-plugin-image-optimizer` with mozjpeg, optipng, and svgo presets
- **Files affected**: ~25 images, 2 TypeScript files (`newArticles.ts`, `ArticlePage.tsx`)
- **Expected improvement**: 50-70% reduction in total image payload, faster LCP

