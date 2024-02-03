---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Especifiqueu l&#39;URL d&#39;un compte de l&#39;Azure Cosmos DB.


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

Retorna una taula de les bases de dades de l'Azure Cosmos DB a <code>url</code>. Si s'especifica <code>database</code>, es retornarà una taula de col·leccions com a alternativa. A més, si s'especifica el camp <code>Query</code> al registre <code>options</code>, es retornaran els resultats de la consulta que s'executa a la base de dades especificada o a la col·lecció.


