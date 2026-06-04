---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Especifiqueu l'URL d'un compte de l'Azure Cosmos DB.


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

Retorna una taula de les bases de dades de l'Azure Cosmos DB a `url`. Si s'especifica `database`, es retornarà una taula de col·leccions com a alternativa. A més, si s'especifica el camp `Query` al registre `options`, es retornaran els resultats de la consulta que s'executa a la base de dades especificada o a la col·lecció.


