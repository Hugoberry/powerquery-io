---
title: Table.PositionOfAny
---

# Table.PositionOfAny


傳回任何指定之資料列在資料表中的位置。


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

傳回 `table` 中第一次出現 `rows` 清單的資料列位置。如果沒有出現，則會傳回 -1。

-   `table`: 輸入資料表。
-   `rows`: 要在資料表中尋找其位置的資料列清單。
-   `occurrence`: *(選用)* 指定要傳回的資料列出現次數。
-   `equationCriteria`: *(選用)* 控制資料表資料列之間的比較方式。


## Examples

### Example #1
尋找資料表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 中第一次出現 \[a = 2, b = 4\] 或 \[a = 6, b = 8\] 的位置。
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
尋找資料表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}` 中出現 \[a = 2, b = 4\] 或 \[a = 6, b = 8\] 的所有位置。
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
