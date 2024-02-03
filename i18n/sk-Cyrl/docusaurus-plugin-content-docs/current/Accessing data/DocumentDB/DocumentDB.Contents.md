---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Vráti tabuľku databáz Azure Cosmos DB na <code>url</code> adrese. Ak je zadaná hodnota <code>database</code>, vráti sa tabuľka kolekcií. Ak je navyše zadané pole <code>Query</code> v zázname <code>options</code>, vrátia sa výsledky dotazu vykonaného v zadanej databáze alebo kolekcii.


