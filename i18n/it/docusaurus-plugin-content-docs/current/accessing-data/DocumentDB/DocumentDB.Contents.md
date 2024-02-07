---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Specificare l&#39;URL di un account Azure Cosmos DB.


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

Restituisce una tabella di database Azure Cosmos DB in <code>url</code>. Se è stato specificato un <code>database</code> verrà restituita una tabella di raccolte. Se è stato specificato il campo <code>Query</code> nel record <code>options</code>, verranno restituiti i risultati della query eseguita sul database e/o sulla raccolta.


