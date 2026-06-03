---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


复制具有指定名称的列。从源列复制值和类型。


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

将名为 `columnName` 的列复制到表 `table`。列 `newColumnName` 的值和类型从列 `columnName` 复制。


## Examples

### Example #1
将列 "a" 复制到表 `({[a = 1, b = 2], [a = 3, b = 4]})` 中名为 "copied column" 的列。
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
