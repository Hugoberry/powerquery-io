---
title: Table.StopFolding
---

# Table.StopFolding


Hiermee voorkomt u dat downstreambewerkingen worden uitgevoerd op de oorspronkelijke bron van de gegevens.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Hiermee voorkomt u dat downstreambewerkingen worden uitgevoerd op de oorspronkelijke bron van de gegevens in <code>table</code>.


## Examples

### Example #1 
Hiermee worden gegevens opgehaald uit een SQL-tabel op een manier die voorkomt dat downstreambewerkingen worden uitgevoerd als een query op de SQL-server.
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
