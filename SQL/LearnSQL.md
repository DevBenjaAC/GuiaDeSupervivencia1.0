# Algunos apuntes de SQL
## Hola. Estos son algunos comandos que ultilizaras comunmente dentro de btobfact.

SELECT- extrae datos de una base de datos
UPDATE- actualiza datos en una base de datos
DELETE- elimina datos de una base de datos
INSERT INTO- inserta nuevos datos en una base de datos
CREATE DATABASE- crea una nueva base de datos
ALTER DATABASE- modifica una base de datos
CREATE TABLE- crea una nueva tabla
ALTER TABLE- modifica una tabla
DROP TABLE- elimina una tabla
CREATE INDEX- crea un índice (clave de búsqueda)
DROP INDEX- elimina un índice

=	Equal	
>	Greater than	
<	Less than	
>=	Greater than or equal	
<=	Less than or equal	
<>	Not equal. Note: In some versions of SQL this operator may be written as !=	
BETWEEN	Between a certain range	
LIKE	Search for a pattern	
IN	To specify multiple possible values for a column


## --CREAR TABLA
CREATE TABLE DatosFiscales (
Rfc VARCHAR(13) NOT NULL,
Nombre VARCHAR(100) NOT NULL,
RegimenFiscal VARCHAR(100) NOT NULL,
DomicilioFiscal VARCHAR(200) NOT NULL,
CONSTRAINT PK_DatosFiscales PRIMARY KEY (Rfc)
);

## --INSERTAR DATOS EN TABLA
INSERT INTO DatosFiscales (Rfc, Nombre, RegimenFiscal, DomicilioFiscal)
VALUES ('ABC123456789', 'Empresa ABC', 'Régimen Fiscal ABC', 'Av. Principal #123, Col. Centro, Ciudad ABC');

## --Consulta los datos
SELECT * FROM DatosFiscales;

## --Actualizar datos
UPDATE DatosFiscales 
SET DomicilioFiscal = 'Nuevo domicilio fiscal' 
WHERE Rfc = 'ABC123456789';

## --Actualizar varios datos al mismo tiempo
UPDATE DatosFiscales 
SET Nombre = 'Nuevo nombre', DomicilioFiscal = 'Nuevo domicilio fiscal' 
WHERE Rfc = 'ABC123456789';

## --Borrar datos cuando el nombre es
DELETE FROM DatosFiscales 
WHERE Nombre = 'Nombre a borrar';

## --Insertar una nueva columna con ID autoincremental
ALTER TABLE DatosFiscales ADD ID INT IDENTITY(1,1) PRIMARY KEY;

## --Consultar cuando contenga ciertos caracteres
SELECT Rfc
FROM DatosFiscales
WHERE Rfc LIKE '%multiplescaracteres%';

# Realcion 1-n 
Un usuario puede crear muchos productos
un producto solo puede ser creado por un usuario

# Relacion n-n 
Un alumno pude estar inscrito en muchos deportes
un deporte puede tener muchos alumnos inscritos
alumno.id deporte.id 

## TIPS
Los datos horizontales son registros 
Los valores que se encuentran dentro de las columnas son DATOS 
Por lo general la tabla de usuarios de SQL sera la mas importante.
las columnas que tienen ID se les conoce como primary key.
si el Id se encuentra dentro de otra columna para indicar el usuario es foreight key

