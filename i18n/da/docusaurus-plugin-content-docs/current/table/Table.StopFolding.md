---
title: Table.StopFolding
---

# Table.StopFolding


Forhindrer, at der køres downstream-handlinger mod den oprindelige datakilde.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Forhindrer, at der køres downstream-handlinger mod den oprindelige datakilde i <code>table</code>.


## Examples

### Example #1 
Henter data fra en SQL-tabel på en måde, der forhindrer, at downstream-handlinger køres som en forespørgsel på SQL-serveren.
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
