---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Az Azure Cosmos DB adatbázisok tábláját adja vissza a(z) <code>url</code> URL-címen. Ha a <code>database</code> értéket adja meg, a rendszer a gyűjtemények tábláját adja vissza. Ezenfelül, ha megadja a <code>Query</code> mezőt az <code>options</code> szakaszban, akkor a rendszer a megadott adatbázison és/vagy gyűjteményen végrehajtott lekérdezés eredményét adja vissza.


