# Assets Folder

Place your images and files here.

## Structure

```
assets/
├── profile.jpg          # Your profile photo (400x400px recommended)
├── resume.pdf           # Your resume PDF
├── projects/            # Project images
│   ├── llm.jpg
│   ├── rag.jpg
│   └── trading.jpg
└── papers/              # Research paper PDFs (if needed)
    └── paper1.pdf
```

## Image Guidelines

### Profile Photo
- **File**: `profile.jpg`
- **Size**: 400x400px (square)
- **Format**: JPG or PNG
- **Max file size**: 500KB

### Project Images
- **Location**: `projects/` folder
- **Size**: 600x400px (3:2 ratio)
- **Format**: JPG or PNG
- **Max file size**: 300KB each
- **Naming**: Use the same name as in `projects.json` (e.g., `rag.jpg`)

### Resume
- **File**: `resume.pdf`
- **Format**: PDF
- **Max file size**: 2MB

## Adding Images

1. **Add your files** to the appropriate folder
2. **Update JSON files** with the correct paths:
   - Profile photo: `/assets/profile.jpg`
   - Project images: `/assets/projects/project-name.jpg`
   - Resume: `/assets/resume.pdf`

## Current Setup

Your `projects.json` references:
- `/assets/projects/llm.jpg`
- `/assets/projects/rag.jpg`
- `/assets/projects/trading.jpg`

Make sure to add these images to the `projects/` folder!

## Note

Images in the `public` folder are served directly. The path `/assets/profile.jpg` in your code will look for the file at `public/assets/profile.jpg`.
