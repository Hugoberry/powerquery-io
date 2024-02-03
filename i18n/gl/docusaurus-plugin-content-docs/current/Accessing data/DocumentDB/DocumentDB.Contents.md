---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Devolve unha táboa de bases de datos de Azure Cosmos DB en <code>url</code>. Se se especifica <code>database</code>, no seu lugar devolverase unha táboa de coleccións. Ademais, se se especifica o campo <code>Query</code> no rexistro de <code>options</code>, devolveranse os resultados da consulta que se está a executar na base de datos ou colección especificadas.


