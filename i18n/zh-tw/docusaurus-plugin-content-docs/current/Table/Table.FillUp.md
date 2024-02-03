---
title: Table.FillUp
---

# Table.FillUp


## Description

將資料格的值傳播到資料行中上方的 Null 值資料格。


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

根據指定的 <code>table</code> 傳回資料表，其中下一個資料格的值會傳播到指定之 <code>columns</code> 中上方的 Null 值資料格。


## Examples

### Example #1 
傳回資料表，其中 [Column2] 資料行中的 Null 值會填入資料表中位於這些值下方的值。
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
