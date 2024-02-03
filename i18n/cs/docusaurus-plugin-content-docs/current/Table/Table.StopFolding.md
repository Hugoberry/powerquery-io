---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Brání spuštění podřízených operací na původním zdroji dat.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Brání spuštění podřízených operací na původním zdroji dat v <code>table</code>.


## Examples

### Example #1 
Načte data z tabulky SQL způsobem, který brání spuštění podřízených operací jako dotazu na serveru SQL.
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
