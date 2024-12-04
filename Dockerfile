# Van de package 'node', pak versie 20
FROM node:20

# De workdirectory instellen
WORKDIR /app

# Kopieer de bestanden naar de workdirectory
COPY package*.json .

# Installeer alle bestanden van de node_modules in de workdirectory
RUN npm install

# Kopieër de rest van de bestanden naar de workdirectory
COPY . .

# Laat de app runnen
CMD ["node","app.js"]