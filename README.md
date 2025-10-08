# Sai Vikas Portfolio Website

A modern, professional portfolio website built with React, featuring a clean black and white design with serif typography for headings.

## ✨ Features

- **Modern Design**: Professional black & white theme with Playfair Display serif headings
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- **Accessible**: WCAG 2.1 Level AA compliant with ARIA labels
- **Contact Form**: Integrated with Python backend and SMTP
- **Docker Ready**: Complete containerization for easy deployment
- **Performance**: Code splitting, lazy loading, and optimized builds

## 🛠 Tech Stack

**Frontend:**
- React 18+ with Vite
- Framer Motion (animations)
- CSS Modules (styling)
- Axios (HTTP client)

**Backend:**
- Python 3.11+ with Flask
- SMTP email integration
- CORS enabled

**Deployment:**
- Docker & Docker Compose
- Nginx (reverse proxy)
- Multi-stage builds

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── sections/        # Page sections
│   │   ├── layout/          # Layout components
│   │   └── pages/           # Page components
│   ├── data/                # JSON configuration files
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   └── styles/              # Global styles and CSS variables
├── server/                  # Python Flask backend
├── public/                  # Static assets
└── docker-compose.yml       # Docker orchestration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Python 3.11+ (for backend)
- Docker & Docker Compose (for deployment)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-website

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 📝 Content Management

All content is managed through JSON files - no code changes needed!

**Quick Reference:**
- `src/data/profile.json` - Personal info, bio, social links
- `src/data/projects.json` - Your projects
- `src/data/research.json` - Research papers
- `src/data/blog.json` - Blog posts
- `public/assets/profile.jpg` - Your photo
- `public/assets/resume.pdf` - Your resume

**📖 See [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for detailed instructions**

## 🐳 Docker Deployment

### Quick Deploy

```bash
# Build and start
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### Environment Configuration

1. Copy `.env.example` to `.env`
2. Configure SMTP settings for contact form
3. Update production URLs

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🎨 Customization

### Colors
Edit `src/styles/variables.css` to change the color scheme

### Typography
Fonts are configured in `index.html` and `src/styles/variables.css`

### Animations
Modify animation variants in `src/utils/animations.js`

## 📊 Performance

- Lighthouse Score: 90+
- Code splitting for optimal loading
- Lazy loading for images
- Gzip compression
- Browser caching

## 🔒 Security

- HTTPS/SSL ready
- CSRF protection
- Rate limiting on contact form
- Security headers configured
- Input sanitization

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run accessibility audit
npm run audit:a11y

# Run performance audit
npm run audit:perf
```

## 📦 Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 🤝 Contributing

This is a personal portfolio project. For issues or suggestions, please open an issue.

## 📄 License

Private - All rights reserved

## 📧 Contact

For questions or support, use the contact form on the website or reach out via email.

---

Built with ❤️ using React, Python, and Docker
