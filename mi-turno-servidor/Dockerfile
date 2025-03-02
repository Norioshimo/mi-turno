# Etapa 1: Construcción del proyecto
FROM node:16.20.2-alpine as build


# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de tu proyecto al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto 
RUN npm install

# Copiar el resto de los archivos de tu proyecto al contenedor
COPY . .

# Etapa 2: Crear la imagen final sin node_modules
FROM node:16.20.2-alpine

WORKDIR /usr/src/app
COPY --from=build /usr/src/app /usr/src/app
RUN npm install --only=production

# Exponer el puerto en el que tu aplicación escuchará (ajusta según tu configuración)
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "start"]
