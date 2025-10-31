FROM node:18-alpine AS build
WORKDIR /app

# Copy entire repo into the build context
COPY . .

# Install dependencies for the app located in the subfolder and build it
RUN npm ci --prefix "CUSTODEX (1)" --silent
RUN npm run build --prefix "CUSTODEX (1)"

# Runtime stage - serve the built files with nginx
FROM nginx:alpine AS runtime
# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*
# Copy the built dist from the build stage (use JSON array form to handle spaces)
COPY --from=build ["/app/CUSTODEX (1)/dist/", "/usr/share/nginx/html/"]

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]