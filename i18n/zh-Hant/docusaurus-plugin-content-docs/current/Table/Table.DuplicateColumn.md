---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


複製具有指定名稱的資料行。值和類型是從來源資料行複製的。


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

將名為 `columnName` 的資料行複製到資料表 `table`。資料行 `newColumnName` 的值和類型是從資料行 `columnName` 所複製。


## Examples

### Example #1
將資料行 "a" 複製到資料表 `({[a = 1, b = 2], [a = 3, b = 4]})` 中名為 "copied column" 的資料行。
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
