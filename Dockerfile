# Multi-stage build for portfolio website

# Stage 1: Build React frontend
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production server with Python
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    && rm -rf /var/lib/apt/lists/*

# Copy Python requirements and install
COPY server/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy built frontend from builder stage
COPY --from=builder /app/dist ./dist

# Copy server code
COPY server/ ./server/

# Copy public assets
COPY public/ ./public/

# Expose port
EXPOSE 8000

# Set environment variables
ENV FLASK_ENV=production
ENV PORT=8000

# Run the application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "4", "--timeout", "120", "server.app:app"]
