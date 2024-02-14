---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Hiermit wird die URL eines Azure Cosmos DB-Kontos angegeben.


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

Hiermit wird eine Tabelle mit Azure Cosmos DB-Datenbanken unter <code>url</code> zurückgegeben. Wenn <code>database</code> angegeben ist, wird stattdessen eine Tabelle mit Sammlungen zurückgegeben. Wenn außerdem das Feld <code>Query</code> im <code>options</code>-Datensatz angegeben wurde, werden die Ergebnisse der Abfrage zurückgegeben, die für die angegebene Datenbank oder Sammlung ausgeführt wird.


