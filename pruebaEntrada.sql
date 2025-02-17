-- Crear la base de datos pruebaEntrada
CREATE DATABASE pruebaEntrada;
GO

-- Usar la base de datos pruebaEntrada
USE pruebaEntrada;
GO

-- Crear la tabla productos
CREATE TABLE productos (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(60),
    Precio DECIMAL(6,2) CHECK (Precio >= 0)
);
GO

-- Insertar 11 electrodomésticos con precios
INSERT INTO productos (Nombre, Precio) VALUES ('Lavadora', 349.99);
INSERT INTO productos (Nombre, Precio) VALUES ('Refrigerador', 799.00);
INSERT INTO productos (Nombre, Precio) VALUES ('Horno de microondas', 129.95);
INSERT INTO productos (Nombre, Precio) VALUES ('Licuadora', 39.99);
INSERT INTO productos (Nombre, Precio) VALUES ('Cafetera', 59.50);
INSERT INTO productos (Nombre, Precio) VALUES ('Batidora', 49.99);
INSERT INTO productos (Nombre, Precio) VALUES ('Aspiradora', 149.99);
INSERT INTO productos (Nombre, Precio) VALUES ('Plancha eléctrica', 29.95);
INSERT INTO productos (Nombre, Precio) VALUES ('Ventilador', 79.99);
INSERT INTO productos (Nombre, Precio) VALUES ('Televisor LED', 449.00);
INSERT INTO productos (Nombre, Precio) VALUES ('Secadora de ropa', 399.99);
GO
