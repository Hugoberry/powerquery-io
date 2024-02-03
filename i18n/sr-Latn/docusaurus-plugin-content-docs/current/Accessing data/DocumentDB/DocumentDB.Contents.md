---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Returns a table of Azure Cosmos DB databases at <code>url</code>. If <code>database</code> is specified, a table of collections will be returned instead. Additionally, if the field <code>Query</code> is specified in the <code>options</code> record the results of the query being executed on either the specified database and/or collection will be returned.


