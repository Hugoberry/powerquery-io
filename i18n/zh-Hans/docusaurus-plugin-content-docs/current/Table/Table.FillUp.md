---
title: Table.FillUp
---

# Table.FillUp


将一个单元的值传播到该列中上面的值为 Null 的单元中。


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

从指定的 <code>table</code> 中返回一个表，其中下一个单元的值传播到指定的 <code>columns</code> 上面值为 Null 的单元。


## Examples

### Example #1 
从表返回一个表，其中，列 [Column2] 中的 null 值使用这些值下方的值填充。
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
