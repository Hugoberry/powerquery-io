---
title: Table.StopFolding
---

# Table.StopFolding


Verhindert, dass Downstreamvorgänge für die ursprüngliche Quelle der Daten ausgeführt werden.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Verhindert, dass Downstreamvorgänge für die ursprüngliche Quelle der Daten in <code>table</code> ausgeführt werden.


## Examples

### Example #1 
Ruft Daten aus einer SQL-Tabelle auf eine Weise ab, die verhindert, dass Downstreamvorgänge als Abfrage auf dem SQL Server ausgeführt werden.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(dbo_MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
