---
title: Table.StopFolding
---

# Table.StopFolding


## Description

防止任何下游操作针对原始数据源运行。


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

防止任何下游操作针对 <code>table</code> 中的原始数据源运行。


## Examples

### Example #1 
以防止任何下游操作在 SQL 服务器上作为查询运行的方式从 SQL 表中获取数据。
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
