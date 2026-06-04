---
title: Table.Buffer
---

# Table.Buffer


在内存中缓冲一个表，同时在计算期间使其与外部更改隔离。


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

在内存中缓冲一个表，使其在评估过程中与外部更改隔离。 缓冲是浅层的。它会强制计算所有标量单元格值，但会保留非标量值(如记录、列表、表等)原样。

-   `table`: 要在内存中缓冲的表。
-   `options`: (可选)可以使用以下选项记录值:
    -   `BufferMode`: 描述要执行的缓冲类型的缓冲模式。此选项可以是 `BufferMode.Eager` 或 `BufferMode.Delayed`。

使用此函数可能会或可能不会使查询运行得更快。在某些情况下，由于需要额外 读取所有数据并将其存储在内存中的开销，以及缓冲会阻止下游折叠这一事实，它可能会使查询运行得更慢。如果数据不需要 缓冲，但你只是想阻止下游折叠，请改用 `Table.StopFolding`。


## Examples

### Example #1
将 SQL 表的所有行加载到内存中，从而使得所有下游操作都无法再查询 SQL Server。
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
