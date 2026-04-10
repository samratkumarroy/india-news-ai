

## Favicon Not Showing — Fix

**Root cause:** A `favicon.ico` file exists in `public/`, and browsers request `/favicon.ico` by default, which overrides the `favicon.png` specified in `index.html`. The `.ico` file is likely a default/empty placeholder.

**Fix:**
1. Delete `public/favicon.ico` so browsers fall back to the `<link rel="icon">` tag pointing to `/favicon.png`
2. Verify `public/favicon.png` is a valid image (it's already referenced correctly in `index.html`)

This is a one-step fix — just removing the stale `.ico` file.

