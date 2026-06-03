---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Angiv URL-adressen for en Azure Cosmos DB-konto.


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

Returnerer en tabel med Azure Cosmos DB-databaser på `url`. Hvis `database` er angivet, returneres der en tabel med samlinger i stedet. Hvis feltet `Query` angives i posten `options`, returneres resultaterne af den forespørgsel, der køres på den angivne database og/eller samling.


