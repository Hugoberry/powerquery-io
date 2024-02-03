---
title: Table.FillDown
---

# Table.FillDown


## Description

將前一個資料格的值傳播到資料行中下方的 Null 值資料格。


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

根據指定的 <code>table</code> 傳回資料表，其中前一個資料格的值會傳播到指定之 <code>columns</code> 中下方的 Null 值資料格。


## Examples

### Example #1 
傳回資料表，其中 [Place] 資料行中的 Null 值會填入資料表中位於這些值上方的值。
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
