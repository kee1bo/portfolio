# Content Update Guide

This guide shows you exactly which files to edit to update your portfolio content.

## 📝 Quick Reference

| What to Update | File to Edit |
|----------------|--------------|
| Name, Title, Bio | `src/data/profile.json` |
| Projects | `src/data/projects.json` |
| Research Papers | `src/data/research.json` |
| Blog Posts | `src/data/blog.json` |
| Resume PDF | `public/assets/resume.pdf` |
| Profile Photo | `public/assets/profile.jpg` |
| Project Images | `public/assets/projects/` |

## 1. Personal Information

**File:** `src/data/profile.json`

```json
{
  "name": "Your Name",                    // ← Change your name
  "title": "Your Title",                  // ← Change your title
  "tagline": "Your tagline here",         // ← Change tagline
  "bio": "Your bio paragraph...",         // ← Change bio (3-5 sentences)
  "currentRole": "Your Current Role",     // ← Change current role
  "affiliation": "Your Organization",     // ← Change affiliation
  "researchInterests": [                  // ← Update research interests
    "Interest 1",
    "Interest 2",
    "Interest 3"
  ],
  "photo": "/assets/profile.jpg",         // ← Photo filename
  "social": {
    "github": "https://github.com/username",      // ← Your GitHub
    "linkedin": "https://linkedin.com/in/username", // ← Your LinkedIn
    "scholar": "https://scholar.google.com/..."    // ← Your Google Scholar
  },
  "email": "your.email@example.com",      // ← Your email
  "calendarLink": ""                      // ← Optional: Calendly link
}
```

## 2. Projects

**File:** `src/data/projects.json`

```json
{
  "featured": [
    {
      "id": "project-1",                           // ← Unique ID
      "title": "Project Title",                    // ← Project name
      "description": "Brief description...",       // ← Short description
      "techStack": ["Python", "React", "Docker"],  // ← Technologies used
      "metrics": "Key achievement or metric",      // ← Important result
      "githubUrl": "https://github.com/...",       // ← GitHub link
      "demoUrl": "https://demo.example.com",       // ← Live demo link
      "imageUrl": "/assets/projects/project1.jpg", // ← Project image
      "featured": true
    }
  ],
  "moreProjectsUrl": "https://github.com/username" // ← Link to more projects
}
```

**To add a new project:**
1. Add a new object to the `featured` array
2. Add project image to `public/assets/projects/`
3. Save and rebuild

**Note:** The "View All Projects" button now goes to `/projects` page which shows all your projects. You can add more projects to the `featured` array and they'll appear on both the home page and the all projects page.

## 3. Research Papers

**File:** `src/data/research.json`

```json
{
  "published": [
    {
      "id": "paper-1",                             // ← Unique ID
      "title": "Paper Title",                      // ← Paper title
      "authors": ["Your Name", "Co-Author"],       // ← Authors list
      "venue": "Conference/Journal Name",          // ← Where published
      "year": 2024,                                // ← Publication year
      "summary": "One-line summary...",            // ← Brief summary
      "pdfUrl": "/assets/papers/paper1.pdf",       // ← PDF link
      "doiUrl": "https://doi.org/..."              // ← DOI link
    }
  ],
  "working": [
    {
      "id": "working-1",                           // ← Unique ID
      "title": "Working Paper Title",              // ← Paper title
      "description": "Brief description..."        // ← Description
    }
  ]
}
```

**To add a paper:**
1. Add to `published` or `working` array
2. If PDF, add file to `public/assets/papers/`
3. Save and rebuild

## 4. Blog Posts

**File:** `src/data/blog.json`

```json
{
  "posts": [
    {
      "id": "post-1",                              // ← Unique ID
      "slug": "post-url-slug",                     // ← URL-friendly slug
      "title": "Post Title",                       // ← Post title
      "abstract": "One paragraph summary...",      // ← Brief abstract
      "date": "2024-01-15",                        // ← Date (YYYY-MM-DD)
      "categories": ["ML", "XAI"],                 // ← Categories
      "readTime": 8,                               // ← Minutes to read
      "content": "Full content..."                 // ← Full post content
    }
  ],
  "categories": ["ML", "XAI", "Research"]          // ← Available categories
}
```

**To add full blog post content:**
Add your content to the `content` field. You can use HTML or plain text with `\n` for line breaks.

**Note:** Clicking a blog post now navigates to `/blog/{slug}` where the full post is displayed. You can add full content in the `content` field of each post.

## 5. Resume

**File:** `public/assets/resume.pdf`

Simply replace this PDF file with your updated resume. Keep the same filename.

## 6. Profile Photo

**File:** `public/assets/profile.jpg`

Replace with your photo. Recommended:
- Format: JPG or PNG
- Size: 400x400px (square)
- File size: < 500KB

## 7. Project Images

**Folder:** `public/assets/projects/`

Add project screenshots/images here. Recommended:
- Format: JPG or PNG
- Size: 600x400px (3:2 ratio)
- File size: < 300KB each

## 🔄 After Making Changes

### Development (Local Testing)
```bash
# The dev server auto-reloads
npm run dev
```

### Production (Deploy Changes)
```bash
# Rebuild and restart Docker
docker-compose up -d --build
```

## 📋 Content Checklist

Before deploying, make sure you've updated:

- [ ] Name and title in `profile.json`
- [ ] Bio and tagline in `profile.json`
- [ ] Social media links in `profile.json`
- [ ] At least 2-3 projects in `projects.json`
- [ ] Research papers in `research.json` (if applicable)
- [ ] Blog posts in `blog.json` (optional)
- [ ] Profile photo in `public/assets/profile.jpg`
- [ ] Resume PDF in `public/assets/resume.pdf`
- [ ] Project images in `public/assets/projects/`

## 💡 Tips

1. **Keep descriptions concise** - Aim for 1-2 sentences for project descriptions
2. **Use metrics** - Include specific achievements (e.g., "95% accuracy", "10x faster")
3. **Update regularly** - Keep your projects and papers current
4. **Optimize images** - Compress images before adding them
5. **Test locally** - Always test changes with `npm run dev` before deploying

## 🆘 Common Issues

**Q: Changes not showing up?**
- Make sure you saved the file
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache: `Ctrl+Shift+R`

**Q: Image not loading?**
- Check file path matches exactly (case-sensitive)
- Make sure image is in `public/assets/` folder
- Check file extension (.jpg vs .jpeg vs .png)

**Q: JSON syntax error?**
- Use a JSON validator: https://jsonlint.com/
- Check for missing commas or quotes
- Make sure brackets match: `{ }` and `[ ]`

## 📞 Need Help?

If you're stuck:
1. Check the JSON syntax with a validator
2. Look at the existing examples in the files
3. Make sure file paths are correct
4. Test locally before deploying

---

**Remember:** All content files are in `src/data/` and all assets are in `public/assets/`
