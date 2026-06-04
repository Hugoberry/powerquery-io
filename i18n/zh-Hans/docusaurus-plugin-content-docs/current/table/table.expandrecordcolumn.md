---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


将记录列扩展为具有每个值的列。


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

给定输入 `table` 中的 `column` 条记录后，创建一个表，其中针对记录中的每个字段都有一列。也可以指定 `newColumnNames`，以确保新表中的各列具有唯一名称。

-   `table`: 原始表以及要扩展的记录列。
-   `column`: 要扩展的列。
-   `fieldNames`: 要扩展到表中各列的字段列表。
-   `newColumnNames`: 给予新列的列名的列表。新列名不能与新表中的任何列重复。


## Examples

### Example #1
将表 `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` 中的列 \[a\] 扩展为 3 列 "aa"、"bb" 和 "cc"。
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
