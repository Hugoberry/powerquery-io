---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Escriba la URL de una cuenta de Azure Cosmos DB.


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de bases de datos de Azure Cosmos DB en `url`. Si se especifica `database`, se devolverá una tabla de colecciones. Además, si se especifica el campo `Query` en el registro `options`, se devolverán los resultados de la consulta que se está ejecutando en la colección o base de datos especificadas.


