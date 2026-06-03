---
title: Table.ReplaceRows
---

# Table.ReplaceRows


指定された範囲の行を指定された行に置き換えます。


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

入力 `table` で、`offset` 行後から、指定された数の行 (`count` 行) を指定された `rows` に置き換えます。`rows` パラメーターは、レコードの一覧です。

-   `table`: 置換を実行するテーブル。
-   `offset`: 置換を行う前にスキップする行の数。
-   `count`: 置き換える行の数。
-   `rows`: `offset` で指定された位置の `table` に挿入する行レコードの一覧。


## Examples

### Example #1
位置 1 から 3 つの行を置き換えます。
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
