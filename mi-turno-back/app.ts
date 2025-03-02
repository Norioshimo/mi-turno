// Server Model: Contiene todo el servidor de express + socket.io configurado
import dotenv from "dotenv";

// Paquete para leer y establecer las variables de entorno
import Server from "./models/server";


//Configurar env
dotenv.config();


// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();

 