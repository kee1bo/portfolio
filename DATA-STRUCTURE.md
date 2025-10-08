# Data Structure Reference

Quick reference for where all your content lives and how to update it.

## 📁 All Data Files Location: `src/data/`

### 1. Profile Data (`profile.json`)
**Contains**: Personal info, bio, education, skills, current focus, social links

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your tagline",
  "bio": "Your bio paragraph",
  
  "currentFocus": [
    "Area 1",
    "Area 2"
  ],
  
  "skills": [
    "Skill 1",
    "Skill 2"
  ],
  
  "education": [
    {
      "degree": "Master's degree",
      "field": "AI and Data Science",
      "institution": "University Name",
      "period": "Sep 2024 – Jul 2026",
      "status": "In Progress"
    }
  ],
  
  "social": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "medium": "https://medium.com/@username"
  }
}
```

**Used by**:
- Hero section (name, title, tagline, social)
- About section (bio, education)
- Current Focus section (currentFocus, skills)
- Contact section (email, social)
- Footer (social)

---

### 2. Projects Data (`projects.json`)
**Contains**: All your projects (featured and all)

```json
{
  "featured": [
    {
      "id": "project-id",
      "title": "Project Title",
      "description": "Short description",
      "techStack": ["Tech1", "Tech2"],
      "imageUrl": "/assets/projects/image.jpg",
      "githubUrl": "https://github.com/...",
      "demoUrl": "https://...",
      "youtubeUrl": "https://youtube.com/...",
      "mediumUrl": "https://medium.com/...",
      "featured": true
    }
  ],
  "all": [
    // All projects including featured ones
  ]
}
```

**Used by**:
- Projects section (shows featured)
- All Projects page (shows all)

---

### 3. Blog Data (`blog.json`)
**Contains**: Blog posts and articles

```json
{
  "posts": [
    {
      "id": "post-slug",
      "title": "Post Title",
      "excerpt": "Short excerpt",
      "date": "2024-10-01",
      "readTime": "5 min read",
      "tags": ["tag1", "tag2"],
      "mediumUrl": "https://medium.com/...",
      "content": "Full markdown content..."
    }
  ]
}
```

**Used by**:
- Blog section (recent posts)
- Blog post pages (individual posts)

---

### 4. Config Data (`config.json`)
**Contains**: Site-wide configuration

```json
{
  "site": {
    "title": "Your Name - Portfolio",
    "description": "Site description",
    "url": "https://yoursite.com"
  },
  "navigation": {
    "items": [
      { "label": "Home", "path": "/" },
      { "label": "About", "path": "/#about" }
    ]
  }
}
```

**Used by**:
- Navigation component
- SEO meta tags
- Site configuration

---

## 🖼️ Image Files Location: `public/assets/`

### Profile Image
- **Path**: `public/assets/profile.jpg`
- **Referenced in**: `profile.json` → `"photo": "/assets/profile.jpg"`
- **Used by**: About section

### Resume PDF
- **Path**: `public/assets/resume.pdf`
- **Referenced in**: Hero section Resume button
- **Used by**: Hero section

### Project Images
- **Path**: `public/assets/projects/*.jpg`
- **Referenced in**: `projects.json` → `"imageUrl": "/assets/projects/name.jpg"`
- **Used by**: Project cards

---

## 🎯 Quick Update Guide

### To Update Your Bio
Edit: `src/data/profile.json` → `"bio"` field

### To Add/Remove Skills
Edit: `src/data/profile.json` → `"skills"` array

### To Update Current Focus Areas
Edit: `src/data/profile.json` → `"currentFocus"` array

### To Add a New Project
Edit: `src/data/projects.json` → Add to `"featured"` or `"all"` array

### To Add a Blog Post
Edit: `src/data/blog.json` → Add to `"posts"` array

### To Update Social Links
Edit: `src/data/profile.json` → `"social"` object

### To Update Education
Edit: `src/data/profile.json` → `"education"` array

---

## 🔄 No Code Changes Needed!

All content updates can be done by editing JSON files. No need to touch React components unless you want to change the design or layout.

---

## 📝 Notes

- All image paths start with `/assets/` (not `public/assets/`)
- JSON files must be valid JSON (use a validator if unsure)
- Dates should be in `YYYY-MM-DD` format
- URLs should include `https://`
- Arrays use `[]`, objects use `{}`
