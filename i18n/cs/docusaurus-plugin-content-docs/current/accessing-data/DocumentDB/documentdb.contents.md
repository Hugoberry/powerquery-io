---
title: DocumentDB.Contents
---

# DocumentDB.Contents


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


## Remarks

Vrátí tabulku databází Azure Cosmos DB na adrese `url`. Když je zadáno `database`, vrátí se místo tabulky databází tabulka kolekcí. Když je navíc zadáno pole `Dotaz` v záznamu `možnosti`, vrátí se výsledky dotazu provedeného na zadanou databázi nebo kolekci.


