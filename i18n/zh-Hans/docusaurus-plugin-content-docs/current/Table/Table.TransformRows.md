---
title: Table.TransformRows
---

# Table.TransformRows


使用指定的转换函数转换表的行。


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

通过将 <code>transform</code> 操作应用于 <code>table</code> 中的每一行来创建<code>列表</code>。


## Examples

### Example #1 
将表的行转换为数字列表。
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
将数值表的行转换为文本记录。
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
