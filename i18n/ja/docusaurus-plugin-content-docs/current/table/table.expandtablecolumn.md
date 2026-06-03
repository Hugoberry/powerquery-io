---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


レコード列またはテーブル列を親テーブルの複数の列に展開します。


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

`table`\[`column`\] 内のテーブルを複数の行と列に展開します。`columnNames` を使用して、入れ子のテーブルから展開する列を選択します。既存の列と新しい列が競合しないように、`newColumnNames` を指定してください。


## Examples

### Example #1
テーブル `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` の `[a]` のテーブル列を `[t.a]`、`[t.b]`、`[t.c]` の 3 つの列に展開します。
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
