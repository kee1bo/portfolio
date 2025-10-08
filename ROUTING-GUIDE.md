# Routing Guide

## 🗺️ Website Routes

Your portfolio now has proper routing with multiple pages:

### Main Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home Page | Main portfolio with all sections |
| `/projects` | All Projects | Dedicated page showing all your projects |
| `/blog/:slug` | Blog Post | Individual blog post page |
| `*` | 404 Page | Not found page |

## 📄 Page Descriptions

### Home Page (`/`)
The main landing page with all sections:
- Hero (name, title, CTA buttons)
- About (bio, photo, research interests)
- Projects (featured projects only)
- Research (papers)
- Blog (recent posts)
- Resume (download)
- Contact (LinkedIn button)

### All Projects Page (`/projects`)
Shows all your projects in a grid layout:
- Back button to home
- All projects from `projects.json`
- Same project cards as home page
- Add more projects to the `featured` array in `projects.json`

### Blog Post Page (`/blog/:slug`)
Individual blog post with full content:
- Back button to home
- Post metadata (date, read time, categories)
- Full post content
- Back to all posts button

### 404 Page
Shown when user visits a non-existent route:
- "404 Page Not Found" message
- Button to return home

## 🔗 Navigation

### From Home Page
- Click "View All Projects" button → Goes to `/projects`
- Click any blog post card → Goes to `/blog/{slug}`
- Click navigation links → Scrolls to sections on home page

### From Other Pages
- Click navigation links → Returns to home page and scrolls to section
- Click "Back to Home" button → Returns to `/`
- Click "Back to All Posts" → Returns to home page blog section

## 📝 Adding Content

### Add More Projects
Edit `src/data/projects.json`:
```json
{
  "featured": [
    {
      "id": "project-1",
      "title": "Project Title",
      ...
    },
    {
      "id": "project-2",
      "title": "Another Project",
      ...
    }
    // Add more projects here
  ]
}
```

All projects in the `featured` array will appear on:
- Home page (Projects section)
- All Projects page (`/projects`)

### Add Blog Posts
Edit `src/data/blog.json`:
```json
{
  "posts": [
    {
      "id": "post-1",
      "slug": "my-post-url",
      "title": "Post Title",
      "abstract": "Short summary...",
      "content": "<h2>Heading</h2><p>Content here...</p>",
      ...
    }
  ]
}
```

**Important:** 
- The `slug` becomes the URL: `/blog/my-post-url`
- Add full content in the `content` field (HTML format)
- Use `<h2>`, `<p>`, `<ul>`, `<li>` tags for formatting

## 🎨 Blog Content Formatting

You can use HTML in the `content` field:

```html
<h2>Section Heading</h2>
<p>Paragraph text here.</p>

<h3>Subsection</h3>
<p>More content.</p>

<ul>
  <li>Bullet point 1</li>
  <li>Bullet point 2</li>
</ul>

<p>Use <strong>bold</strong> and <em>italic</em> text.</p>
<p>Add <code>inline code</code> snippets.</p>
```

## 🔄 How It Works

### React Router
The app uses React Router for client-side routing:
- No page reloads when navigating
- Fast transitions between pages
- Browser back/forward buttons work
- Shareable URLs for blog posts

### Navigation Component
The navigation bar works on all pages:
- On home page: Scrolls to sections
- On other pages: Returns to home then scrolls

### URL Structure
- Clean URLs: `/projects`, `/blog/post-slug`
- No hash fragments for pages
- Hash fragments only for home page sections: `/#about`, `/#projects`

## 🚀 Testing Routes

### Development
```bash
npm run dev
```

Then visit:
- http://localhost:5173/ (home)
- http://localhost:5173/projects (all projects)
- http://localhost:5173/blog/understanding-xai (blog post)
- http://localhost:5173/invalid-url (404 page)

### Production
After deploying, routes work the same:
- https://saivikas.work/
- https://saivikas.work/projects
- https://saivikas.work/blog/understanding-xai

## 💡 Tips

1. **Unique Slugs**: Make sure each blog post has a unique `slug`
2. **URL-Friendly Slugs**: Use lowercase, hyphens, no spaces (e.g., `my-blog-post`)
3. **Content Format**: Use HTML in `content` field for proper formatting
4. **Test Links**: Always test navigation after adding new content
5. **404 Handling**: Invalid URLs automatically show the 404 page

## 🆘 Troubleshooting

**Blog post not found?**
- Check the `slug` matches the URL
- Make sure the post exists in `blog.json`
- Slug is case-sensitive

**Navigation not working?**
- Make sure you're using the navigation component
- Check that section IDs match in `config.json`

**Projects page empty?**
- Add projects to the `featured` array in `projects.json`
- Make sure each project has a unique `id`

## 📋 Checklist

Before deploying:
- [ ] All blog posts have unique slugs
- [ ] Blog posts have full content in `content` field
- [ ] Projects have all required fields
- [ ] Test all routes locally
- [ ] Test navigation from each page
- [ ] Test back buttons work
- [ ] Test 404 page

---

**Your portfolio now has proper routing!** 🎉

Users can:
- Browse all your projects on a dedicated page
- Read full blog posts on individual pages
- Share direct links to blog posts
- Navigate seamlessly between pages
