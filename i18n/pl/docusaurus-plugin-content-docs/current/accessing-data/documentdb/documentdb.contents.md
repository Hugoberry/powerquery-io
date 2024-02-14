---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Wprowadź adres URL konta usługi Azure Cosmos DB.


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

Zwraca tabelę z bazami danych usługi Azure Cosmos DB w elemencie <code>url</code>. W przypadku określenia elementu <code>database</code> zamiast tego zostanie zwrócona tabela kolekcji. Ponadto w przypadku określenia pola <code>Query</code> w rekordzie <code>options</code> zostaną zwrócone wyniki zapytania wykonywanego w określonej bazie danych i/lub kolekcji.


