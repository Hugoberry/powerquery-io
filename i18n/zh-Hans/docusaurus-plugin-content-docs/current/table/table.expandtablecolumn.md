---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


将一个记录列或表列扩展到包含表中的多列。


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

将 `table`\[`column`\] 中的表扩展为多个行和列。`columnNames` 用于从内部表中选择要扩展的列。指定 `newColumnNames` 以避免现有列与新列之间的冲突。


## Examples

### Example #1
将表 `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` 的 `[a]` 中的表列扩展为 3 列 `[t.a]`、`[t.b]` 和 `[t.c]`。
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
