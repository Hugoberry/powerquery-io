---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Escriba o URL dunha conta de Azure Cosmos DB.


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

Devolve unha táboa de bases de datos de Azure Cosmos DB en `url`. Se se especifica `database`, no seu lugar devolverase unha táboa de coleccións. Ademais, se se especifica o campo `Query` no rexistro de `options`, devolveranse os resultados da consulta que se está a executar na base de datos ou colección especificadas.


