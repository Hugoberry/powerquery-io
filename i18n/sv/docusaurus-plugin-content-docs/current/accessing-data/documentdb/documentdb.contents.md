---
title: DocumentDB.Contents
---

# DocumentDB.Contents


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


## Remarks

Returnerar en tabell för Azure Cosmos DB-databaser på `url`. Om du anger `database` returneras istället en tabell över samlingar. Om dessutom fältet `Query` anges i posten `options` returneras resultatet för frågan som körs på den angivna databasen och/eller samlingen.


