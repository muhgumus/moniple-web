# Multi-stage build for moniple-web
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build-time Paddle environment switch
ARG NEXT_PUBLIC_PADDLE_ENV=production
ARG NEXT_PUBLIC_PADDLE_SANDBOX_TOKEN=""
ENV NEXT_PUBLIC_PADDLE_ENV=$NEXT_PUBLIC_PADDLE_ENV
ENV NEXT_PUBLIC_PADDLE_SANDBOX_TOKEN=$NEXT_PUBLIC_PADDLE_SANDBOX_TOKEN

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
