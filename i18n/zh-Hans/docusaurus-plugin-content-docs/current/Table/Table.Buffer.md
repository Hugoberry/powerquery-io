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

在内存中缓冲表，在评估期间将其与外部更改隔离。    缓冲较浅。它强制计算所有标量单元值，但保留非标量值(记录、列表以及表等)不变。    <br />    <br />    请注意，使用此函数可能会也可能不会加快查询运行。在一些情况下，它可能会使查询的运行速度变慢，这是因为读取所有数据并将其存储在内存中增加了    成本，且存在缓冲阻止下游折叠这一事实。如果数据不需要    缓冲，而你只想防止下游折叠，请改为使用 <code>Table.StopFolding</code>。


## Examples

### Example #1 
将 SQL 表的所有行加载到内存中，从而使得所有下游操作都将无法再查询 SQL Server。
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
