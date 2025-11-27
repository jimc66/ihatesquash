# OG Image Creation

The site is configured to use `/og-image.jpg` (1200x630px).

## Quick Option: Screenshot the HTML

1. Open `src/og-image.html` in a browser
2. Take a screenshot at exactly 1200x630px
3. Save as `src/og-image.jpg`
4. Rebuild and deploy

## Alternative: Use an Online Tool

Use a tool like:
- https://www.opengraph.xyz/
- https://www.bannerbear.com/
- Canva (use custom dimensions: 1200x630px)

## Design Specs (from og-image.html)

- Background: Red gradient (#dc2626 to #991b1b)
- Main text: "I HATE SQUASH" (white, huge, bold)
- Subtitle: "Finally, someone said it." (white, medium)
- Domain: "ihatesquash.com" (white box with red text)
- Watermark: Grayscale pumpkin emojis in background

Once created, add to `.eleventy.js`:
```javascript
eleventyConfig.addPassthroughCopy("src/og-image.jpg");
```
