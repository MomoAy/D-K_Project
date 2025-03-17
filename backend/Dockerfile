# Utiliser l'image officielle Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json pnpm-lock.yaml ./

# Installer pnpm globalement
RUN npm install -g pnpm

# Utiliser pnpm pour installer les dépendances
RUN pnpm install


# Copier tout le code source
COPY . .

# Exposer le port sur lequel Express tourne
EXPOSE 5000

# Lancer l'application
CMD ["pnpm", "run", "server"]
