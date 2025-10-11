# ---------- Stage 1: Build React app ----------
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy only package files first (for dependency caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build optimized production files
RUN npm run build


# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:alpine

# Copy Nginx config (for React Router support)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
