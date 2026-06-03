---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Specificare l'URL di un account Azure Cosmos DB.


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

Restituisce una tabella di database Azure Cosmos DB in `url`. Se è stato specificato un `database` verrà restituita una tabella di raccolte. Se è stato specificato il campo `Query` nel record `options`, verranno restituiti i risultati della query eseguita sul database e/o sulla raccolta.


