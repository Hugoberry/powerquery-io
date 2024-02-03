---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Tiek atgriezta tabula ar Azure Cosmos DB datu bāzēm, kas pieejamas vietrādī <code>url</code>. Ja ir norādīta datu bāze <code>database</code>, tiek atgriezta kolekciju tabula. Turklāt, ja ierakstā <code>options</code> ir norādīts lauks <code>Query</code>, tiek atgriezti norādītajā datu bāzē un/vai kolekcijā izpildītā vaicājuma rezultāti.


