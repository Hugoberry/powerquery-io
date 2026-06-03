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

Zwraca tabelę z bazami danych usługi Azure Cosmos DB w elemencie `url`. W przypadku określenia elementu `database` zamiast tego zostanie zwrócona tabela kolekcji. Ponadto w przypadku określenia pola `Query` w rekordzie `options` zostaną zwrócone wyniki zapytania wykonywanego w określonej bazie danych i/lub kolekcji.


