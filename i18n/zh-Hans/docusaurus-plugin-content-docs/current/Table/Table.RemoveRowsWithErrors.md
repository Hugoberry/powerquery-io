---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


返回一个表，其中已从输入表中删除了在至少一个单元中包含错误的行。如果指定了列列表，则只检查指定列中的单元内是否有错误。


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

返回一个表，其中已从输入表中删除了在至少一个单元中包含错误的行。如果指定了列列表，则只检查指定列中的单元内是否有错误。


## Examples

### Example #1 
从第一行中删除错误值。
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
