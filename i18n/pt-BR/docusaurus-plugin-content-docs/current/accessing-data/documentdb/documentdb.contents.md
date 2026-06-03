---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Insira a URL de uma conta do Azure Cosmos DB.


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

Retorna uma tabela de bancos de dados do Azure Cosmos DB em `URL`. Em vez disso, se o `database` for especificado, uma tabela de coleções será retornada. Além disso, se o campo `Query` for especificado no registro `options`, os registros dos resultados da consulta em execução no banco de dados especificado e/ou na coleção serão retornados.


