# Mi Turno

**Mi Turno** es una aplicación web desarrollada con **React** y **Node.js**, diseñada para gestionar turnos por orden de llegada, facilitando la atención al cliente o la gestión de pedidos en tiempo real. Esta herramienta es ideal para entornos donde se requiera organizar y dar seguimiento a los turnos de manera eficiente.

## Funcionalidades

- **Inicio de un agente en el escritorio**: Los agentes pueden iniciar sesión en el sistema y comenzar a gestionar los turnos desde su interfaz personalizada.
- **Generar un ticket**: Los usuarios pueden generar un ticket de turno, el cual se asigna automáticamente a la cola de atención o pedidos.
- **Recibir siguiente ticket**: El sistema asigna de manera automática y secuencial el siguiente ticket al agente disponible, asegurando una atención ordenada.
- **Pantalla con seguimiento de tickets**: Los agentes pueden visualizar en tiempo real el estado de los tickets, lo que les permite realizar un seguimiento eficiente.

## Tecnologías utilizadas

- **Frontend**: React.js
- **Backend**: Node.js con Express
- **Base de datos**: Postgresql
- **Comunicaciones en tiempo real**: Socket.io
- **Gestión del estado en React**: Hooks (`useState`, `useEffect`)

## Estructura del Proyecto

El proyecto está compuesto por dos repositorios principales:

- **mi-turno-app**: Frontend desarrollado con React.
- **mi-turno-servidor**: Backend desarrollado con Node.js y Express.

## Instalación con Docker

Para desplegar la aplicación, utiliza Docker y Docker Compose.

### Generar imagen y levantar contenedores
#### Producción
```sh
docker compose -f docker-compose.prod.yml up --build -d
```

#### Desarrollo
```sh
docker compose up --build -d 
```


#### OTROS COMANDOS
- docker build -f Dockerfile.prod -t  mi-turno-app .
- docker container run -d mi-turno-app
- docker exec -it CONTAINERID /bin/sh
- docker container logs -f CONTAINERID


## NOTA.
Una vez levantado correr el script de la base de datos.

