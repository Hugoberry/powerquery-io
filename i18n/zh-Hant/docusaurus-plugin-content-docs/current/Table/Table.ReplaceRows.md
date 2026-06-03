---
title: Table.ReplaceRows
---

# Table.ReplaceRows


以提供的資料列取代指定範圍的資料列。


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

以指定的 `rows` 取代輸入 `table` 中指定數目的資料列 `count`，從 `offset` 之後開始。`rows` 參數是記錄的清單。

-   `table`: 執行取代的資料表。
-   `offset`: 要在進行取代之前略過的資料列數目。
-   `count`: 要取代的資料列數目。
-   `rows`: 要依照 `offset` 指定的位置插入 `table` 中的資料列記錄清單。


## Examples

### Example #1
從位置 1 開始，取代 3 個資料列。
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
