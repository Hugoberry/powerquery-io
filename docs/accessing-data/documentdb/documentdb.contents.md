---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Enter the URL of an Azure Cosmos DB account.


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

Returns a table of Azure Cosmos DB databases at `url`. If `database` is specified, a table of collections will be returned instead. Additionally, if the field `Query` is specified in the `options` record the results of the query being executed on either the specified database and/or collection will be returned.


