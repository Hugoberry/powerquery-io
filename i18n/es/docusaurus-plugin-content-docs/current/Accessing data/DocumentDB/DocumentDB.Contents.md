---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Devuelve una tabla de bases de datos de Azure Cosmos DB en <code>url</code>. Si se especifica <code>database</code>, se devolverá una tabla de colecciones. Además, si se especifica el campo <code>Query</code> en el registro <code>options</code>, se devolverán los resultados de la consulta que se está ejecutando en la colección o base de datos especificadas.


