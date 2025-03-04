docker exec -it 3cd psql -U postgres -d postgres

-- 1. Crear usuario con contraseña
CREATE USER miturno WITH PASSWORD '123';

-- 2. Crear base de datos y asignar el dueño
CREATE DATABASE db_miturno OWNER miturno;

\c db_miturno;

-- 3. Crear tabla asegurando que el usuario sea el dueño
CREATE TABLE tickets (
    id CHARACTER VARYING PRIMARY KEY,
    numero NUMERIC(38) NOT NULL,
    escritorio CHARACTER VARYING(100) ,
    agente CHARACTER VARYING(100)  ,
    estado CHARACTER VARYING(1) DEFAULT 'P',
    fecha_ticket TIMESTAMP DEFAULT NOW(),
    fecha_atencion TIMESTAMP
);

-- Cambiar el dueño de la tabla después de crearla
ALTER TABLE tickets OWNER TO miturno;


-- 4. Dar permisos explícitos en la tabla  
GRANT ALL PRIVILEGES ON TABLE tickets TO miturno;
