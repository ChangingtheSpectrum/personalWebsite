# --- Stage 1: Build Static Assets ---
FROM node:20-alpine AS builder

WORKDIR /app

# 1. Install Gatsby CLI globally as specified in the README
RUN npm install -g gatsby-cli

# Copy package manifests for layer caching
COPY package.json package-lock.json ./

# 2. Install dependencies using Yarn as specified in the README
# --legacy-peer-deps / frozen-lockfile ensures reliable dependency builds
RUN yarn install --frozen-lockfile

# Copy remaining project files
COPY . .

ENV GATSBY_CPU_COUNT=1

# 3. Generate static production build
RUN npm run build


# --- Stage 2: Production Nginx Server ---
FROM nginx:alpine AS runner

# Gatsby places built static files into the /public directory
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
