---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Entrez l'URL d'un compte Azure Cosmos DB.


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

Retourne une table de bases de données Azure Cosmos DB à `url`. Si `database` est spécifié, une table de collections est retournée à la place. Si le champ `Query` est spécifié dans l'enregistrement `options`, les résultats de la requête en cours d'exécution sur la base de données et/ou la collection spécifiées sont également retournés.


