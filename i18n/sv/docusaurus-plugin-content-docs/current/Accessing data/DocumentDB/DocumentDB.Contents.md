---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Ange URL:en för ett Azure Cosmos DB-konto.


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

Returnerar en tabell för Azure Cosmos DB-databaser på <code>url</code>. Om du anger <code>database</code> returneras istället en tabell över samlingar. Om dessutom fältet <code>Query</code> anges i posten <code>options</code> returneras resultatet för frågan som körs på den angivna databasen och/eller samlingen.


