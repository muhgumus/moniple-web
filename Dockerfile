# Multi-stage build for moniple-web
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build-time Paddle environment switch. Default = sandbox until the user
# explicitly flips it back to production (override with --build-arg
# NEXT_PUBLIC_PADDLE_ENV=production). Tokens for both envs are hardcoded in
# src/lib/paddle.ts (Paddle client-side tokens are publishable).
ARG NEXT_PUBLIC_PADDLE_ENV=sandbox
ENV NEXT_PUBLIC_PADDLE_ENV=$NEXT_PUBLIC_PADDLE_ENV

# Build the static site
RUN npm run build

# Production stage with nginx
FROM nginx:alpine

# Copy built static files
COPY --from=build /app/out /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["/entrypoint.sh"]
