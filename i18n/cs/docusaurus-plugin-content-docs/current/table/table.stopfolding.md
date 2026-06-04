---
title: Table.StopFolding
---

# Table.StopFolding


Brání spuštění podřízených operací na původním zdroji dat.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Brání spuštění podřízených operací na původním zdroji dat v `table`.


## Examples

### Example #1
Načte data z tabulky SQL způsobem, který brání spuštění podřízených operací jako dotazu na serveru SQL.
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
