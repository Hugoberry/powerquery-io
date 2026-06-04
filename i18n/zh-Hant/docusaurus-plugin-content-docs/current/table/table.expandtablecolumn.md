---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


將記錄的資料行或資料表的資料行擴充成包含資料表中的多個資料行。


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

將 `table`\[`column`\] 中的資料表擴充成多個資料列與資料行。`columnNames` 是用來選取內部資料表中要擴充的資料行。請指定 `newColumnNames` 以避免現有的資料行與新的資料行發生衝突。


## Examples

### Example #1
將資料表 `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` 之 `[a]` 中的資料表資料行擴充成 3 個資料行 `[t.a]`、`[t.b]` 和 `[t.c]`。
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
