---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Introduzir o URL de uma conta do Azure Cosmos DB.


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

Devolve uma tabela de bases de dados do Azure Cosmos DB em <code>url</code>. Se <code>database</code> estiver especificado, será antes devolvida uma tabela de coleções. Além disso, se o campo <code>Query</code> estiver especificado no registo <code>options</code>, serão devolvidos os resultados da consulta em execução na base de dados e/ou coleção especificada.


