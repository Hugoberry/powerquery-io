---
title: Table.Partition
---

# Table.Partition


根據指定的群組和資料行數目，將資料表分割成資料表清單。


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

根據 `column` 的值和 `hash` 函數，將 `table` 分割成 `groups` 份資料表的清單。 `hash` 函數會套用至 `column` 資料列的值，以便取得該資料列的雜湊值。雜湊值模數 `groups` 會決定要將該資料列放入哪些傳回的資料表中。

-   `table`: 要分割的資料表。
-   `column`: 要雜湊處理的資料行，以便決定該資料列會位於哪些傳回的資料表中。
-   `groups`: 輸入資料表即將分割成為的資料表數目。
-   `hash`: 套用以取得雜湊值的函數。


## Examples

### Example #1
使用資料行的值做為雜湊函數，針對資料行 \[a\]，將資料表 `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` 分割成 2 份資料表。
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
