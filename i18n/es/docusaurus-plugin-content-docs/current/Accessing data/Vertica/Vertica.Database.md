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

Devuelve una tabla de los esquemas disponibles en el servidor denominado mediante el parámetro <code>server</code> en la base de datos denominada mediante el parámetro <code>database</code>.Es posible proporcionar un parámetro de registro opcional <code>options</code> para especificar propiedades adicionales. Dicho registro puede contener los siguientes campos:<ul>    <li><code>ConnectionTimeout</code>: duración que controla el período que hay que esperar antes de abandonar un intento de establecer la conexión con el servidor. El valor predeterminado depende del controlador.</li>    <li><code>CommandTimeout </code>: duración que controla el período en el que se permite ejecutar la consulta del lado servidor antes de cancelarla. El valor predeterminado depende del controlador.</li></ul>


## Examples

### Example #1 
Enumera las tablas en Vertica.
```powerquery

```



