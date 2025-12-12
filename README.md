# Nexus Copy Trading Website

A modern, responsive landing page for the Nexus Copy Trading Bot.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with optimized assets
- 🎯 SEO-friendly structure
- ✨ Smooth animations and interactions

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a new repository** on GitHub (e.g., `nexus-copy-trading-website`)

2. **Upload files** to the repository:
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nexus-copy-trading-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click Save

4. **Your site will be live at**:
   - `https://YOUR_USERNAME.github.io/nexus-copy-trading-website/`

### Option 2: Netlify (Free)

1. **Sign up** at [netlify.com](https://www.netlify.com)

2. **Deploy**:
   - Drag and drop the `website` folder to Netlify dashboard, OR
   - Connect your GitHub repository for automatic deployments

3. **Your site will be live at**:
   - `https://YOUR-SITE-NAME.netlify.app`

4. **Custom domain** (optional):
   - Go to Site settings → Domain management
   - Add your custom domain

### Option 3: Vercel (Free)

1. **Sign up** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

3. **Deploy**:
   ```bash
   cd website
   vercel
   ```

4. **Your site will be live at**:
   - `https://YOUR-SITE-NAME.vercel.app`

## Free Domain Options

### Option 1: Freenom (.tk, .ml, .ga, .cf)
1. Visit [freenom.com](https://www.freenom.com)
2. Search for your desired domain
3. Register for free (1 year, renewable)
4. Point DNS to your hosting provider

### Option 2: GitHub Pages Custom Domain
1. Purchase a domain from Namecheap, GoDaddy, etc. (or use Freenom)
2. In GitHub Pages settings, add your custom domain
3. Configure DNS records as instructed

### Option 3: Netlify Custom Domain
1. Netlify provides free `.netlify.app` subdomain
2. For custom domain, add it in Netlify settings
3. Configure DNS as instructed

## Customization

### Update Telegram Links
Edit `index.html` and replace:
- `https://t.me/Nexus_CopyTrading_Bot` - Your bot link
- `https://t.me/Nexus_CopyTrading_Community` - Your community link

### Update Referral Link
Edit `index.html` and replace:
- `https://partner.bybit.com/b/NEXUSBOT` - Your Bybit referral link

### Change Colors
Edit `styles.css` and modify CSS variables in `:root`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

## File Structure

```
website/
├── index.html      # Main HTML file
├── styles.css      # All styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved. © 2025 Nexus Copy Trading

