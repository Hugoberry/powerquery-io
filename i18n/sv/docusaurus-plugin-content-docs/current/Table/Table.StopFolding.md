---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Förhindrar att underordnade åtgärder körs mot den ursprungliga datakällan.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Förhindrar att underordnade åtgärder körs mot den ursprungliga datakällan i <code>table</code>.


## Examples

### Example #1 
Hämtar data från en SQL-tabell på ett sätt som förhindrar att underordnade åtgärder körs som en fråga på SQL-servern.
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
