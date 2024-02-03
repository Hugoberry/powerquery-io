---
title: Table.StopFolding
---

# Table.StopFolding


## Description

データの元のソースに対して下流の操作が実行されないようにします。


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

<code>table</code> のデータの元のソースに対して下流の操作が実行されないようにします。


## Examples

### Example #1 
SQL サーバーで下流の操作がクエリとして実行されないように、SQL テーブルからデータをフェッチします。
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
