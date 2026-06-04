---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Ievadiet Azure Cosmos DB konta vietrādi URL.


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

Tiek atgriezta tabula ar Azure Cosmos DB datu bāzēm, kas pieejamas vietrādī `url`. Ja ir norādīta datu bāze `database`, tiek atgriezta kolekciju tabula. Turklāt, ja ierakstā `options` ir norādīts lauks `Query`, tiek atgriezti norādītajā datu bāzē un/vai kolekcijā izpildītā vaicājuma rezultāti.


