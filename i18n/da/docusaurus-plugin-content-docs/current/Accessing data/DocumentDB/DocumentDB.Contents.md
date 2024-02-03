---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Returnerer en tabel med Azure Cosmos DB-databaser på <code>url</code>. Hvis <code>database</code> er angivet, returneres der en tabel med samlinger i stedet. Hvis feltet <code>Query</code> angives i posten <code>options</code>, returneres resultaterne af den forespørgsel, der køres på den angivne database og/eller samling.


