# Utiliser l'image de Node.js pour builder l'application
FROM node:18-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier et installer les dépendances
COPY package.json pnpm-lock.yaml ./

# Installer pnpm globalement
RUN npm install -g pnpm

# Utiliser pnpm pour installer les dépendances
RUN pnpm install

# Copier le reste du code
COPY . .

# Construire l'application React
RUN pnpm run build

# Utiliser Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers du build React dans le dossier de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port de Nginx
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
