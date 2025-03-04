import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../db/connection";



class Ticket extends Model { }


Ticket.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        numero: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        escritorio: {
            type: DataTypes.STRING
        },
        agente: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'P'
        },
        fecha_ticket: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        fecha_atencion: {
            type: DataTypes.DATE
        },
    },
    {
        sequelize: db, // Aquí proporcionas la instancia de sequelize
        modelName: 'Ticket', // Nombre del modelo
        tableName: 'tickets', // Nombre de la tabla (opcional, se usará 'Ticket' por defecto)
        timestamps: false, // Si no necesitas los campos de `createdAt` y `updatedAt`
    }

);



export default Ticket;
