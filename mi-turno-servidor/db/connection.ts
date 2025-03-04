import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// Cargar las variables de entorno
dotenv.config();

// Conectar a MongoDB
const POSTGRES_DB_NAME = process.env.POSTGRES_DB_NAME || '';
const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME || '';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || '';

console.log(`POSTGRES_DB_NAME:${POSTGRES_DB_NAME} || POSTGRES_USERNAME: ${POSTGRES_USERNAME}`)
const db = new Sequelize(POSTGRES_DB_NAME, POSTGRES_USERNAME, POSTGRES_PASSWORD, {
    host: POSTGRES_DB_NAME,
    dialect: "postgres",
    logging: (msg) => {
        // Puedes usar cualquier método aquí, como enviar el log a un archivo o consola personalizada
        console.log(msg); // O personalizar con otro comportamiento
    },
    port: 5432,
});

export default db;
