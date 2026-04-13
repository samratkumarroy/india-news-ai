

## Plan: Generate an Eye-Catching AI Favicon

### What we'll do
Generate a bold, eye-catching favicon for India News AI using AI image generation, then set it as the site's favicon.

### Design concept
A striking "AI" monogram with a saffron-orange gradient glow on a dark background — compact, bold, and instantly recognizable at small sizes. The design will incorporate a subtle neural/circuit motif to reinforce the AI branding.

### Steps

1. **Generate favicon** using AI image generation (google/gemini-3-pro-image-preview for highest quality) — a 512x512 bold icon optimized for small-size visibility
2. **Copy the generated image** to `public/favicon.png`
3. **Update `index.html`** to reference the new favicon (already points to `/favicon.png`)
4. **Remove old favicon files** if any `.ico` versions exist that could override

### Technical details
- Model: `google/gemini-3-pro-image-preview` for best quality
- Output: 512x512 PNG with transparency
- Color palette: Saffron orange (#FF9933) with dark brown/black background
- Style: Bold, high-contrast, readable at 16x16 and 32x32 sizes

