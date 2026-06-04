---
title: Table.StopFolding
---

# Table.StopFolding


Împiedică rularea oricăror operațiuni în aval față de sursa originală a datelor.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Împiedică rularea oricăror operațiuni în aval față de sursa originală a datelor din `table`.


## Examples

### Example #1
Preia date dintr-un tabel SQL într-un mod care împiedică rularea oricăror operațiuni în aval ca interogare pe serverul SQL.
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
