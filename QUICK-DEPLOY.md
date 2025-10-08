# Quick Deploy Checklist

## 🚀 Deploy in 30 Minutes

### Step 1: Pre-Deploy (5 min)
```bash
# Test locally
npm run dev

# Build for production
npm run build

# Test production build
npm run preview
```

### Step 2: Add Favicon (5 min)
1. Go to https://favicon.io/favicon-generator/
2. Text: "SV"
3. Background: Black (#000000)
4. Font: Bold
5. Download and extract to `public/` folder

### Step 3: Push to GitHub (2 min)
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 4: Deploy to Netlify (10 min)
1. Go to https://netlify.com
2. Sign up with GitHub
3. "Add new site" → "Import from Git"
4. Choose your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### Step 5: Configure Domain (5 min + DNS wait)
1. Netlify dashboard → Domain settings
2. Add custom domain: `saivikas.work`
3. Update DNS at your registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME  
   Name: www
   Value: your-site.netlify.app
   ```
4. Wait for DNS propagation (up to 48 hours)

### Step 6: Post-Deploy (5 min)
1. Enable HTTPS (automatic in Netlify)
2. Test site: https://saivikas.work
3. Share on LinkedIn, GitHub
4. Update profiles with portfolio link

---

## 📊 Add Analytics (Optional - 10 min)

### Google Analytics
1. https://analytics.google.com
2. Create property
3. Get Measurement ID
4. Add to `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console
1. https://search.google.com/search-console
2. Add property: saivikas.work
3. Verify ownership
4. Submit sitemap: https://saivikas.work/sitemap.xml

---

## ✅ Deployment Checklist

- [ ] Code tested locally
- [ ] Favicon added
- [ ] Profile photo added (optional)
- [ ] Code pushed to GitHub
- [ ] Deployed to Netlify
- [ ] Custom domain configured
- [ ] HTTPS enabled
- [ ] Site tested on mobile
- [ ] Google Analytics added (optional)
- [ ] Search Console set up (optional)
- [ ] Shared on social media

---

## 🎯 You're Live!

Your portfolio is now:
- ✅ Live at saivikas.work
- ✅ SEO optimized
- ✅ Fast and secure
- ✅ Auto-deploys on git push
- ✅ Professional and reliable

---

## 🔄 Future Updates

To update your site:
```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main
```

Netlify automatically rebuilds and deploys! 🎉

---

## 📝 Quick Links

- **Netlify Dashboard**: https://app.netlify.com
- **Domain DNS**: Your domain registrar
- **Analytics**: https://analytics.google.com
- **Search Console**: https://search.google.com/search-console

---

## 💡 Tips

1. **Update regularly** - Add projects, blog posts
2. **Monitor analytics** - See what's working
3. **Share often** - LinkedIn, Twitter, GitHub
4. **Get backlinks** - Link from Medium articles
5. **Keep learning** - Add new projects to showcase

---

## 🆘 Troubleshooting

**Site not loading?**
- Check DNS settings
- Wait for DNS propagation (up to 48 hours)
- Clear browser cache

**Build failing?**
- Check Netlify build logs
- Test `npm run build` locally
- Check for errors in console

**Domain not working?**
- Verify DNS records
- Check domain registrar settings
- Wait for propagation

**Need help?**
- Netlify docs: https://docs.netlify.com
- Netlify support: https://answers.netlify.com

---

That's it! You're deployed! 🚀
