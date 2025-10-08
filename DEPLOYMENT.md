# Deployment Guide

This guide covers deploying the Sai Vikas portfolio website using Docker.

## Prerequisites

- Docker and Docker Compose installed
- Domain name configured (saivikas.work)
- SSL certificates (Let's Encrypt recommended)
- SMTP credentials for contact form (optional)

## Environment Setup

1. **Copy environment file:**
```bash
cp .env.example .env
```

2. **Configure environment variables:**
Edit `.env` with your settings:
```env
# SMTP Configuration (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=contact@saivikas.work

# Production settings
FLASK_ENV=production
PORT=8000
```

## Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

3. **Start backend (optional):**
```bash
cd server
pip install -r requirements.txt
python app.py
```

## Production Deployment

### Option 1: Docker Compose (Recommended)

1. **Build and start containers:**
```bash
docker-compose up -d --build
```

2. **Check container status:**
```bash
docker-compose ps
```

3. **View logs:**
```bash
docker-compose logs -f portfolio
```

4. **Stop containers:**
```bash
docker-compose down
```

### Option 2: Manual Docker Build

1. **Build the image:**
```bash
docker build -t portfolio-website .
```

2. **Run the container:**
```bash
docker run -d \
  -p 80:8000 \
  --name portfolio \
  --env-file .env \
  portfolio-website
```

## Adding Live Projects

To add your 3 live projects to the deployment:

1. **Build your project Docker images:**
```bash
docker build -t project1:latest ./path/to/project1
docker build -t project2:latest ./path/to/project2
docker build -t project3:latest ./path/to/project3
```

2. **Uncomment project services in docker-compose.yml:**
```yaml
  project1:
    image: project1:latest
    container_name: project1
    ports:
      - "8001:8000"
    restart: unless-stopped
    networks:
      - portfolio-network
```

3. **Update project links in `src/data/projects.json`:**
```json
{
  "demoUrl": "https://saivikas.work:8001"
}
```

## SSL/HTTPS Setup

### Using Let's Encrypt

1. **Install Certbot:**
```bash
sudo apt-get install certbot
```

2. **Generate certificates:**
```bash
sudo certbot certonly --standalone -d saivikas.work -d www.saivikas.work
```

3. **Copy certificates:**
```bash
sudo mkdir -p ./ssl
sudo cp /etc/letsencrypt/live/saivikas.work/fullchain.pem ./ssl/
sudo cp /etc/letsencrypt/live/saivikas.work/privkey.pem ./ssl/
```

4. **Uncomment Nginx service in docker-compose.yml**

5. **Restart containers:**
```bash
docker-compose restart
```

## Content Updates

### Update Profile Information
Edit `src/data/profile.json` and rebuild:
```bash
docker-compose up -d --build portfolio
```

### Add New Project
1. Edit `src/data/projects.json`
2. Add project image to `public/assets/projects/`
3. Rebuild and restart

### Add Blog Post
1. Edit `src/data/blog.json`
2. Rebuild and restart

### Update Resume
Replace `public/assets/resume.pdf` and rebuild

## Monitoring

### Health Check
```bash
curl http://localhost/api/health
```

### Container Logs
```bash
docker-compose logs -f
```

### Resource Usage
```bash
docker stats
```

## Backup

### Backup Data
```bash
tar -czf backup-$(date +%Y%m%d).tar.gz \
  src/data/ \
  public/assets/ \
  .env
```

### Restore Data
```bash
tar -xzf backup-YYYYMMDD.tar.gz
docker-compose up -d --build
```

## Troubleshooting

### Container won't start
```bash
docker-compose logs portfolio
docker-compose restart portfolio
```

### Contact form not working
1. Check SMTP credentials in `.env`
2. Check backend logs: `docker-compose logs portfolio`
3. Test SMTP connection manually

### Port conflicts
Change ports in `docker-compose.yml`:
```yaml
ports:
  - "8080:8000"  # Use 8080 instead of 80
```

### Build fails
```bash
# Clean build
docker-compose down
docker system prune -a
docker-compose up -d --build
```

## Performance Optimization

1. **Enable Nginx caching** (already configured in nginx.conf)
2. **Use CDN** for static assets
3. **Enable HTTP/2** (already configured)
4. **Monitor with tools:**
   - Google Lighthouse
   - GTmetrix
   - WebPageTest

## Security Checklist

- [ ] SSL certificates installed and valid
- [ ] Environment variables secured (not in git)
- [ ] SMTP credentials configured
- [ ] Rate limiting enabled (nginx.conf)
- [ ] Security headers configured
- [ ] Regular dependency updates
- [ ] Firewall configured (ports 80, 443 only)

## Maintenance

### Update Dependencies
```bash
npm update
pip install -r server/requirements.txt --upgrade
```

### Renew SSL Certificates
```bash
sudo certbot renew
sudo cp /etc/letsencrypt/live/saivikas.work/*.pem ./ssl/
docker-compose restart nginx
```

### Update Docker Images
```bash
docker-compose pull
docker-compose up -d
```

## Support

For issues or questions:
- Check logs: `docker-compose logs`
- Review documentation
- Check GitHub issues

## Production Checklist

Before going live:
- [ ] Domain DNS configured
- [ ] SSL certificates installed
- [ ] Environment variables set
- [ ] SMTP configured and tested
- [ ] Content updated (profile, projects, resume)
- [ ] Images optimized
- [ ] Contact form tested
- [ ] All links working
- [ ] Mobile responsive tested
- [ ] Performance tested (Lighthouse)
- [ ] Accessibility tested
- [ ] Backup strategy in place
