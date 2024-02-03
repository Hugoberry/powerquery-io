---
title: Table.FillDown
---

# Table.FillDown


## Description

将前一个单元的值传播到该列中下面的值为 Null 的单元中。


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

从指定的 <code>table</code> 中返回一个表，其中前一个单元的值传播到指定的 <code>columns</code> 下值为 Null 的单元。


## Examples

### Example #1 
从表返回一个表，其中，列 [Place] 中的 null 值使用这些值上方的值填充。
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
