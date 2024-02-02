---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Entrez l&#39;URL d&#39;un compte Azure Cosmos DB.


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

Retourne une table de bases de données Azure Cosmos DB à <code>url</code>. Si <code>database</code> est spécifié, une table de collections est retournée à la place. Si le champ <code>Query</code> est spécifié dans l'enregistrement <code>options</code>, les résultats de la requête en cours d'exécution sur la base de données et/ou la collection spécifiées sont également retournés.


