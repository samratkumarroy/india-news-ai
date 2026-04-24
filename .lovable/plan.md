## Fix News Ticker Text Visibility

### Problem
The news ticker scroller text is black on a black background (`bg-saffron`), making it invisible.

### Solution
Change the ticker text color from black (`hsl(var(--ink))`) to white for visibility against the dark background.

### Files to Edit
1. **src/index.css** - Update `.ticker-content` CSS rule
   - Change `color: hsl(var(--ink));` to `color: white;`

### Expected Result
The scrolling ticker text will be white and clearly visible against the black background.

### Technical Details
- The `.ticker-content` class currently uses `color: hsl(var(--ink))` which resolves to black
- The parent container uses `bg-saffron` which is also black (0 0% 0%)
- Simple fix: hardcode white text color for the ticker content