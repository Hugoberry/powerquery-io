---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Zadajte URL adresu konta Azure Cosmos DB.


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

Vráti tabuľku databáz Azure Cosmos DB na `url` adrese. Ak je zadaná hodnota `database`, vráti sa tabuľka kolekcií. Ak je navyše zadané pole `Query` v zázname `options`, vrátia sa výsledky dotazu vykonaného v zadanej databáze alebo kolekcii.


