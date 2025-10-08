# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Update Your Content (5 minutes)

Edit these 4 files with your information:

```bash
src/data/profile.json      # Your name, bio, social links
src/data/projects.json     # Your projects
src/data/research.json     # Your papers (optional)
src/data/blog.json         # Your blog posts (optional)
```

### 2. Add Your Assets (2 minutes)

Replace these files:

```bash
public/assets/profile.jpg  # Your photo (400x400px)
public/assets/resume.pdf   # Your resume PDF
```

### 3. Run It (1 minute)

```bash
npm install
npm run dev
```

Visit: http://localhost:5173

## 📝 Content Files Explained

### `src/data/profile.json`
Your personal information:
- Name and title
- Bio (3-5 sentences)
- Current role
- Research interests
- Social media links (GitHub, LinkedIn, Scholar)

### `src/data/projects.json`
Your projects:
- Title and description
- Tech stack
- Key metrics/achievements
- GitHub and demo links

### `src/data/research.json`
Your research:
- Published papers
- Working papers
- Links to PDFs and DOIs

### `src/data/blog.json`
Your blog posts:
- Title and abstract
- Categories
- Date and read time

## 🎯 What You Get

✅ Professional portfolio website
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations
✅ SEO optimized
✅ LinkedIn contact integration
✅ Easy content updates (just edit JSON files)

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Docker (Production)
docker-compose up -d --build    # Deploy
docker-compose logs -f          # View logs
docker-compose down             # Stop
```

## 📚 Need More Help?

- **Content Updates**: See `CONTENT-GUIDE.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Features**: See `FEATURES.md`
- **Recent Changes**: See `CHANGES.md`

## ✨ Pro Tips

1. **Test locally first**: Always run `npm run dev` to test changes
2. **Keep it simple**: Short descriptions work best
3. **Use metrics**: Include specific achievements
4. **Optimize images**: Compress before adding
5. **Update regularly**: Keep content fresh

## 🆘 Troubleshooting

**Site not loading?**
```bash
npm install
npm run dev
```

**Changes not showing?**
- Save the file
- Refresh browser (Ctrl+Shift+R)

**JSON error?**
- Check syntax at https://jsonlint.com/
- Look for missing commas or quotes

---

**You're ready to go!** 🎉

Start by editing `src/data/profile.json` with your information.
