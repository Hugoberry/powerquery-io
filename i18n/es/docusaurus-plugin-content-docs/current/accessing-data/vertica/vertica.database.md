---
title: Vertica.Database
---

# Vertica.Database


Importa datos de Vertica.


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de los esquemas disponibles en el servidor denominado mediante el parámetro `server` en la base de datos denominada mediante el parámetro `database`. Es posible proporcionar un parámetro de registro opcional `options` para especificar propiedades adicionales. Dicho registro puede contener los siguientes campos:

-   `ConnectionTimeout`: duración que controla el período que hay que esperar antes de abandonar un intento de establecer la conexión con el servidor. El valor predeterminado depende del controlador.
-   `CommandTimeout` : duración que controla el período en el que se permite ejecutar la consulta del lado servidor antes de cancelarla. El valor predeterminado depende del controlador.


## Examples

### Example #1
Enumera las tablas en Vertica.
```powerquery

```



