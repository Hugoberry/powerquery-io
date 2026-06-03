---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


指定された名前の列が重複しています。値と型が基になる列からコピーされます。


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

テーブル `columnName` に対して `table` という名前の列が重複しています。列 `newColumnName` の値と型が列 `columnName` からコピーされます。


## Examples

### Example #1
テーブル `({[a = 1, b = 2], [a = 3, b = 4]})` 内の "copied column" という名前の列に対して列 "a" が重複しています。
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
