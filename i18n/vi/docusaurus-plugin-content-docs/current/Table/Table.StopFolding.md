---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Ngăn mọi thao tác xuôi dòng chạy dựa trên nguồn dữ liệu gốc.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Ngăn mọi thao tác xuôi dòng chạy dựa trên nguồn dữ liệu gốc trong <code>table</code>.


## Examples

### Example #1 
Tải dữ liệu từ bảng SQL theo cách ngăn không mọi thao tác xuôi dòng chạy dưới dạng truy vấn trên SQL server.
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
