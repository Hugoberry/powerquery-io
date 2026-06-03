---
title: Table.StopFolding
---

# Table.StopFolding


Impedisce che qualsiasi operazione downstream venga eseguita a confronto con la fonte originale dei dati.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Impedisce che qualsiasi operazione downstream venga eseguita a confronto con la fonte originale dei dati in`table`.


## Examples

### Example #1
Recupera i dati da una tabella SQL in modo da impedire l'esecuzione di operazioni downstream come query in SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
