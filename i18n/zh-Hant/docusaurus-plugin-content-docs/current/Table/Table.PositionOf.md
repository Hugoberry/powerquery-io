---
title: Table.PositionOf
---

# Table.PositionOf


傳回資料列在資料表中的位置。


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

傳回指定的 `row` 中第一次出現 `table` 的資料列位置。如果沒有出現，則會傳回 -1。

-   `table`: 輸入資料表。
-   `row`: 要在資料表中尋找其位置的資料列。
-   `occurrence`: *(選用)* 指定要傳回的資料列出現次數。
-   `equationCriteria`: *(選用)* 控制資料表資料列之間的比較方式。


## Examples

### Example #1
尋找資料表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 中第一次出現 \[a = 2, b = 4\] 的位置。
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
尋找資料表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 中第二次出現 \[a = 2, b = 4\] 的位置。
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
尋找資料表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 中出現 \[a = 2, b = 4\] 的所有位置。
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
