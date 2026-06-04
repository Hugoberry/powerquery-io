---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Adja meg egy Azure Cosmos DB-fiók URL-címét.


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

Az Azure Cosmos DB adatbázisok tábláját adja vissza a(z) `url` URL-címen. Ha a `database` értéket adja meg, a rendszer a gyűjtemények tábláját adja vissza. Ezenfelül, ha megadja a `Query` mezőt az `options` szakaszban, akkor a rendszer a megadott adatbázison és/vagy gyűjteményen végrehajtott lekérdezés eredményét adja vissza.


