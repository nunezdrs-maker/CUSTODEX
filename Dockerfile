# Etapa de build
FROM node:20.18.0-slim AS build
WORKDIR /app

RUN apt-get update -qq && apt-get install -y python-is-python3 pkg-config build-essential && rm -rf /var/lib/apt/lists/*

# copiar sólo package.json(s) y instalar deps (cache eficiente)
COPY package*.json ./
RUN npm ci

# copiar resto y construir
COPY . .
RUN npm run build

# Etapa release
FROM node:20.18.0-slim AS release
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./
COPY server.js ./

ENV NODE_ENV=production
EXPOSE 8080
CMD ["npm", "start"]
