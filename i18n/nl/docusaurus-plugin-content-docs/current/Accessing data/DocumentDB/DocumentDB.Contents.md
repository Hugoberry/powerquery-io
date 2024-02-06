---
title: DocumentDB.Contents
---

# DocumentDB.Contents


De URL van een Azure Cosmos DB-account invoeren.


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

Hiermee wordt een tabel met Azure Cosmos DB-databases op <code>url</code> geretourneerd. Als <code>database</code> is opgegeven, wordt een tabel met verzamelingen geretourneerd. Tevens geldt dat als het veld <code>Query</code> is opgegeven in de record <code>options</code>, de resultaten worden geretourneerd van de query die wordt uitgevoerd op de opgegeven database en/of verzameling.


