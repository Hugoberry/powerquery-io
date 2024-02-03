---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Zadejte URL účtu Azure Cosmos DB.


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

Vrátí tabulku databází Azure Cosmos DB na adrese <code>url</code>. Když je zadáno <code>database</code>, vrátí se místo tabulky databází tabulka kolekcí. Když je navíc zadáno pole <code>Dotaz</code> v záznamu <code>možnosti</code>, vrátí se výsledky dotazu provedeného na zadanou databázi nebo kolekci.


