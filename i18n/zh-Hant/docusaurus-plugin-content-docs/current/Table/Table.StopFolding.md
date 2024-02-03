---
title: Table.StopFolding
---

# Table.StopFolding


## Description

防止對資料的原始來源執行任何下游作業。


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

防止對 <code>table</code> 中資料的原始來源執行任何下游作業。


## Examples

### Example #1 
從 SQL 資料表擷取資料，以防止任何下游作業以查詢方式在 SQL Server 上執行。
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
